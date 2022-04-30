// react
import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
import Slick, { Settings } from 'react-slick';
// application
import { useDirection } from '~/services/i18n/hooks';

export type ISlickProps = Settings;

interface Props extends ISlickProps {
    children: React.ReactNode;
    forwardRef: React.RefCallback<Slick | null> | React.MutableRefObject<Slick | null> | null;
}

function AppSlickInner(props: Props) {
    const {
        children,
        forwardRef,
        beforeChange,
        ...otherProps
    } = props;
    const direction = useDirection();
    const slickRef = useRef<Slick | null>(null);
    const originalSlickNextRef = useRef<() => void>(() => {});
    const originalSlickPrevRef = useRef<() => void>(() => {});
    const slickNextRef = useRef<() => void>(() => {});
    const slickPrevRef = useRef<() => void>(() => {});

    const getSlidesCount = () => (
        React.Children.toArray(children).length
    );

    const getSlidesToShow = () => {
        const { responsive, slidesToShow } = props;

        let result = slidesToShow || 1;

        if (process.browser && responsive) {
            responsive.forEach((options) => {
                if (options.settings === 'unslick') {
                    return;
                }

                const { matches } = matchMedia(`(max-width: ${options.breakpoint}px)`);

                if (matches && options.settings.slidesToShow) {
                    result = options.settings.slidesToShow;
                }
            });
        }

        return result;
    };

    // react-slick has a bug due to which it is initialized
    // with the incorrect position if the RTL property is true
    // this function returns the correct values
    const getStartPosition = () => {
        let { infinite } = props;

        infinite = infinite === true || infinite === undefined;

        if (direction === 'ltr') {
            return 0;
        }

        const slidesToShow = getSlidesToShow();
        const slidesCount = getSlidesCount();

        if (!infinite) {
            return Math.max(0, slidesCount - slidesToShow);
        }

        return (Math.ceil(slidesCount / slidesToShow) - 1) * slidesToShow;
    };

    // returns indexes of active slides by currentIndex
    const getActiveSlides = (currentIndex: number) => {
        const slidesToShow = getSlidesToShow();
        const activeSlides = [];
        const slidesCount = getSlidesCount();

        const firstSlide = Math.max(
            0,
            Math.min(
                slidesCount - slidesToShow,
                currentIndex,
            ),
        );
        const lastSlide = Math.min(
            slidesCount,
            firstSlide + slidesToShow,
        );

        for (let i = firstSlide; i < lastSlide; i += 1) {
            activeSlides.push(i);
        }

        return activeSlides;
    };

    const [preventClick, setPreventClick] = useState(false);
    const [activeSlides, setActiveSlides] = useState(getActiveSlides(getStartPosition()));

    const onMousedown = (event: React.MouseEvent<HTMLDivElement>) => {
        const downX = event.screenX;
        const downY = event.screenY;
        let clickPrevented = false;

        const onMousemove = (moveEvent: MouseEvent) => {
            if (clickPrevented) {
                return;
            }

            // Thank you Pythagoras.
            const distance = Math.sqrt(
                (Math.abs(downX - moveEvent.screenX) ** 2)
                + (Math.abs(downY - moveEvent.screenY) ** 2),
            );

            if (moveEvent.cancelable && distance > 3) {
                moveEvent.preventDefault();
            }

            if (distance > 15) {
                clickPrevented = true;
                setPreventClick(clickPrevented);
            }
        };
        const onMouseup = () => {
            clickPrevented = false;
            setPreventClick(clickPrevented);

            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('mouseup', onMouseup);
        };

        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('mouseup', onMouseup);
    };

    const setSlickRef: React.RefCallback<Slick> = useCallback((ref) => {
        if (forwardRef) {
            if ('current' in forwardRef) {
                forwardRef.current = ref;
            } else {
                forwardRef(ref);
            }
        }

        if (ref && ref !== slickRef.current) {
            // react-slick forgot that if the RTL parameter is true,
            // then the next and prev methods need to be swapped, so let's do it yourself
            originalSlickNextRef.current = ref.slickNext;
            originalSlickPrevRef.current = ref.slickPrev;

            // eslint-disable-next-line no-param-reassign
            ref.slickNext = () => slickNextRef.current && slickNextRef.current();
            // eslint-disable-next-line no-param-reassign
            ref.slickPrev = () => slickPrevRef.current && slickPrevRef.current();
        }

        slickRef.current = ref;
    }, []);

    useEffect(() => {
        slickNextRef.current = () => {
            if (direction === 'rtl') {
                originalSlickNextRef.current();
            } else {
                originalSlickNextRef.current();
            }
        };

        slickPrevRef.current = () => {
            if (direction === 'rtl') {
                originalSlickNextRef.current();
            } else {
                originalSlickPrevRef.current();
            }
        };
    }, [direction]);

    // If the slides have changed, we also need to change the active slides.
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlides(getActiveSlides(getStartPosition()));
        }, 0);

        return () => {
            clearTimeout(timer);
        };
    }, [children]);

    // Resets position when changing direction.
    useEffect(() => {
        if (slickRef.current) {
            slickRef.current.slickGoTo(getStartPosition(), true);
        }
    }, [direction]);

    const beforeChangeWrapper: ISlickProps['beforeChange'] = useCallback((oldIndex, newIndex) => {
        if (beforeChange) {
            beforeChange(oldIndex, newIndex);
        }

        // react-slick incorrectly adds the .slick-active class to slides
        // if the RTL parameter is true so we will do it ourselves
        setTimeout(() => {
            setActiveSlides(getActiveSlides(newIndex));
        }, 0);
    }, [beforeChange]);

    const classes = classNames('slick-prevent-click', {
        'slick-prevent-click--active': preventClick,
    });

    // we need to reverse slides if direction is RTL
    // because react-slick displays them in the wrong order
    let reversedChildren = React.Children.toArray(children);

    if (direction === 'rtl') {
        reversedChildren = reversedChildren.slice(0);
        reversedChildren.reverse();
    }

    reversedChildren = reversedChildren.map((slide, index) => {
        // react-slick incorrectly adds the .slick-active class to slides
        // if the RTL parameter is true so we will do it ourselves
        const slideClasses = classNames({ 'correct-slick-active': activeSlides.includes(index) });

        return (
            <div key={index} dir={direction} className={slideClasses}>
                {slide}
            </div>
        );
    });

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            className={classes}
            onMouseDown={onMousedown}
        >
            <Slick {...otherProps} rtl={direction === 'rtl'} beforeChange={beforeChangeWrapper} ref={setSlickRef}>
                {reversedChildren}
            </Slick>
        </div>
    );
}

export default React.forwardRef<Slick, React.PropsWithChildren<ISlickProps>>(
    (props, ref) => {
        const { children } = props;

        return (
            <AppSlickInner forwardRef={ref} {...props}>
                {children}
            </AppSlickInner>
        );
    },
);

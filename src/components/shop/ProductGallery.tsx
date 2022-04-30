// react
import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import Slick from 'react-slick';
// application
import AppImageNew from '~/components/shared/AppImageNew';
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import { baseUrl } from '~/services/utils';
import { useDirection } from '~/services/i18n/hooks';
import { ZoomIn24Svg } from '~/svg';

type CreateGalleryFn = (
    images: PhotoSwipe.Item[],
    options: PhotoSwipe.Options,
) => PhotoSwipe<PhotoSwipeUIDefault.Options>;

export type IProductGalleryLayout = 'product-sidebar' | 'product-full' | 'quickview';

interface Props extends React.HTMLAttributes<HTMLElement> {
    images: string[];
    layout: IProductGalleryLayout;
}

const slickSettingsFeatured = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const slickSettingsThumbnails: Record<IProductGalleryLayout, ISlickProps> = {
    'product-sidebar': {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 6 } },
            { breakpoint: 1199, settings: { slidesToShow: 8 } },
            { breakpoint: 991, settings: { slidesToShow: 8 } },
            { breakpoint: 767, settings: { slidesToShow: 6 } },
            { breakpoint: 575, settings: { slidesToShow: 5 } },
            { breakpoint: 419, settings: { slidesToShow: 4 } },
        ],
    },
    'product-full': {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 5 } },
            { breakpoint: 1199, settings: { slidesToShow: 7 } },
            { breakpoint: 991, settings: { slidesToShow: 5 } },
            { breakpoint: 767, settings: { slidesToShow: 6 } },
            { breakpoint: 575, settings: { slidesToShow: 5 } },
            { breakpoint: 419, settings: { slidesToShow: 4 } },
        ],
    },
    quickview: {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 6 } },
            { breakpoint: 519, settings: { slidesToShow: 5 } },
            { breakpoint: 439, settings: { slidesToShow: 4 } },
            { breakpoint: 339, settings: { slidesToShow: 3 } },
        ],
    },
};

function ProductGallery(props: Props) {
    const {
        images,
        layout,
        className,
        ...rootProps
    } = props;
    const direction = useDirection();
    const [state, setState] = useState({ currentIndex: 0, transition: false });
    const imagesRefs = useRef<Array<HTMLImageElement | null>>([]);
    const slickFeaturedRef = useRef<Slick>(null);
    const createGalleryRef = useRef<Promise<CreateGalleryFn> | null>(null);
    const galleryRef = useRef<PhotoSwipe<PhotoSwipeUIDefault.Options> | null>(null);
    const getIndexDependOnDirRef = useRef<((index: number) => number) | null>(null);
    const unmountedRef = useRef(false);

    const getIndexDependOnDir = useCallback((index: number) => {
        // we need to invert index id direction === 'rtl' due to react-slick bug
        if (direction === 'rtl') {
            return images.length - 1 - index;
        }

        return index;
    }, [direction, images]);

    const openPhotoswipe = (index: number) => {
        if (!createGalleryRef.current) {
            return;
        }

        const items = imagesRefs.current.map((tag, index) => {
            if (!tag) {
                throw Error('Image ref is null');
            }

            const width = (tag.dataset.width ? parseFloat(tag.dataset.width) : null) || tag.naturalWidth;
            const height = (tag.dataset.height ? parseFloat(tag.dataset.height) : null) || tag.naturalHeight;

            return {
                src: baseUrl(images[index]),
                msrc: baseUrl(images[index]),
                w: width,
                h: height,
            };
        });

        if (direction === 'rtl') {
            items.reverse();
        }

        // noinspection JSUnusedGlobalSymbols
        const options: PhotoSwipe.Options = {
            getThumbBoundsFn: (index) => {
                // IMPORTANT: Inside this function, we can use variables and functions only through ref.
                if (!getIndexDependOnDirRef.current) {
                    return { x: 0, y: 0, w: 0 };
                }

                const dirDependentIndex = getIndexDependOnDirRef.current(index);
                const tag = imagesRefs.current[dirDependentIndex];

                if (!tag) {
                    return { x: 0, y: 0, w: 0 };
                }

                const width = tag.naturalWidth;
                const height = tag.naturalHeight;
                const rect = tag.getBoundingClientRect();
                const ration = Math.min(rect.width / width, rect.height / height);
                const fitWidth = width * ration;
                const fitHeight = height * ration;

                return {
                    x: rect.left + (rect.width - fitWidth) / 2 + window.pageXOffset,
                    y: rect.top + (rect.height - fitHeight) / 2 + window.pageYOffset,
                    w: fitWidth,
                };
            },
            index: getIndexDependOnDir(index),
            bgOpacity: 0.9,
            history: false,
        };

        createGalleryRef.current.then((createGallery) => {
            // IMPORTANT: Inside this function, we can use variables and functions only through ref.

            if (unmountedRef.current) {
                return;
            }

            galleryRef.current = createGallery(items, options);
            galleryRef.current.listen('beforeChange', () => {
                if (galleryRef.current && slickFeaturedRef.current) {
                    slickFeaturedRef.current.slickGoTo(
                        galleryRef.current.getCurrentIndex(),
                        true,
                    );
                }
            });
            galleryRef.current.listen('destroy', () => {
                galleryRef.current = null;
            });

            galleryRef.current.init();
        });
    };

    const handleFeaturedClick = (event: React.MouseEvent, index: number) => {
        if (!createGalleryRef.current || layout === 'quickview') {
            return;
        }

        event.preventDefault();

        openPhotoswipe(index);
    };

    const handleThumbnailClick = (index: number) => {
        if (state.transition) {
            return;
        }

        setState((prev) => ({ ...prev, currentIndex: index }));

        if (slickFeaturedRef.current) {
            slickFeaturedRef.current.slickGoTo(getIndexDependOnDir(index));
        }
    };

    const handleFeaturedBeforeChange: ISlickProps['beforeChange'] = (oldIndex, newIndex) => {
        setState((prev) => ({
            ...prev,
            currentIndex: getIndexDependOnDir(newIndex),
            transition: true,
        }));
    };

    const handleFeaturedAfterChange: ISlickProps['afterChange'] = (index) => {
        setState((prev) => ({
            ...prev,
            currentIndex: getIndexDependOnDir(index),
            transition: false,
        }));
    };

    const handleZoomButtonClick = () => {
        openPhotoswipe(state.currentIndex);
    };

    // componentDidMount
    useEffect(() => {
        createGalleryRef.current = import('~/services/photoswipe').then((module) => module.default);
    }, []);

    // componentWillUnmount
    useEffect(() => {
        unmountedRef.current = false;

        return () => {
            if (galleryRef.current) {
                galleryRef.current.destroy();
            }

            unmountedRef.current = true;
        };
    }, []);

    useEffect(() => {
        // this is necessary to reset the transition state,
        // because when the direction changes, the afterChange event does not fire
        const timer = setTimeout(() => {
            setState((prev) => ({ ...prev, transition: false }));
        }, 0);

        return () => {
            clearTimeout(timer);
        };
    }, [direction]);

    useEffect(() => {
        getIndexDependOnDirRef.current = getIndexDependOnDir;
    }, [getIndexDependOnDir]);

    const rootClasses = classNames('product-gallery', `product-gallery--layout--${layout}`, className);

    return (
        <div className={rootClasses} data-layout={layout} {...rootProps}>
            <div className="product-gallery__featured">
                <button type="button" className="product-gallery__zoom" onClick={handleZoomButtonClick}>
                    <ZoomIn24Svg />
                </button>

                <AppSlick
                    ref={slickFeaturedRef}
                    {...slickSettingsFeatured}
                    beforeChange={handleFeaturedBeforeChange}
                    afterChange={handleFeaturedAfterChange}
                >
                    {images.map((image, index) => (
                        <div key={index} className="image image--type--product">
                            <AppLink
                                href={image}
                                anchor
                                className="image__body"
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event: React.MouseEvent) => handleFeaturedClick(event, index)}
                            >
                                {/*
                                The data-width and data-height attributes must contain the size of a larger
                                version of the product image.

                                If you do not know the image size, you can remove the data-width and data-height
                                attribute, in which case the width and height will be obtained from the
                                naturalWidth and naturalHeight property of img.product-image__img.
                                */}
                                <AppImageNew
                                    className="image__tag"
                                    src={image}
                                    ref={(element) => { imagesRefs.current[index] = element; }}
                                    data-width="700"
                                    data-height="700"
                                />
                            </AppLink>
                        </div>
                    ))}
                </AppSlick>
            </div>
            <div className="product-gallery__thumbnails">
                <AppSlick {...slickSettingsThumbnails[layout]}>
                    {images.map((image, index) => (
                        <button
                            type="button"
                            key={index}
                            className={classNames('product-gallery__thumbnails-item', 'image image--type--product', {
                                'product-gallery__thumbnails-item--active': index === state.currentIndex,
                            })}
                            onClick={() => handleThumbnailClick(index)}
                        >
                            <div className="image__body">
                                <AppImageNew className="image__tag" src={image} />
                            </div>
                        </button>
                    ))}
                </AppSlick>
            </div>
        </div>
    );
}

export default React.memo(ProductGallery);

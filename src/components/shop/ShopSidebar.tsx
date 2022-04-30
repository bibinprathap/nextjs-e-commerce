/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */

// react
import React, {
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import WidgetFilters from '~/components/widgets/WidgetFilters';
import WidgetProducts from '~/components/widgets/WidgetProducts';
import { Cross12Svg } from '~/svg';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import { SidebarContext } from '~/services/sidebar';
import { useMedia } from '~/store/hooks';
import { IShopPageOffCanvasSidebar } from '~/interfaces/pages';

interface Props {
    offcanvas: IShopPageOffCanvasSidebar;
}

function ShopSidebar(props: Props) {
    const { offcanvas } = props;
    const [isOpen, setIsOpen] = useContext(SidebarContext);
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);
    const isMobile = useMedia('(max-width: 991px)');

    const rootClasses = classNames('sidebar', `sidebar--offcanvas--${offcanvas}`, {
        'sidebar--open': isOpen,
    });

    const close = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            const bodyWidth = document.body.offsetWidth;

            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${document.body.offsetWidth - bodyWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [isOpen]);

    useEffect(() => {
        if (offcanvas === 'mobile' && isOpen && !isMobile) {
            setIsOpen(false);
        }
    }, [offcanvas, isOpen, setIsOpen, isMobile]);

    useEffect(() => {
        let canceled = false;

        if (offcanvas === 'mobile') {
            shopApi.getLatestProducts(5).then((products) => {
                if (canceled) {
                    return;
                }

                setLatestProducts(products);
            });
        }

        return () => {
            canceled = true;
        };
    }, [offcanvas, setLatestProducts]);

    const latestProductsTitle = useMemo(() => <FormattedMessage id="HEADER_LATEST_PRODUCTS" />, []);

    return (
        <div className={rootClasses}>
            <div className="sidebar__backdrop" onClick={close} />
            <div className="sidebar__body">
                <div className="sidebar__header">
                    <div className="sidebar__title">
                        <FormattedMessage id="HEADER_FILTERS" />
                    </div>
                    <button className="sidebar__close" type="button" onClick={close}>
                        <Cross12Svg />
                    </button>
                </div>
                <div className="sidebar__content">
                    <WidgetFilters offcanvasSidebar={offcanvas} />

                    {offcanvas !== 'always' && (
                        <WidgetProducts
                            className="d-none d-lg-block"
                            widgetTitle={latestProductsTitle}
                            products={latestProducts}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default React.memo(ShopSidebar);

// react
import React, { useRef } from 'react';
// third-party
import classNames from 'classnames';
import Slick from 'react-slick';
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Arrow from '~/components/shared/Arrow';
import Decor from '~/components/shared/Decor';
import ProductCard from '~/components/shared/ProductCard';
import Timer from '~/components/shared/Timer';
import { baseUrl } from '~/services/utils';
import { IProduct } from '~/interfaces/product';

interface Props {
    products: IProduct[];
    loading?: boolean;
}

const slickSettings: ISlickProps = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        { breakpoint: 1399, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 459, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
};

function BlockSale(props: Props) {
    const { products, loading = false } = props;
    const slickRef = useRef<Slick>(null);

    const handleNextClick = () => {
        if (slickRef.current) {
            slickRef.current.slickNext();
        }
    };

    const handlePrevClick = () => {
        if (slickRef.current) {
            slickRef.current.slickPrev();
        }
    };

    const rootClasses = classNames('block', 'block-sale', { 'block-sale--loading': loading });

    return (
        <div className={rootClasses}>
            <div className="block-sale__content">
                <div className="block-sale__header">
                    <div className="block-sale__title">
                        <FormattedMessage id="HEADER_DEAL_ZONE_TITLE" />
                    </div>
                    <div className="block-sale__subtitle">
                        <FormattedMessage id="HEADER_DEAL_ZONE_SUBTITLE" />
                    </div>
                    <div className="block-sale__timer">
                        <Timer time={3 * 24 * 60 * 60} />
                    </div>
                    <div className="block-sale__controls">
                        <Arrow
                            className="block-sale__arrow block-sale__arrow--prev"
                            direction="prev"
                            onClick={handlePrevClick}
                        />
                        <div className="block-sale__link">
                            <AppLink href="/">
                                <FormattedMessage id="LINK_VIEW_ALL_AVAILABLE_OFFERS" />
                            </AppLink>
                        </div>
                        <Arrow
                            className="block-sale__arrow block-sale__arrow--next"
                            direction="next"
                            onClick={handleNextClick}
                        />
                        <Decor type="center" className="block-sale__header-decor" />
                    </div>
                </div>
                <div className="block-sale__body">
                    <Decor type="bottom" className="block-sale__body-decor" />
                    <div
                        className="block-sale__image"
                        style={{ backgroundImage: `url(${baseUrl('/images/sale.jpg')})` }}
                    />
                    <div className="block-sale__loader" />
                    <div className="container">
                        <div className="block-sale__carousel">
                            <AppSlick ref={slickRef} {...slickSettings}>
                                {products.map((product) => (
                                    <div key={product.id} className="block-sale__item">
                                        <ProductCard
                                            product={product}
                                            exclude={['features', 'list-buttons']}
                                        />
                                    </div>
                                ))}
                            </AppSlick>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockSale);

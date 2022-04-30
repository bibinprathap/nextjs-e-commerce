// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import Rating from '~/components/shared/Rating';
// data
import dataSiteTestimonials from '~/data/siteTestimonials';

const slickSettings: ISlickProps = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function BlockReviews() {
    return (
        <div className="block block-reviews">
            <div className="container">
                <div className="block-reviews__title">Testimonials</div>
                <div className="block-reviews__subtitle">
                    During our work we have accumulated
                    <br />
                    hundreds of positive reviews.
                </div>
                <div className="block-reviews__list">
                    <AppSlick {...slickSettings}>
                        {dataSiteTestimonials.map((testimonial, index) => (
                            <div key={index} className="block-reviews__item">
                                <div className="block-reviews__item-avatar">
                                    <AppImage src={testimonial.avatar} />
                                </div>
                                <div className="block-reviews__item-content">
                                    <div className="block-reviews__item-text">{testimonial.review}</div>
                                    <div className="block-reviews__item-meta">
                                        <div className="block-reviews__item-rating">
                                            <Rating value={testimonial.rating} />
                                        </div>
                                        <div className="block-reviews__item-author">
                                            {`${testimonial.name}, ${testimonial.position}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </div>
    );
}

export default BlockReviews;

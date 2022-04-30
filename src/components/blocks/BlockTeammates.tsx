// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
// data
import dataSiteTeammates from '~/data/siteTeammates';

const slickSettings: ISlickProps = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 439,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function BlockTeammates() {
    return (
        <div className="block block-teammates">
            <div className="container container--max--xl">
                <div className="block-teammates__title">Professional Team</div>
                <div className="block-teammates__subtitle">Meet this is our professional team.</div>
                <div className="block-teammates__list">
                    <AppSlick {...slickSettings}>
                        {dataSiteTeammates.map((teammate, index) => (
                            <div key={index} className="block-teammates__item teammate">
                                <div className="teammate__avatar">
                                    <AppImage src={teammate.avatar} />
                                </div>
                                <div className="teammate__info">
                                    <div className="teammate__name">{teammate.name}</div>
                                    <div className="teammate__position">{teammate.position}</div>
                                </div>
                            </div>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </div>
    );
}

export default BlockTeammates;

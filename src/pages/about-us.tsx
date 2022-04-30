// react
import React from 'react';
// application 
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';
import AppImage from '~/components/shared/AppImage';
import { NextSeo } from 'next-seo';

function Page() {
    const burl = require(`../../images/about.jpg`);
    return (
        <React.Fragment>
            <NextSeo
                title="bmw parts in dubai|Ras Al Khaimah|sharjah|abudhabi|umm al quwain"
                description="We are implementing  the best quality Genuine and OEM spare parts for your bmw parts in dubai. Many of BMW and MINI parts are available at our store visit our website"
            />
            <div className="about">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${burl})`
                            }}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="about__card-title">About Us</div>
                        <div className="about__card-text">
                            Royal Auto parts Market is one of the superior car auto spare parts online trade uae and all over the world. We have specialized in aftermarket body parts for a broad of vehicles. We promise  high-quality car parts at very attractive prices. Your number of unique outstanding auto spare parts in uae and all over the world. One of the keys to keeping your car in outstanding  shape is making sure it’s fitted with high quality parts that fit perfectly and last a long time. Here at Royal Auto Parts
                            Market, that is what we aim for – to provide customers with original equipment (OE) equivalent replacement parts that feature perfect fitment at the most affordable prices with not delivery charge.If you are searching  for nominal, high grade replacement parts for your carauto Royal Auto parts Market has you protect.
                            We are implementing  the best quality Genuine and OEM spare parts for your bmw parts in dubai. Many of BMW and MINI parts are available at our store visit our website
                        </div>

                        <div className="about__card-author">Jinu thomas, CEO Royal Auto parts Market</div>
                        <div className="about__card-signature">
                            <AppImage src="/images/signature.jpg" width="160" height="55" />
                        </div>
                    </div>

                    <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">350</div>
                                <div className="about__indicators-item-title">Stores around the world</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">80 000</div>
                                <div className="about__indicators-item-title">Original auto parts</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">5 000</div>
                                <div className="about__indicators-item-title">Satisfied customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <BlockTeammates />

            <BlockSpace layout="divider-xl" />

            <BlockReviews />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

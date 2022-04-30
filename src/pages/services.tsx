// react
import React from 'react';
// application
import AppImageNew from '~/components/shared/AppImageNew';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';

function Page() {
    const burl = require(`../../images/about.jpg`);
    return (
        <React.Fragment>
            <PageTitle>
                SERVICES
            </PageTitle>

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
                        <div className="about__card-title">Services</div>
                        <div className="about__card-text">
                            Customers are the king in our company .   Royal Auto parts Market offer 100 % genuine services   for our client.we will collect your order and forward your hearing to in excess of 10 superior spare parts suppliers in uae. After that customers get quotation from the top 10 shops in uae. Then you can take your own decision on the basis of price, quality, and Shipment time at your own home. We will deal with only top 10 auto spare parts shops in uae. We have 10 year experience in this filed.A spare part, spare, service part, repair part, or replacement part, is an interchangeable part that is kept in an inventory and used for the repair or replacement of failed units.
                        </div>
                        <div className="about__card-text">
                            The company deals in Toyota, Nissan, Mitsubishi, Mazda and Mercedes Benz genuine
                        </div>

                        <div className="about__card-author">Jinu thomas, CEO Royal Auto parts Market</div>
                        <div className="about__card-signature">
                            <AppImageNew src="/images/signature.jpg" width="160" height="55" />


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

// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import url from '~/services/url';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>Frequently Asked Questions</PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block faq">
                <div className="container container--max--xl">
                    <div className="faq__header">
                        <h1 className="faq__header-title">Frequently Asked Questions</h1>
                    </div>

                    <div className="faq__section">
                        <h3 className="faq__section-title">Spare Parts Enquiry Information</h3>
                        <div className="faq__section-body">

                            <div className="faq__question">
                                <h5 className="faq__question-title">What is royal auto parts market?</h5>
                                <div className="faq__question-answer">
                                    <div className="typography">
                                        <p>
                                            Royal Auto parts Market is one of the superior car auto spare parts online trade uae and all over the world. We have specialized in aftermarket body parts for a broad of vehicles. We promise  high-quality car parts at very attractive prices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="faq__question">
                                <h5 className="faq__question-title">What are main  services provided by royal auto spare parts?</h5>
                                <div className="faq__question-answer">
                                    <div className="typography">
                                        <p>
                                            Customers are the king in our company . auto Royal Auto parts Market offer 100 % genuine services for our client.we will collect your order and forward your hearing to in excess of 10 superior spare parts suppliers in uae. After that customers get quotation from the top 10 shops in uae. Then you can take your own decision on the basis of price, quality, and Shipment time at your own home. We will deal with only top 10 auto spare parts shops in uae. We have 10 year experience in this filed.A spare part, spare, service part, repair part, or replacement part, is an interchangeable part that is kept in an inventory and used for the repair or replacement of failed units.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="faq__question">
                                <h5 className="faq__question-title">
                                    How can I cont act Seller Support?
                                </h5>
                                <div className="faq__question-answer">
                                    <div className="typography">
                                        <p>
                                            P.O BOX:31893, BMW road,sharjah , U.A.E
                                        </p>
                                        <p>
                                            Email: enquiry@royalautopartsmarket.com
                                        </p>
                                        <p>
                                            Phone Number: +97165391594
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="faq__question">
                                <h5 className="faq__question-title">
                                    When was royal auto parts market Group founded?
                                </h5>
                                <div className="faq__question-answer">
                                    <div className="typography">
                                        <p>
                                            Royal auto parts market Group was founded in 2014. It began as an online wholesale marketplace for auto spare parts exporters and entrepreneurs to reach global buyers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="faq__question">
                                <h5 className="faq__question-title">
                                    Where Are Royal Auto Parts Market’s Offices Located?
                                </h5>
                                <div className="faq__question-answer">
                                    <div className="typography">
                                        <p>
                                            We maintained our office in sharjah, BMW ROAD SHARJAH, U.A.E
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="faq__footer">
                        <div className="faq__footer-title">Still Have A Questions?</div>
                        <div className="faq__footer-subtitle">
                            We will be happy to answer any questions you may have.
                        </div>
                        <AppLink href={url.pageContactUs()} className="btn btn-primary">
                            Contact Us
                        </AppLink>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

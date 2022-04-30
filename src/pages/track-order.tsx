// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import { NextSeo } from 'next-seo';

function Page() {
    const intl = useIntl();

    return (
        <React.Fragment>
            {/* <PageTitle>{intl.formatMessage({ id: 'HEADER_TRACK_ORDER' })}</PageTitle> */}

            <NextSeo
                title="bmw parts in dubai|Ras Al Khaimah|sharjah|abudhabi|umm al quwain"
                description="Royal Auto parts Market is one of the superior car auto spare parts online trade uae and all over the world.We provide genuine products for the users."
            />

            <BlockSpace layout="after-header" />

            <div className="block">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card ml-md-3 mr-md-3">
                                <div className="card-body card-body--padding--2">
                                    <h1 className="card-title card-title--lg">
                                        <FormattedMessage id="HEADER_TRACK_ORDER" />
                                    </h1>

                                    <p className="mb-4">
                                        <FormattedMessage id="TEXT_TRACK_ORDER_HELP" />
                                    </p>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="track-order-id">
                                                <FormattedMessage id="INPUT_ORDER_ID_LABEL" />
                                            </label>
                                            <input
                                                id="track-order-id"
                                                type="text"
                                                className="form-control"
                                                placeholder={intl.formatMessage({ id: 'INPUT_ORDER_ID_PLACEHOLDER' })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="track-email">
                                                <FormattedMessage id="INPUT_EMAIL_ADDRESS_LABEL" />
                                            </label>
                                            <input
                                                id="track-email"
                                                type="email"
                                                className="form-control"
                                                placeholder={intl.formatMessage({ id: 'INPUT_EMAIL_ADDRESS_PLACEHOLDER' })}
                                            />
                                        </div>
                                        <div className="form-group pt-4 mb-1">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block">
                                                <FormattedMessage id="BUTTON_TRACK" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

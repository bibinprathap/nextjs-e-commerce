// react
import React from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';

function BlockBanners() {
    const intl = useIntl();

    return (
        <div className="block block-banners">
            <div className="container">
                <div className="block-banners__list">
                    <AppLink href="/" className="block-banners__item block-banners__item--style--one">
                        <span className="block-banners__item-image">
                            <AppImage className="reflect-rtl" src="/images/banners/MOTAR-OIL-IMAGE.jpg" />
                        </span>
                        <span className="block-banners__item-image block-banners__item-image--blur">
                            <AppImage className="reflect-rtl" src="/images/banners/LUXU.jpg" />
                        </span>
                        <span className="block-banners__item-title">
                            <FormattedMessage id="TEXT_BANNER_ONE_TITLE" />
                        </span>
                        <span
                            className="block-banners__item-details"
                            dangerouslySetInnerHTML={{
                                __html: intl.formatMessage({ id: 'TEXT_BANNER_ONE_SUBTITLE' }),
                            }}
                        />
                        <span className="block-banners__item-button btn btn-primary btn-sm">
                            <FormattedMessage id="TEXT_BANNER_ONE_BUTTON" />
                        </span>
                    </AppLink>

                    <AppLink href="/" className="block-banners__item block-banners__item--style--two">
                        <span className="block-banners__item-image">
                            <AppImage className="reflect-rtl" src="/images/banners/MOTAR-OIL-IMAGE.jpg" />
                        </span>
                        <span className="block-banners__item-image block-banners__item-image--blur">
                            <AppImage className="reflect-rtl" src="/images/banners/MOTAR-OIL-IMAGE.jpg" />
                        </span>
                        <span className="block-banners__item-title">
                            <FormattedMessage id="TEXT_BANNER_TWO_TITLE" />
                        </span>
                        <span
                            className="block-banners__item-details"
                            dangerouslySetInnerHTML={{
                                __html: intl.formatMessage({ id: 'TEXT_BANNER_TWO_SUBTITLE' }),
                            }}
                        />
                        <span className="block-banners__item-button btn btn-primary btn-sm">
                            <FormattedMessage id="TEXT_BANNER_TWO_BUTTON" />
                        </span>
                    </AppLink>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockBanners);

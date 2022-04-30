// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import DropdownCurrency from '~/components/header/DropdownCurrency';
import DropdownLanguage from '~/components/header/DropdownLanguage';
import url from '~/services/url';
import { useCompare } from '~/store/compare/compareHooks';

type Layout = 'spaceship-start' | 'spaceship-end' | 'classic';

interface Props {
    layout: Layout;
}

function Topbar(props: Props) {
    const { layout } = props;
    const compare = useCompare();
    const rootClasses = classNames('topbar', `topbar--${layout}`);

    return (
        <div className={rootClasses}>
            {layout === 'spaceship-start' && (
                <React.Fragment>
                    <div className="topbar__item-text d-none d-xxl-flex">
                        <FormattedMessage id="TEXT_TOPBAR_PHONE" values={{ phone: '+971 65391594' }} />
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.pageAboutUs()} className="topbar__link">
                            <FormattedMessage id="LINK_ABOUT_US" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.pageContactUs()} className="topbar__link">
                            <FormattedMessage id="LINK_CONTACTS" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.trackOrder()} className="topbar__link">
                            <FormattedMessage id="LINK_TRACK_ORDER" />
                        </AppLink>
                    </div>
                </React.Fragment>
            )}
            {layout === 'classic' && (
                <React.Fragment>
                    <div className="topbar__item-text">
                        <AppLink href={url.pageAboutUs()} className="topbar__link">
                            <FormattedMessage id="LINK_ABOUT_US" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.pageContactUs()} className="topbar__link">
                            <FormattedMessage id="LINK_CONTACTS" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.pageStoreLocation()} className="topbar__link">
                            <FormattedMessage id="LINK_STORE_LOCATION" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.trackOrder()} className="topbar__link">
                            <FormattedMessage id="LINK_TRACK_ORDER" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-text">
                        <AppLink href={url.blog()} className="topbar__link">
                            <FormattedMessage id="LINK_BLOG" />
                        </AppLink>
                    </div>
                    <div className="topbar__item-spring" />
                </React.Fragment>
            )}
            {layout !== 'spaceship-start' && (
                <React.Fragment>
                    <div className="topbar__item-button">
                        <AppLink href={url.compare()} className="topbar__button">
                            <span className="topbar__button-label">
                                <FormattedMessage id="TEXT_TOPBAR_COMPARE" />
                                :
                            </span>
                            <span className="topbar__button-title">{compare.items.length}</span>
                        </AppLink>
                    </div>

                    <DropdownCurrency />

                    <DropdownLanguage />
                </React.Fragment>
            )}
        </div>
    );
}

export default Topbar;

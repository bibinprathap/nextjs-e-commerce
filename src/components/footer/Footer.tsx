// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import Decor from '~/components/shared/Decor';
import FooterContacts from '~/components/footer/FooterContacts';
import FooterLinks from '~/components/footer/FooterLinks';
import FooterNewsletter from '~/components/footer/FooterNewsletter';
// data
import theme from '~/data/theme';

export function Footer() {
    return (
        <div className="site-footer">
            <Decor className="site-footer__decor" type="bottom" />
            <div className="site-footer__widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <FooterContacts className="site-footer__widget" />
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                            <FooterLinks
                                className="site-footer__widget"
                                header={<FormattedMessage id="HEADER_INFORMATION" />}
                                links={[
                                    { title: <FormattedMessage id="LINK_ABOUT_US" /> },
                                    { title: <FormattedMessage id="LINK_DELIVERY_INFORMATION" /> },
                                    { title: <FormattedMessage id="LINK_PRIVACY_POLICY" /> },
                                    { title: <FormattedMessage id="LINK_BRANDS" /> },
                                    { title: <FormattedMessage id="LINK_CONTACT_US" /> },
                                    { title: <FormattedMessage id="LINK_RETURNS" /> },
                                    { title: <FormattedMessage id="LINK_SITE_MAP" /> },
                                ]}
                            />
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                            <FooterLinks
                                className="site-footer__widget"
                                header={<FormattedMessage id="HEADER_MY_ACCOUNT" />}
                                links={[
                                    { title: <FormattedMessage id="LINK_STORE_LOCATION" /> },
                                    { title: <FormattedMessage id="LINK_ORDER_HISTORY" /> },
                                    { title: <FormattedMessage id="LINK_WISH_LIST" /> },
                                    { title: <FormattedMessage id="LINK_NEWSLETTER" /> },
                                    { title: <FormattedMessage id="LINK_SPECIAL_OFFERS" /> },
                                    { title: <FormattedMessage id="LINK_GIFT_CERTIFICATES" /> },
                                    { title: <FormattedMessage id="LINK_AFFILIATE" /> },
                                ]}
                            />
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                            <FooterNewsletter className="site-footer__widget" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-row">
                        <div className="site-footer__copyright">
                            {/* copyright */}
                            {'Powered by '}
                            <AppLink href="https://adroitclouderp.com/" target="_blank" rel="noreferrer">Adroit Cloud ERP</AppLink>
                            {' / '}
                            <AppLink href="http://erpwithecommerce.com/" target="_blank" rel="noreferrer">Erp With Ecommerce</AppLink>
                            {' — Designed by '}
                            <AppLink href={theme.author.profile_url} target="_blank" rel="noreferrer">
                                {theme.author.name}
                            </AppLink>
                            {/* copyright / end */}
                        </div>
                        <div className="site-footer__payments">
                            <AppImage width="246" height="29" src="/images/payments.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Footer);

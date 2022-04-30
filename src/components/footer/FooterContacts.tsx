// react
import React, { FunctionComponent } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// data
import theme from '~/data/theme';

const FooterContacts: FunctionComponent<React.HTMLAttributes<HTMLElement>> = () => (
    <div className="footer-contacts">
        <h5 className="footer-contacts__title">
            <FormattedMessage id="HEADER_CONTACT_US" />
        </h5>

        <div className="footer-contacts__text">
            <FormattedMessage id="TEXT_CONTACT_US_MESSAGE" />
        </div>

        <address className="footer-contacts__contacts">
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_PHONE_NUMBER" />
                </dt>
                {theme.contacts.phone.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl>
                <dt>
                    <FormattedMessage id="TEXT_EMAIL_ADDRESS" />
                </dt>
                {theme.contacts.email.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
                <dt>
                    <FormattedMessage id="TEXT_WORKING_HOURS" />
                </dt>
                {theme.contacts.hours.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
            <dl style={{ width: '100%' }} >
                <dt>
                    <FormattedMessage id="TEXT_OUR_LOCATION" />
                </dt>
                {theme.contacts.address.map((item, index) => (
                    <dd key={index}>{item}</dd>
                ))}
            </dl>
        </address>
    </div>
);

export default FooterContacts;

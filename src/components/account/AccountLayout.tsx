// react
import React, { PropsWithChildren } from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import Redirect from '~/components/shared/Redirect';
import url from '~/services/url';
import { ILink } from '~/interfaces/link';
import { useAppRouter } from '~/services/router';
import { useAsyncAction } from '~/store/hooks';
import { useUser, useUserSignOut } from '~/store/user/userHooks';

interface Props extends PropsWithChildren<{}> { }

function AccountLayout(props: Props) {
    const { children } = props;
    const intl = useIntl();
    const router = useAppRouter();
    const userSignOut = useUserSignOut();
    const user = useUser();
    const [onSignOutClick] = useAsyncAction(() => userSignOut(), [userSignOut]);

    const navigation: ILink[] = [
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_DASHBOARD' }), url: url.accountDashboard() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_GARAGE' }), url: url.accountGarage() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_PROFILE' }), url: url.accountProfile() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_ORDERS' }), url: url.accountOrders() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_ADDRESSES' }), url: url.accountAddresses() },
        { title: intl.formatMessage({ id: 'LINK_ACCOUNT_PASSWORD' }), url: url.accountPassword() },
    ];

    if (!user) {
        return <Redirect href={url.signIn()} />;
    }

    return (
        <React.Fragment>
            <BlockSpace layout="after-header" />

            <div className="block">
                <div className="container container--max--xl">
                    <div className="row">
                        <div className="col-12 col-lg-3 d-flex">
                            <div className="account-nav flex-grow-1">
                                <h4 className="account-nav__title">
                                    <FormattedMessage id="HEADER_NAVIGATION" />
                                </h4>
                                <ul className="account-nav__list">
                                    {navigation.map((item, index) => (
                                        <li
                                            key={index}
                                            className={classNames('account-nav__item', {
                                                'account-nav__item--active': router.pathname === item.url,
                                            })}
                                        >
                                            <AppLink href={item.url}>
                                                {item.title}
                                            </AppLink>
                                        </li>
                                    ))}
                                    <li className="account-nav__divider" role="presentation" />
                                    <li className="account-nav__item">
                                        {/* eslint-disable-next-line */}
                                        <button type="button" onClick={onSignOutClick}>
                                            <FormattedMessage id="LINK_ACCOUNT_LOGOUT" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default AccountLayout;

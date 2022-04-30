// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppImageNew from '~/components/shared/AppImageNew';
import AppLink from '~/components/shared/AppLink';
import AsyncAction from '~/components/shared/AsyncAction';
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import Rating from '~/components/shared/Rating';
import StockStatusBadge from '~/components/shared/StockStatusBadge';
import url from '~/services/url';
import { Cross12Svg } from '~/svg';
import { useCartAddItem } from '~/store/cart/cartHooks';
import { useWishlist, useWishlistRemoveItem } from '~/store/wishlist/wishlistHooks';

function Page() {
    const intl = useIntl();
    const wishlist = useWishlist();
    const cartAddItem = useCartAddItem();
    const wishlistRemoveItem = useWishlistRemoveItem();
    const { items } = wishlist;

    if (items.length === 0) {
        return (
            <React.Fragment>
                <PageTitle>{intl.formatMessage({ id: 'HEADER_WISHLIST' })}</PageTitle>

                <BlockHeader
                    breadcrumb={[
                        { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
                        { title: intl.formatMessage({ id: 'LINK_WISHLIST' }), url: '/' },
                    ]}
                />

                <div className="block-empty">
                    <div className="container">
                        <div className="block-empty__body">
                            <h1 className="block-empty__title">
                                <FormattedMessage id="HEADER_WISHLIST_EMPTY_TITLE" />
                            </h1>
                            <div
                                className="block-empty__message"
                                dangerouslySetInnerHTML={{
                                    __html: intl.formatMessage({ id: 'HEADER_WISHLIST_EMPTY_SUBTITLE' }),
                                }}
                            />
                            <div className="block-empty__action">
                                <AppLink href={url.home()} className="btn btn-primary btn-sm">
                                    <FormattedMessage id="BUTTON_GO_TO_HOMEPAGE" />
                                </AppLink>
                            </div>
                        </div>
                    </div>
                </div>

                <BlockSpace layout="before-footer" />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <PageTitle>{intl.formatMessage({ id: 'HEADER_WISHLIST' })}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_WISHLIST" />}
                breadcrumb={[
                    { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
                    { title: intl.formatMessage({ id: 'LINK_WISHLIST' }), url: '/' },
                ]}
            />

            <div className="block">
                <div className="container container--max--xl">
                    <div className="wishlist">
                        <table className="wishlist__table">
                            <thead className="wishlist__head">
                                <tr className="wishlist__row wishlist__row--head">
                                    <th className="wishlist__column wishlist__column--head wishlist__column--image">
                                        <FormattedMessage id="TABLE_IMAGE" />
                                    </th>
                                    <th className="wishlist__column wishlist__column--head wishlist__column--product">
                                        <FormattedMessage id="TABLE_PRODUCT" />
                                    </th>
                                    <th className="wishlist__column wishlist__column--head wishlist__column--stock">
                                        <FormattedMessage id="TABLE_STOCK_STATUS" />
                                    </th>
                                    <th className="wishlist__column wishlist__column--head wishlist__column--price">
                                        <FormattedMessage id="TABLE_PRICE" />
                                    </th>
                                    <th className="wishlist__column wishlist__column--head wishlist__column--button">
                                        <span className="sr-only">
                                            <FormattedMessage id="TABLE_ADD_TO_CART" />
                                        </span>
                                    </th>
                                    <th className="wishlist__column wishlist__column--head wishlist__column--remove">
                                        <span className="sr-only">
                                            <FormattedMessage id="TABLE_REMOVE" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="wishlist__body">
                                {items.map((product, index) => (
                                    <tr key={index} className="wishlist__row wishlist__row--body">
                                        <td className="wishlist__column wishlist__column--body wishlist__column--image">
                                            <div className="image image--type--product">
                                                <AppLink href={url.product(product)} className="image__body">
                                                    <AppImageNew
                                                        className="image__tag"
                                                        src={product.images && product.images[0]}
                                                    />
                                                </AppLink>
                                            </div>
                                        </td>
                                        <td
                                            className={classNames(
                                                'wishlist__column',
                                                'wishlist__column--body',
                                                'wishlist__column--product',
                                            )}
                                        >
                                            <div className="wishlist__product-name">
                                                <AppLink href={url.product(product)}>{product.name}</AppLink>
                                            </div>
                                            <div className="wishlist__product-rating">
                                                <div className="wishlist__product-rating-stars">
                                                    <Rating value={product.rating || 0} />
                                                </div>
                                                <div className="wishlist__product-rating-title">
                                                    <FormattedMessage
                                                        id="TEXT_RATING_LABEL"
                                                        values={{
                                                            rating: product.rating,
                                                            reviews: product.reviews,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            className={classNames(
                                                'wishlist__column',
                                                'wishlist__column--body',
                                                'wishlist__column--stock',
                                            )}
                                        >
                                            <StockStatusBadge stock={product.stock} />
                                        </td>
                                        <td
                                            className={classNames(
                                                'wishlist__column',
                                                'wishlist__column--body',
                                                'wishlist__column--price',
                                            )}
                                        >
                                            <CurrencyFormat value={product.price} />
                                        </td>
                                        <td
                                            className={classNames(
                                                'wishlist__column',
                                                'wishlist__column--body',
                                                'wishlist__column--button',
                                            )}
                                        >
                                            <AsyncAction
                                                action={() => cartAddItem(product)}
                                                render={({ run, loading }) => (
                                                    <button
                                                        type="button"
                                                        className={classNames('btn', 'btn-sm', 'btn-primary', {
                                                            'btn-loading': loading,
                                                        })}
                                                        onClick={run}
                                                    >
                                                        <FormattedMessage id="BUTTON_ADD_TO_CART" />
                                                    </button>
                                                )}
                                            />
                                        </td>
                                        <td
                                            className={classNames(
                                                'wishlist__column',
                                                'wishlist__column--body',
                                                'wishlist__column--remove',
                                            )}
                                        >
                                            <AsyncAction
                                                action={() => wishlistRemoveItem(product.id)}
                                                render={({ run, loading }) => (
                                                    <button
                                                        type="button"
                                                        className={classNames(
                                                            'wishlist__remove',
                                                            'btn',
                                                            'btn-sm',
                                                            'btn-muted',
                                                            'btn-icon',
                                                            {
                                                                'btn-loading': loading,
                                                            },
                                                        )}
                                                        onClick={run}
                                                    >
                                                        <Cross12Svg />
                                                    </button>
                                                )}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

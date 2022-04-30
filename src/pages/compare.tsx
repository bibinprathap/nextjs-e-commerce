// react
import React, { useMemo, useState } from 'react';
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
import { IProductAttributeValue } from '~/interfaces/product';
import { useCartAddItem } from '~/store/cart/cartHooks';
import { useCompare, useCompareClear, useCompareRemoveItem } from '~/store/compare/compareHooks';

interface Attribute {
    slug: string;
    name: string;
    sameValues: boolean;
    values: { [productId: number]: IProductAttributeValue[] };
}

function Page() {
    const intl = useIntl();
    const compare = useCompare();
    const compareClear = useCompareClear();
    const cartAddItem = useCartAddItem();
    const compareRemoveItem = useCompareRemoveItem();
    const products = compare.items;
    const [show, setShow] = useState('all');

    const attributes: Attribute[] = useMemo(() => {
        const attributes: Attribute[] = [];

        products.forEach((product) => product.attributes.forEach((pa) => {
            let attribute = attributes.find((x) => x.slug === pa.slug);

            if (!attribute) {
                attribute = {
                    slug: pa.slug,
                    name: pa.name,
                    sameValues: false,
                    values: {},
                };

                attributes.push(attribute);
            }

            attribute.values[product.id] = pa.values;
        }));

        for (let i = 0; i < attributes.length; i += 1) {
            const attribute = attributes[i];
            const values = products.map((product) => (
                (attribute.values[product.id] || []).map((x) => x.slug).sort()
            ));

            attribute.sameValues = values.reduce<boolean>((sameValues, curr) => (
                sameValues && (values[0].length === curr.length && values[0].join() === curr.join())
            ), true);
        }

        return attributes;
    }, [products]);
    const differentAttributes = useMemo(() => attributes.filter((x) => !x.sameValues), [attributes]);
    const currentAttributes = show === 'all' ? attributes : differentAttributes;

    if (compare.items.length === 0) {
        return (
            <React.Fragment>
                <PageTitle>{intl.formatMessage({ id: 'HEADER_COMPARE' })}</PageTitle>

                <BlockHeader
                    breadcrumb={[
                        { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
                        { title: intl.formatMessage({ id: 'LINK_COMPARE' }), url: '' },
                    ]}
                />

                <div className="block-empty">
                    <div className="container">
                        <div className="block-empty__body">
                            <h1 className="block-empty__title">
                                <FormattedMessage id="HEADER_COMPARE_EMPTY_TITLE" />
                            </h1>
                            <div
                                className="block-empty__message"
                                dangerouslySetInnerHTML={{
                                    __html: intl.formatMessage({ id: 'HEADER_COMPARE_EMPTY_SUBTITLE' }),
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

    const tbody = (
        <tbody>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <FormattedMessage id="TABLE_PRODUCT" />
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <AppLink href={url.product(product)} className="compare-table__product">
                            <div className="compare-table__product-image image image--type--product">
                                <div className="image__body">
                                    <AppImageNew className="image__tag" src={product.images && product.images[0]} />
                                </div>
                            </div>
                            <div className="compare-table__product-name">
                                {product.name}
                            </div>
                        </AppLink>
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <FormattedMessage id="TABLE_RATING" />
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <div className="compare-table__rating">
                            <div className="compare-table__rating-stars">
                                <Rating value={product.rating || 0} />
                            </div>
                            <div className="compare-table__rating-title">
                                <FormattedMessage
                                    id="TEXT_RATING_LABEL"
                                    values={{ rating: product.rating, reviews: product.reviews }}
                                />
                            </div>
                        </div>
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <FormattedMessage id="TABLE_STOCK_STATUS" />
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <StockStatusBadge
                            stock={product.stock}
                            className="product__stock"
                        />
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <FormattedMessage id="TABLE_PRICE" />
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <CurrencyFormat value={product.price} />
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <span className="sr-only">
                        <FormattedMessage id="TABLE_ADD_TO_CART" />
                    </span>
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <AsyncAction
                            action={() => cartAddItem(product)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('btn btn-sm btn-primary', {
                                        'btn-loading': loading,
                                    })}
                                    onClick={run}
                                >
                                    <FormattedMessage id="BUTTON_ADD_TO_CART" />
                                </button>
                            )}
                        />
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <FormattedMessage id="TABLE_SKU" />
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        {product.sku}
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
            {currentAttributes.map((attribute, index) => (
                <tr key={index} className="compare-table__row">
                    <th className="compare-table__column compare-table__column--header">
                        {attribute.name}
                    </th>
                    {compare.items.map((product) => (
                        <td key={product.id} className="compare-table__column compare-table__column--product">
                            {attribute.values[product.id]?.length > 0 && (
                                attribute.values[product.id].map((value) => value.name).join(', ')
                            )}
                            {attribute.values[product.id]?.length === 0 && '—'}
                        </td>
                    ))}
                    <td className="compare-table__column compare-table__column--fake" />
                </tr>
            ))}
            <tr className="compare-table__row">
                <th className="compare-table__column compare-table__column--header">
                    <span className="sr-only">
                        <FormattedMessage id="TABLE_REMOVE" />
                    </span>
                </th>
                {compare.items.map((product) => (
                    <td key={product.id} className="compare-table__column compare-table__column--product">
                        <AsyncAction
                            action={() => compareRemoveItem(product.id)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    className={classNames('btn', 'btn-sm', 'btn-secondary', {
                                        'btn-loading': loading,
                                    })}
                                    onClick={run}
                                >
                                    <FormattedMessage id="BUTTON_REMOVE" />
                                </button>
                            )}
                        />
                    </td>
                ))}
                <td className="compare-table__column compare-table__column--fake" />
            </tr>
        </tbody>
    );

    return (
        <React.Fragment>
            <PageTitle>{intl.formatMessage({ id: 'HEADER_COMPARE' })}</PageTitle>

            <BlockHeader
                pageTitle={<FormattedMessage id="HEADER_COMPARE" />}
                breadcrumb={[
                    { title: intl.formatMessage({ id: 'LINK_HOME' }), url: '/' },
                    { title: intl.formatMessage({ id: 'LINK_COMPARE' }), url: '' },
                ]}
            />

            <div className="block">
                <div className="container">
                    <div className="compare card">
                        <div className="compare__options-list">
                            <div className="compare__option">
                                <div className="compare__option-label">
                                    <FormattedMessage id="INPUT_SHOW_LABEL" />
                                    :
                                </div>
                                <div className="compare__option-control">
                                    <div className="button-toggle">
                                        <div className="button-toggle__list">
                                            <label className="button-toggle__item">
                                                <input
                                                    type="radio"
                                                    className="button-toggle__input"
                                                    name="compare-filter"
                                                    value="all"
                                                    checked={show === 'all'}
                                                    onChange={() => setShow('all')}
                                                />
                                                <span className="button-toggle__button">
                                                    <FormattedMessage id="INPUT_SHOW_OPTION_ALL" />
                                                </span>
                                            </label>
                                            <label className="button-toggle__item">
                                                <input
                                                    type="radio"
                                                    className="button-toggle__input"
                                                    name="compare-filter"
                                                    value="different"
                                                    checked={show === 'different'}
                                                    onChange={() => setShow('different')}
                                                />
                                                <span className="button-toggle__button">
                                                    <FormattedMessage id="INPUT_SHOW_OPTION_DIFFERENT" />
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="compare__option">
                                <div className="compare__option-control">
                                    <AsyncAction
                                        action={compareClear}
                                        render={({ run, loading }) => (
                                            <button
                                                type="button"
                                                className={classNames('btn', 'btn-secondary', 'btn-xs', {
                                                    'btn-loading': loading,
                                                })}
                                                onClick={run}
                                            >
                                                <FormattedMessage id="BUTTON_CLEAR_LIST" />
                                            </button>
                                        )}
                                    />

                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="compare__table compare-table">
                                {tbody}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

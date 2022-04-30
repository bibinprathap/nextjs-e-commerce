// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import Rating from '~/components/shared/Rating';
import url from '~/services/url';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';

interface Props {
    productId: number;
}

function AnalogsTable(props: Props) {
    const intl = useIntl();
    const { productId } = props;
    const [analogs, setAnalogs] = useState<IProduct[]>([]);

    useEffect(() => {
        let canceled = false;

        shopApi.getProductAnalogs(productId).then((result) => {
            if (canceled) {
                return;
            }
            debugger;
            setAnalogs(result);
        });

        return () => {
            canceled = true;
        };
    }, [productId]);

    return (
        <div className="analogs-table">
            <table>
                <thead>
                    <tr>
                        <th className="analogs-table__column analogs-table__column--name">
                            <FormattedMessage id="TABLE_NAME" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--rating">
                            <FormattedMessage id="TABLE_RATING" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--brand">
                            <FormattedMessage id="TABLE_BRAND" />
                        </th>
                        <th className="analogs-table__column analogs-table__column--price">
                            <FormattedMessage id="TABLE_PRICE" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {analogs.map((analog) => (
                        <tr key={analog.id}>
                            <td className="analogs-table__column analogs-table__column--name">
                                <AppLink href={url.product(analog)} className="analogs-table__product-name">
                                    {analog.name}
                                </AppLink>
                                <br />
                                <div
                                    className="analogs-table__sku"
                                    data-title={intl.formatMessage({ id: 'TABLE_SKU' })}
                                >
                                    {analog.sku}
                                </div>
                            </td>
                            <td className="analogs-table__column analogs-table__column--rating">
                                <div className="analogs-table__rating">
                                    <div className="analogs-table__rating-stars">
                                        <Rating value={analog.rating || 0} />
                                    </div>
                                    <div className="analogs-table__rating-label">
                                        <FormattedMessage
                                            id="TEXT_RATING_LABEL"
                                            values={{ rating: analog.rating, reviews: analog.reviews }}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td
                                className="analogs-table__column analogs-table__column--brand"
                                data-title={intl.formatMessage({ id: 'TABLE_BRAND' })}
                            >
                                {analog.brand && (
                                    <React.Fragment>
                                        {analog.brand.name}
                                        <div className="analogs-table__country">
                                            (
                                            <FormattedMessage id={`COUNTRY_NAME_${analog.brand.country}`} />
                                            )
                                        </div>
                                    </React.Fragment>
                                )}
                            </td>
                            <td className="analogs-table__column analogs-table__column--price">
                                <CurrencyFormat value={analog.price} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AnalogsTable;

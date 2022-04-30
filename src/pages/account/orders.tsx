// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage, useIntl } from 'react-intl';
// application
import AccountLayout from '~/components/account/AccountLayout';
import AppLink from '~/components/shared/AppLink';
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import PageTitle from '~/components/shared/PageTitle';
import Pagination from '~/components/shared/Pagination';
import url from '~/services/url';
import { accountApi } from '~/api';
import { IOrdersList } from '~/interfaces/list';

function Page() {
    const intl = useIntl();
    const [ordersList, setOrdersList] = useState<IOrdersList | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        accountApi.getOrdersList({ limit: 5, page }).then(setOrdersList);
    }, [page]);

    return (
        <div className="card">
            <PageTitle>{intl.formatMessage({ id: 'HEADER_ORDER_HISTORY' })}</PageTitle>

            <div className="card-header">
                <h5><FormattedMessage id="HEADER_ORDER_HISTORY" /></h5>
            </div>

            {ordersList && (
                <React.Fragment>
                    <div className="card-divider" />

                    <div className="card-table">
                        <div className="table-responsive-sm">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <FormattedMessage id="TABLE_NUMBER" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_DATE" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_STATUS" />
                                        </th>
                                        <th>
                                            <FormattedMessage id="TABLE_TOTAL" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ordersList.items.map((order) => (
                                        <tr key={order.id}>
                                            <td>
                                                <AppLink href={url.accountOrderView(order)}>
                                                    <FormattedMessage
                                                        id="FORMAT_ORDER_NUMBER"
                                                        values={{ number: order.number }}
                                                    />
                                                </AppLink>
                                            </td>
                                            <td>
                                                <FormattedMessage
                                                    id="FORMAT_DATE_MEDIUM"
                                                    values={{ date: Date.parse(order.createdAt) }}
                                                />
                                            </td>
                                            <td>
                                                <FormattedMessage
                                                    id={`TEXT_ORDER_STATUS_${order.status}`}
                                                />
                                            </td>
                                            <td>
                                                <FormattedMessage
                                                    id="TEXT_ORDER_TOTAL"
                                                    values={{
                                                        total: <CurrencyFormat value={order.total} />,
                                                        quantity: order.quantity,
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card-divider" />
                    <div className="card-footer">
                        <Pagination
                            current={page}
                            siblings={2}
                            total={ordersList.pages}
                            onPageChange={setPage}
                        />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

Page.Layout = AccountLayout;

export default Page;

// react
import React, { useMemo, useState } from 'react';
// third-party
import classNames from 'classnames';
import { useIntl } from 'react-intl';
// application
import AnalogsTable from '~/components/shop/AnalogsTable';
import AppLink from '~/components/shared/AppLink';
import ReviewsView from '~/components/shop/ReviewsView';
import Specification from '~/components/shop/Specification';
import { IProduct, IProductAttributeGroup } from '~/interfaces/product';
import { IProductPageLayout } from '~/interfaces/pages';

export interface ITab {
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;
    counter?: number;
    showCounter?: boolean;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    product: IProduct;
    layout: IProductPageLayout;
}

function ProductTabs(props: Props) {
    const intl = useIntl();
    const {
        product,
        layout,
        className,
        ...rootProps
    } = props;

    const spec = useMemo(() => (
        product.type.attributeGroups.map((group) => ({
            ...group,
            attributes: group.attributes.map((attribute) => (
                product.attributes.find((x) => x.slug === attribute) || null
            )).filter((x) => x !== null),
        })).filter((x) => x.attributes.length > 0) as IProductAttributeGroup[]
    ), [product]);

    const tabs = useMemo<ITab[]>(() => [
        {
            id: 'product-tab-description',
            title: intl.formatMessage({ id: 'TEXT_TAB_DESCRIPTION' }),
            content: (
                <div
                    className="typography"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
            ),
        },
        {
            id: 'product-tab-specification',
            title: intl.formatMessage({ id: 'TEXT_TAB_SPECIFICATION' }),
            content: (<Specification groups={spec} />),
        },
        {
            id: 'product-tab-reviews',
            title: intl.formatMessage({ id: 'TEXT_TAB_REVIEWS' }),
            content: (<ReviewsView productId={product.id} productPageLayout={layout} />),
            counter: product.reviews,
            showCounter: typeof product.reviews === 'number' && product.reviews > 0,
        },
        {
            id: 'product-tab-analogs',
            title: intl.formatMessage({ id: 'TEXT_TAB_ANALOGS' }),
            content: (<AnalogsTable productId={product.id} />),
        },
    ], [layout, product, spec, intl]);
    const [activeTab, setActiveTab] = useState(tabs[0]?.id);

    const rootClasses = classNames(`product-tabs product-tabs--layout--${layout}`, className);

    return (
        <div className={rootClasses} {...rootProps}>
            {tabs.map((tab, index) => (
                <div key={index} id={tab.id} />
            ))}
            <ul className="product-tabs__list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={classNames('product-tabs__item', {
                            'product-tabs__item--active': activeTab === tab.id,
                        })}
                    >
                        <AppLink href={{ href: { hash: tab.id } }} onClick={() => setActiveTab(tab.id)}>
                            {tab.title}
                            {tab.showCounter && (
                                <span className="product-tabs__item-counter">{tab.counter}</span>
                            )}
                        </AppLink>
                    </li>
                ))}
            </ul>
            <div className="product-tabs__content">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={classNames('product-tabs__pane', {
                            'product-tabs__pane--active': activeTab === tab.id,
                        })}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductTabs;

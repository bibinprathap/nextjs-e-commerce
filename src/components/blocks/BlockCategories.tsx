// react
import React from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import Decor from '~/components/shared/Decor';
import url from '~/services/url';
import { ICategory } from '~/interfaces/category';

interface Props {
    blockTitle?: React.ReactNode;
    categories: ICategory[];
}

function BlockCategories(props: Props) {
    const { blockTitle, categories } = props;

    const categoriesTemplate = categories.map((category) => {
        const children: ICategory[] = (category.children || []).slice(0, 5);

        return (
            <div
                key={category.id}
                className="block-categories__item category-card category-card--layout--classic"
            >
                <div className="category-card__body">
                    <div className="category-card__content">
                        {category.image && (
                            <div className="category-card__image image image--type--category">
                                <AppLink href={url.category(category)} className="image__body">
                                    <AppImage className="image__tag" src={category.image} />
                                </AppLink>
                            </div>
                        )}
                        <div className="category-card__info">
                            <div className="category-card__name">
                                <AppLink href={url.category(category)}>
                                    {category.name}
                                </AppLink>
                            </div>
                            <ul className="category-card__children">
                                {children.map((child) => (
                                    <li key={child.id}>
                                        <AppLink href={url.category(child)}>
                                            {child.name}
                                        </AppLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="category-card__actions">
                                <AppLink
                                    href={url.category(category)}
                                    className="category-card__link"
                                >
                                    <FormattedMessage id="LINK_SHOP_ALL" />
                                </AppLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="block block-categories">
            {blockTitle && (
                <div className="container">
                    <div className="block-categories__header">
                        <div className="block-categories__title">
                            {blockTitle}
                            <Decor type="center" className="block-categories__title-decor" />
                        </div>
                    </div>
                </div>
            )}
            <div className="block-categories__body">
                <Decor type="bottom" className="block-categories__body-decor" />
                <div className="container">
                    <div className="block-categories__list">
                        {categoriesTemplate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockCategories);

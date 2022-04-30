// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import Collapse, { ICollapseRenderFnData } from '~/components/shared/Collapse';
import url from '~/services/url';
import { ArrowDown9x6Svg } from '~/svg';
import { ICategory } from '~/interfaces/category';

type RenderFnData = ICollapseRenderFnData<HTMLLIElement, HTMLUListElement>;
type RenderFn = (data: RenderFnData, category: ICategory) => React.ReactNode;

interface Props {
    categories: ICategory[];
}

function WidgetCategoriesList(props: Props) {
    const { categories } = props;

    const renderCategory: RenderFn = ({ toggle, setItemRef, setContentRef }, category: ICategory) => {
        const subs: ICategory[] = category.children || [];

        return (
            <li
                ref={setItemRef}
                className={classNames('widget-categories-list__root-item', {
                    'widget-categories-list__root-item--has-children': category.children?.length,
                })}
            >
                <AppLink
                    href={url.category(category)}
                    className="widget-categories-list__root-link"
                >
                    {category.name}
                </AppLink>

                {subs.length > 0 && (
                    <ul className="widget-categories-list__child">
                        {subs.slice(0, subs.length > 6 ? 5 : 6).map((sub, subIdx) => (
                            <li key={subIdx} className="widget-categories-list__child-item">
                                <AppLink
                                    href={url.category(sub)}
                                    className="widget-categories-list__child-link"
                                >
                                    {sub.name}
                                </AppLink>
                            </li>
                        ))}
                    </ul>
                )}

                {subs.length > 6 && (
                    <React.Fragment>
                        <ul className="widget-categories-list__child" ref={setContentRef}>
                            {subs.slice(5).map((sub, subIdx) => (
                                <li
                                    key={subIdx}
                                    className="widget-categories-list__child-item"
                                >
                                    <AppLink
                                        href={url.category(sub)}
                                        className="widget-categories-list__child-link"
                                    >
                                        {sub.name}
                                    </AppLink>
                                </li>
                            ))}
                        </ul>
                        <button
                            type="button"
                            className="widget-categories-list__show-more"
                            onClick={toggle}
                        >
                            <span className="widget-categories-list__show-more-expand-text">Show More</span>
                            <span className="widget-categories-list__show-more-collapse-text">Show Less</span>
                            <span className="widget-categories-list__show-more-arrow"><ArrowDown9x6Svg /></span>
                        </button>
                    </React.Fragment>
                )}
            </li>
        );
    };

    return (
        <div className="card widget widget-categories-list">
            <div className="widget-categories-list__body">
                <ul className="widget-categories-list__root">
                    {categories.map((category, categoryIdx) => (
                        <Collapse<HTMLLIElement, HTMLUListElement>
                            key={categoryIdx}
                            toggleClass="widget-categories-list--open"
                            render={(args) => renderCategory(args, category)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WidgetCategoriesList;

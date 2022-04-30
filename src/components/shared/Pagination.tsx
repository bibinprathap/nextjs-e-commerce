// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';

interface Props {
    siblings?: number;
    current?: number;
    total?: number;
    onPageChange?: (page: number) => void;
}

function Pagination(props: Props) {
    const {
        siblings = 1,
        current = 1,
        total = 1,
        onPageChange,
    } = props;

    const setPage = (value: number) => {
        if (value < 1 || value > total || value === current) {
            return;
        }

        if (onPageChange) {
            onPageChange(value);
        }
    };

    const getPages = () => {
        const pages = [];
        const min = Math.max(1, current - siblings - Math.max(0, siblings - total + current));
        const max = Math.min(total, min + siblings * 2);

        for (let i = 1; i <= Math.min(min - 1, 1); i += 1) {
            pages.push(i);
        }

        if (min - 1 >= 3) {
            pages.push(0);
        } else if (min - 1 >= 2) {
            pages.push(min - 1);
        }

        for (let i = min; i <= max; i += 1) {
            pages.push(i);
        }

        if (max + 1 <= total - 2) {
            pages.push(0);
        } else if (max + 1 <= total - 1) {
            pages.push(max + 1);
        }

        for (let i = Math.max(max + 1, total); i <= total; i += 1) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <ul className="pagination">
            <li className={classNames('page-item', { disabled: current <= 1 })}>
                <button
                    type="button"
                    className="page-link page-link--with-arrow"
                    aria-label="Previous"
                    onClick={() => setPage(current - 1)}
                >
                    <span className="page-link__arrow page-link__arrow--left" aria-hidden="true">
                        <ArrowRoundedLeft7x11Svg />
                    </span>
                </button>
            </li>

            {getPages().map((page) => (
                <React.Fragment key={page}>
                    {page !== 0 && (
                        <li
                            className={classNames('page-item', { active: page === current })}
                            aria-current={page === current ? 'page' : undefined}
                        >
                            {page !== current && (
                                <button type="button" className="page-link" onClick={() => setPage(page)}>
                                    {page}
                                </button>
                            )}
                            {page === current && (
                                <span className="page-link">
                                    {page}
                                    <span className="sr-only">(current)</span>
                                </span>
                            )}
                        </li>
                    )}
                    {page === 0 && (
                        <li className="page-item page-item--dots">
                            <div className="pagination__dots" />
                        </li>
                    )}
                </React.Fragment>
            ))}

            <li className={classNames('page-item', { disabled: current >= total })}>
                <button
                    type="button"
                    className="page-link page-link--with-arrow"
                    aria-label="Next"
                    onClick={() => setPage(current + 1)}
                >
                    <span className="page-link__arrow page-link__arrow--right" aria-hidden="true">
                        <ArrowRoundedRight7x11Svg />
                    </span>
                </button>
            </li>
        </ul>
    );
}

export default Pagination;

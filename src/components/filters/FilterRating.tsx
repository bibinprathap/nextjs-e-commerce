// react
import React from 'react';
// third-party
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
// application
import Checkbox from '~/components/shared/Checkbox';
import Rating from '~/components/shared/Rating';
import { IRatingFilter, IRatingFilterValue } from '~/interfaces/filter';

interface Props {
    options: IRatingFilter;
    value: IRatingFilterValue;
    onChangeValue?: (event: { filter: IRatingFilter, value: IRatingFilterValue }) => void;
}

function FilterRating(props: Props) {
    const { options, value, onChangeValue } = props;

    const updateValue = (newValue: IRatingFilterValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: options, value: newValue });
        }
    };

    // noinspection DuplicatedCode
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentValue = parseFloat(event.target.value);

        if (event.target.checked && !value.includes(currentValue)) {
            updateValue([...value, currentValue]);
        }
        if (!event.target.checked && value.includes(currentValue)) {
            updateValue(value.filter((x) => x !== currentValue));
        }
    };

    return (
        <div className="filter-rating">
            <ul className="filter-rating__list">
                {options.items.map((item) => (
                    <li
                        key={item.rating}
                        className={classNames('filter-rating__item', {
                            'filter-rating__item--disabled': item.count === 0,
                        })}
                    >
                        <label className="filter-rating__item-label">
                            <Checkbox
                                className="filter-rating__item-input"
                                value={item.rating}
                                checked={value.includes(item.rating)}
                                disabled={item.count === 0}
                                onChange={handleChange}
                            />
                            <span className="filter-rating__item-stars">
                                <Rating value={item.rating} />
                            </span>
                            <span className="filter-rating__item-title sr-only">
                                <FormattedMessage id="TEXT_STARS" values={{ stars: item.rating }} />
                            </span>
                            {item.count !== 0 && (
                                <span className="filter-rating__item-counter">{item.count}</span>
                            )}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterRating;

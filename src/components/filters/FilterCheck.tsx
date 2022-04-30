// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import Checkbox from '~/components/shared/Checkbox';
import { ICheckFilter, ICheckFilterValue } from '~/interfaces/filter';

interface Props {
    options: ICheckFilter;
    value: ICheckFilterValue;
    onChangeValue?: (event: { filter: ICheckFilter, value: ICheckFilterValue }) => void;
}

function FilterCheck(props: Props) {
    const { options, value, onChangeValue } = props;

    const updateValue = (newValue: ICheckFilterValue) => {
        if (onChangeValue) {
            onChangeValue({ filter: options, value: newValue });
        }
    };

    // noinspection DuplicatedCode
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked && !value.includes(event.target.value)) {
            updateValue([...value, event.target.value]);
        }
        if (!event.target.checked && value.includes(event.target.value)) {
            updateValue(value.filter((x) => x !== event.target.value));
        }
    };

    return (
        <div className="filter-list">
            <div className="filter-list__list">
                {options.items.map((item) => (
                    <label
                        key={item.slug}
                        className={classNames('filter-list__item', {
                            'filter-list__item--disabled': item.count === 0,
                        })}
                    >
                        <Checkbox
                            className="filter-list__input"
                            value={item.slug}
                            checked={value.includes(item.slug)}
                            disabled={item.count === 0}
                            onChange={handleChange}
                        />

                        <span className="filter-list__title">{item.name}</span>
                        {item.count !== 0 && (
                            <span className="filter-list__counter">{item.count}</span>
                        )}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default FilterCheck;

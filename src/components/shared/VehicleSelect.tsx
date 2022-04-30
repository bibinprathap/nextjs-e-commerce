// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import useVehicleForm from '~/services/forms/vehicle';
import { IVehicle } from '~/interfaces/vehicle';

interface Props extends React.HTMLAttributes<HTMLElement> {
    onVehicleChange?: (event: IVehicle | null) => void;
}

function VehicleSelect(props: Props) {
    const { onVehicleChange, className, ...rootProps } = props;
    const rootClasses = classNames('vehicle-select', className);
    const form = useVehicleForm({
        onChange: onVehicleChange,
    });

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="vehicle-select__list">
                {form.items.map((item, itemIdx) => {
                    const options = item.options as Array<number | string | IVehicle>;
                    if (item.key == 'engine') {
                        return (
                            <div
                                key={itemIdx}
                                className="vehicle-select__item"
                            >
                                <input type="text"
                                    style={{ width: '100%', height: '100%' }} aria-label={item.label} name={item.key} placeholder="Part Number or Enter Keyword" value={item.value == 'none' ? '' : item.value} disabled={item.disabled}
                                    onChange={(e) => form.onItemValueChange(itemIdx, e.target.value)} />

                            </div>
                        );
                    }
                    return (
                        <div
                            key={itemIdx}
                            className={classNames('vehicle-select__item', {
                                'vehicle-select__item--loading': item.loading,
                            })}
                        >
                            <select
                                className="vehicle-select__item-control"
                                aria-label={item.label}
                                name={item.key}
                                value={item.value}
                                disabled={item.disabled}
                                onChange={(e) => form.onItemValueChange(itemIdx, e.target.value)}
                            >
                                <option value="none">{item.placeholder}</option>
                                {options.map((option, optionIdx) => (
                                    <option key={optionIdx} value={form.serializeOption(option, item)}>
                                        {form.serializeOption(option, item)}
                                    </option>
                                ))}
                            </select>
                            <div className="vehicle-select__item-loader" />
                        </div>
                    );

                })}
            </div>
        </div>
    );
}

export default VehicleSelect;

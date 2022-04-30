// react
import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
// third-party
import InputRange from 'react-input-range';
// application
import CurrencyFormat from '~/components/shared/CurrencyFormat';
import { IRangeFilter, IRangeFilterValue } from '~/interfaces/filter';
import { useDirection } from '~/services/i18n/hooks';

function getFirstValidValue(...values: Array<number | null>): number | null {
    return values.reduce((acc, value) => (
        acc === null && (value || value === 0)
            ? value
            : acc
    ), null);
}

interface Props {
    options: IRangeFilter;
    value: IRangeFilterValue;
    onChangeValue?: (event: { filter: IRangeFilter, value: IRangeFilterValue }) => void;
}

function FilterRange(props: Props) {
    const { options, value, onChangeValue } = props;
    const [propsFrom, propsTo] = value || [];
    const [timer, setTimer] = useState<number>();
    const [state, setState] = useState([propsFrom, propsTo]);
    const [stateFrom, stateTo] = state;
    const direction = useDirection();

    let { min, max } = options;
    let from = Math.max(getFirstValidValue(stateFrom, propsFrom, min)!, min);
    let to = Math.min(getFirstValidValue(stateTo, propsTo, max)!, max);
    let fromLabel = from;
    let toLabel = to;

    // since react-input-range does not support RTL direction,
    // we just need to invert and swipe values
    if (direction === 'rtl') {
        [from, to] = [to * -1, from * -1];
        [min, max] = [max * -1, min * -1];
        [fromLabel, toLabel] = [from * -1, to * -1];
    }

    // Update state from props.
    useEffect(() => {
        setState([propsFrom, propsTo]);
    }, [propsFrom, propsTo]);

    // Clear previous timer.
    useEffect(() => () => {
        clearTimeout(timer);
    }, [timer]);

    const handleChange = useCallback((newValue) => {
        let { min: newFrom, max: newTo } = newValue;

        // This is needed to fix a bug in react-input-range.
        [newFrom, newTo] = [Math.max(newFrom, min), Math.min(newTo, max)];

        // since react-input-range does not support RTL direction,
        // we just need to invert and swipe values
        if (direction === 'rtl') {
            [newFrom, newTo] = [newTo * -1, newFrom * -1];
        }

        setState([newFrom, newTo]);

        if (onChangeValue) {
            setTimer(setTimeout(() => {
                onChangeValue({ filter: options, value: [newFrom, newTo] });
            }, 250) as unknown as number);
        }
    }, [min, max, options, onChangeValue, direction, setTimer, setState]);

    return useMemo(() => (
        <div className="filter-range">
            <div className="filter-range__slider" dir="ltr">
                <InputRange
                    minValue={min}
                    maxValue={max}
                    value={{ min: from, max: to }}
                    step={1}
                    onChange={handleChange}
                />
            </div>
            <div className="filter-range__title-button">
                <div className="filter-range__title">
                    <span className="filter-range__min-value"><CurrencyFormat value={fromLabel} /></span>
                    {' – '}
                    <span className="filter-range__max-value"><CurrencyFormat value={toLabel} /></span>
                </div>
            </div>
        </div>
    ), [min, max, from, to, fromLabel, toLabel, handleChange]);
}

export default FilterRange;

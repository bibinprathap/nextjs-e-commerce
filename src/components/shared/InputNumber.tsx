// react
import React from 'react';
// third-party
import classNames from 'classnames';

type Size = 'sm' | 'lg';

interface Props {
    id?: string;
    name?: string;
    size?: Size;
    className?: string;
    value?: string | number;
    step?: number;
    min?: number;
    max?: number;
    onChange?: (value: number | string) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    disabled?: boolean;
    readonly?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
}

function InputNumber(props: Props) {
    const {
        size,
        className,
        onChange,
        inputRef,
        ...otherProps
    } = props;
    const {
        value = '',
        step = 1,
        min = null,
        max = null,
    } = props;

    const change = (direction: -1 | 1, prevValue: string | number = value) => {
        // noinspection SuspiciousTypeOfGuard
        let newValue = typeof prevValue === 'string' ? parseFloat(prevValue) : prevValue;

        newValue = (Number.isNaN(newValue) ? 0 : newValue) + step * direction;

        if (max !== null) {
            newValue = Math.min(max, newValue);
        }
        if (min !== null) {
            newValue = Math.max(min, newValue);
        }

        if (newValue !== prevValue && onChange) {
            onChange(newValue);
        }

        return newValue;
    };

    const changeByTimer = (direction: -1 | 1) => {
        let prevValue = value;
        let interval: NodeJS.Timeout;
        const timer = setTimeout(() => {
            interval = setInterval(() => {
                prevValue = change(direction, prevValue);
            }, 50);
        }, 300);

        const documentMouseUp = () => {
            clearTimeout(timer);
            clearInterval(interval);

            document.removeEventListener('mouseup', documentMouseUp, false);
        };

        document.addEventListener('mouseup', documentMouseUp, false);
    };

    const handleAddMouseDown = () => {
        change(1);
        changeByTimer(1);
    };

    const handleSubMouseDown = () => {
        change(-1);
        changeByTimer(-1);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            if (event.target.value.trim() === '') {
                onChange('');
            } else {
                const value = parseFloat(event.target.value);

                onChange(Number.isNaN(value) ? (min || 0) : value);
            }
        }
    };

    const classes = classNames('input-number', className);
    const formControlClasses = classNames('form-control', 'input-number__input', {
        'form-control-sm': size === 'sm',
        'form-control-lg': size === 'lg',
    });

    return (
        <div className={classes}>
            <input
                className={formControlClasses}
                type="number"
                onChange={handleChange}
                ref={inputRef}
                {...otherProps}
            />

            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="input-number__add" onMouseDown={handleAddMouseDown} />
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div className="input-number__sub" onMouseDown={handleSubMouseDown} />
        </div>
    );
}

export default InputNumber;

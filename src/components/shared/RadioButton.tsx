// react
import React from 'react';
// third-party
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.Ref<any>
}

function RadioButton(props: Props) {
    const { className, inputRef, ...inputProps } = props;

    return (
        <span className={classNames('input-radio', className)}>
            <span className="input-radio__body">
                <input
                    className="input-radio__input"
                    type="radio"
                    ref={inputRef}
                    {...inputProps}
                />
                <span className="input-radio__circle" />
            </span>
        </span>
    );
}

export default RadioButton;

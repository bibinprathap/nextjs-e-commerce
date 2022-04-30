// react
import React from 'react';
// third-party
import classNames from 'classnames';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.Ref<any>
}

function Checkbox(props: Props) {
    const { className, inputRef, ...inputProps } = props;

    return (
        <span className={classNames('input-check', className)}>
            <span className="input-check__body">
                <input
                    className="input-check__input"
                    type="checkbox"
                    ref={inputRef}
                    {...inputProps}
                />
                <span className="input-check__box" />
                <span className="input-check__icon">
                    <svg width="9px" height="7px">
                        <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                    </svg>
                </span>
            </span>
        </span>
    );
}

export default Checkbox;

// react
import React from 'react';
// third-party
import classNames from 'classnames';

type Type = 'center' | 'bottom';

interface Props extends React.HTMLAttributes<HTMLElement> {
    type: Type;
}

function Decor(props: Props) {
    const { type, className } = props;
    const rootClasses = classNames('decor', `decor--type--${type}`, className);

    return (
        <div className={rootClasses}>
            <div className="decor__body">
                <div className="decor__start" />
                <div className="decor__end" />
                <div className="decor__center" />
            </div>
        </div>
    );
}

export default Decor;

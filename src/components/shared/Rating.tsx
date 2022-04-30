// react
import React from 'react';
// third-party
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
    value: number;
}

function Rating(props: Props) {
    const { value, className } = props;

    const rootClasses = classNames('rating', className);

    return (
        <div className={rootClasses}>
            <div className="rating__body">
                {[1, 2, 3, 4, 5].map((i) => {
                    const starClasses = classNames('rating__star', {
                        'rating__star--active': value >= i,
                    });

                    return <div key={i} className={starClasses} />;
                })}
            </div>
        </div>
    );
}

export default Rating;

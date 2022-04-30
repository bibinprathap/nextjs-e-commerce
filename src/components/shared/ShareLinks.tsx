// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

function ShareLinks(props: Props) {
    const { className, ...rootProps } = props;

    const rootClasses = classNames(className);

    return (
        <div className={rootClasses} {...rootProps}>
            <ul className="share-links__list">
                <li className="share-links__item share-links__item--type--like">
                    <AppLink href="/">Like</AppLink>
                </li>
                <li className="share-links__item share-links__item--type--tweet">
                    <AppLink href="/">Tweet</AppLink>
                </li>
                <li className="share-links__item share-links__item--type--pin">
                    <AppLink href="/">Pin It</AppLink>
                </li>
                <li className="share-links__item share-links__item--type--counter">
                    <AppLink href="/">4K</AppLink>
                </li>
            </ul>
        </div>
    );
}

export default ShareLinks;

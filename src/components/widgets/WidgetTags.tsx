// react
import React from 'react';
// application
import AppLink from '~/components/shared/AppLink';

interface Props {
    widgetTitle?: React.ReactNode;
}

function WidgetTags(props: Props) {
    const { widgetTitle } = props;

    return (
        <div className="card widget widget-tags">
            {widgetTitle && (
                <div className="widget__header">
                    <h4>{widgetTitle}</h4>
                </div>
            )}
            <div className="widget-tags__body tags">
                <div className="tags__list">
                    <AppLink href="/">Promotion</AppLink>
                    <AppLink href="/">Power Tool</AppLink>
                    <AppLink href="/">New Arrivals</AppLink>
                    <AppLink href="/">Screwdriver</AppLink>
                    <AppLink href="/">Wrench</AppLink>
                    <AppLink href="/">Mounts</AppLink>
                    <AppLink href="/">Electrodes</AppLink>
                    <AppLink href="/">Chainsaws</AppLink>
                    <AppLink href="/">Manometers</AppLink>
                    <AppLink href="/">Nails</AppLink>
                    <AppLink href="/">Air Guns</AppLink>
                    <AppLink href="/">Cutting Discs</AppLink>
                </div>
            </div>
        </div>
    );
}

export default WidgetTags;

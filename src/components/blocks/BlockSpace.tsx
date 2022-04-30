// react
import React from 'react';
// third-party
import classNames from 'classnames';

export type IBlockSpaceLayout =
    'after-header' |
    'before-footer' |
    'divider-xs' |
    'divider-sm' |
    'divider-nl' |
    'divider-lg' |
    'divider-xl' |
    'spaceship-ledge-height';

interface Props extends React.HTMLAttributes<HTMLElement> {
    layout: IBlockSpaceLayout;
}

function BlockSpace(props: Props) {
    const { layout, className, ...rootProps } = props;
    const rootClasses = classNames('block-space', `block-space--layout--${layout}`, className);

    return (
        <div className={rootClasses} {...rootProps} />
    );
}

export default React.memo(BlockSpace);

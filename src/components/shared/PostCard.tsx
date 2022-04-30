// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { IPost } from '~/interfaces/post';

export type IPostCardLayout = 'list' | 'grid' | 'grid-sm';

interface Props {
    post: IPost;
    layout?: IPostCardLayout;
}

function PostCard(props: Props) {
    const { post, layout } = props;

    const rootClasses = classNames('post-card', {
        [`post-card--layout--${layout}`]: layout,
    });

    return (
        <div className={rootClasses}>
            <div className="post-card__image">
                <AppLink href={url.post(post)}>
                    <AppImage src={post.image} />
                </AppLink>
            </div>
            <div className="post-card__content">
                <div className="post-card__category">
                    {post.categories.map((category, index) => (
                        <AppLink href="/" key={index}>
                            {category}
                        </AppLink>
                    ))}
                </div>
                <div className="post-card__title">
                    <h2>
                        <AppLink href={url.post(post)}>
                            {post.title}
                        </AppLink>
                    </h2>
                </div>
                <div className="post-card__date">
                    {' By '}
                    <AppLink href="/">Jessica Moore</AppLink>
                    {' on '}
                    {post.date}
                </div>
                <div className="post-card__excerpt">
                    <div className="typography">
                        {post.smalldescription}
                    </div>
                </div>
                <div className="post-card__more">
                    <AppLink href={url.post(post)} className="btn btn-secondary btn-sm">
                        Read more
                    </AppLink>
                </div>
            </div>
        </div>
    );
}

export default PostCard;

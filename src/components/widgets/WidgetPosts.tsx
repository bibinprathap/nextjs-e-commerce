// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import { IPost } from '~/interfaces/post';

interface Props {
    widgetTitle?: React.ReactNode;
    posts: IPost[];
}

function WidgetPosts(props: Props) {
    const { widgetTitle, posts } = props;

    return (
        <div className="card widget widget-posts">
            {widgetTitle && (
                <div className="widget__header">
                    <h4>{widgetTitle}</h4>
                </div>
            )}
            <ul className="widget-posts__list">
                {posts.map((post, index) => (
                    <li key={index} className="widget-posts__item">
                        <div className="widget-posts__image">
                            <AppLink href={url.post(post)}>
                                <AppImage src={post.image} />
                            </AppLink>
                        </div>
                        <div className="widget-posts__info">
                            <div className="widget-posts__name">
                                <AppLink href={url.post(post)}>
                                    {post.title}
                                </AppLink>
                            </div>
                            <div className="widget-posts__date">{post.date}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WidgetPosts;

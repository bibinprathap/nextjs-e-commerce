// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlogSidebar from '~/components/blog/BlogSidebar';
import Decor from '~/components/shared/Decor';
import Post from '~/components/blog/Post';
import { baseUrl } from '~/services/utils';
import { IBlogPageSidebarPosition } from '~/interfaces/pages';

interface Props {
    featuredImage?: boolean;
    sidebarPosition?: IBlogPageSidebarPosition | false;
}

function BlogPagePost(props: Props) {
    const { featuredImage = false, sidebarPosition = false } = props;
    const burl = require(`../../../images/posts/post-1.jpg`);
    return (
        <React.Fragment>
            <div className="block post-view">
                <div
                    className={classNames('post-view__header post-header', {
                        'post-header--has-image': featuredImage,
                    })}
                >
                    {featuredImage && (
                        <div
                            className="post-header__image"
                            style={{ backgroundImage: `url(${burl})` }}
                        />
                    )}

                    <div className="post-header__body">
                        <div className="post-header__categories">
                            <ul className="post-header__categories-list">
                                <li className="post-header__categories-item">
                                    <AppLink href="/" className="post-header__categories-link">
                                        Latest News
                                    </AppLink>
                                </li>
                            </ul>
                        </div>
                        <h1 className="post-header__title">Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h1>
                        <div className="post-header__meta">
                            <ul className="post-header__meta-list">
                                <li className="post-header__meta-item">
                                    {'By '}
                                    <AppLink href="/" className="post-header__meta-link">
                                        Jessica Moore
                                    </AppLink>
                                </li>
                                <li className="post-header__meta-item">November 30, 2018</li>
                                <li className="post-header__meta-item">
                                    <AppLink href="/" className="post-header__meta-link">
                                        0 Comments
                                    </AppLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Decor type="bottom" className="post-header__decor" />
                </div>

                <div className="container">
                    <div className="post-view__body">
                        {sidebarPosition === 'start' && (
                            <div className="post-view__item post-view__item-sidebar">
                                <BlogSidebar />
                            </div>
                        )}
                        <Post className="post-view__item post-view__item-post" />
                        {sidebarPosition === 'end' && (
                            <div className="post-view__item post-view__item-sidebar">
                                <BlogSidebar />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default BlogPagePost;

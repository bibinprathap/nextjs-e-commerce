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
import AppImageNew from '~/components/shared/AppImageNew';
import CommentsList from '~/components/blog/CommentsList';
import Pagination from '~/components/shared/Pagination';
import ShareLinks from '~/components/shared/ShareLinks';
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';

import { NextSeo } from 'next-seo';
// data
import dataBlogComments from '~/data/blogComments';
import dataBlogPosts from '~/data/blogPosts';

function Page() {
    const featuredImage = false;
    const rootClasses = classNames('post-view__item post-view__item-post');
    const burl = require(`../../images/posts/BMW-LISTEN-TO-YOUR-CAR-change-spare-parts-UAE-dubai.jpg`);
    return (
        <React.Fragment>
            <NextSeo
                title='No.1 Genuine Auto Spare Parts shop for car|dubai|abu dhabi|sharjah |Ras Al Khaimah  |Click Here'
                description='Royal Auto Parts Market is one of the genuine spare parts online shop for car. We promise high-quality car parts on very low  prices at dubai,abu dhabi, sharjah ,UAE'
            />
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
                        <h1 className="post-header__title">BMW # LISTEN TO YOUR CAR change spare parts</h1>
                        <div className="post-header__meta">
                            <ul className="post-header__meta-list">
                                <li className="post-header__meta-item">
                                    {'By '}
                                    <AppLink href="/" className="post-header__meta-link">
                                        Jinu  Thomas
                                    </AppLink>
                                </li>
                                <li className="post-header__meta-item">November 30, 2020</li>
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
                        {/* <Post className="post-view__item post-view__item-post" /> */}

                        <div className={rootClasses}  >
                            <div className="post-view__card post">
                                <div className="post__body typography">
                                    <p>     There is a lot that you can tell about your car if you pay attention to `it.
                                    to get to know your car better, listen, look, smell and feel it.
                                    You can listen your bmw and change spare parts if needed. In terms of seeing
                                    ,there is the instrument panel on the dashboard, the condition of the tyres
                                    and fluid levels under the hood.
                    </p>
                                    <p>
                                        You can also feel vibration in the car as a shock or jerk when you are shifting gears,
                                        you may fell it when you are traveling at high speeds or you may feel vibration in the steering
                                        wheel when you break.
                    </p>
                                    <blockquote>
                                        <p>
                                            you hear noise emanating from while it is idling
                                            ,it is an indication that there is a serious problem.
                                            we can provide better services in the field of bmw spare parts
                        </p>
                                        <p><cite>Dubai, UAE</cite></p>
                                    </blockquote>
                                    <p>Some of the things you can do not want to risk and some you should not touch at all </p>

                                    <p>
                                        <strong>BMW Spare Parts:</strong>
                                        {' '}
                                        <AppLink href="/catalog/products?filter_lang=en&filter_make=BM&filter_makeCode=BMW&filter_partsCategory=A/C&filter_partsCategoryCode=A/C">Today's Deals</AppLink>
                                    </p>

                                    <figure>
                                        <AppLink href="/">
                                            <AppImageNew src="/images/posts/BMW-LISTEN-TO-YOUR-CAR-change-spare-parts.jpg" />
                                        </AppLink>
                                        {/* <figcaption>Nunc viverra, dui nec commodo dignissim, libero arcu.</figcaption> */}
                                    </figure>

                                    {/* <p>
                                        Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet
                                        velit. Suspendisse sed velit nec
                                        ante facilisis pharetra.
                    </p>
                                    <p>
                                        Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque
                                        ullamcorper, augue eu
                                        fringilla sodales, leo metus volutpat risus,
                        {' '}
                                        <AppLink href="/">at suscipit ipsum diam eget sem</AppLink>
                        .
                        Maecenas dictum elit in enim
                        molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit
                        consequat ex.
                    </p>
                                    <hr />
                                    <h2>Nunc Dapibus Varius Ligula</h2>
                                    <p>
                                        Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante
                                        fermentum at. Vestibulum non
                                        varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit.
                                        Suspendisse sed velit nec ante facilisis
                                        pharetra. Duis vitae fermentum elit. Integer ac mattis elit.
                    </p>
                                    <p>
                                        Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis:
                    </p>
                                    <ol>
                                        <li>
                                            Duis
                            {' '}
                                            <strong>finibus imperdiet ultricies</strong>
                            . Donec vel pretium turpis. In auctor
                            euismod posuere.
                        </li>
                                        <li>
                                            Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius
                                            lectus. Cras vel elit id ligula
                                            laoreet imperdiet.
                        </li>
                                        <li>
                                            <strong>In iaculis porttitor luctus</strong>
                            . Maecenas ultricies dolor et semper
                            placerat. Proin at lectus felis. Quisque
                            dapibus auctor justo id dictum.
                        </li>
                                    </ol>
                                    <p>
                                        Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque.
                                        Donec risus nisi, aliquet a
                                        commodo ac, elementum vitae leo.
                    </p>
                                */}

                                </div>

                                {/* <div className="post__pagination">
                                    <div className="post__pagination-title">
                                        Pages
                    </div>
                                    <div className="post__pagination-list">
                                        <ul>
                                            <li><span className="post__pagination-link post__pagination-link--current">1</span></li>
                                            <li><AppLink href="/" className="post__pagination-link">2</AppLink></li>
                                            <li><AppLink href="/" className="post__pagination-link">3</AppLink></li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className="post__footer">
                                    <div className="post__tags tags tags--sm">
                                        <div className="tags__list">
                                            <AppLink href="/">Promotion</AppLink>
                                            <AppLink href="/">Power Tool</AppLink>
                                            <AppLink href="/">Wrench</AppLink>
                                            <AppLink href="/">Electrodes</AppLink>
                                        </div>
                                    </div>
                                    <ShareLinks className="post__share-links" />
                                </div>

                                <div className="post__author">
                                    <div className="post__author-avatar">
                                        <AppImageNew src="/images/avatars/avatar-4.jpg" />
                                    </div>
                                    <div className="post__author-info">
                                        <div className="post__author-name">
                                            Jinu thomas
                        </div>
                                        <div className="post__author-about">
                                            Jinu thomas is a auto spare parts specialist.He has 10 year experience in spare parts industry. he is specialist in finding genuine spare parts industry for Car
                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-view__card post-navigation">
                                <div className="post-navigation__body">
                                    <AppLink href="/" className="post-navigation__item post-navigation__item--prev">
                                        <div className="post-navigation__item-image">
                                            <AppImageNew src={dataBlogPosts[1].image} />
                                        </div>
                                        <div className="post-navigation__item-info">
                                            <div className="post-navigation__direction">
                                                <div className="post-navigation__direction-arrow">
                                                    <ArrowRoundedLeft7x11Svg />
                                                </div>
                                                <div className="post-navigation__direction-title">
                                                    Previous post
                                </div>
                                            </div>
                                            <div className="post-navigation__item-title">
                                                {dataBlogPosts[1].title}
                                            </div>
                                        </div>
                                    </AppLink>

                                    <AppLink href="/" className="post-navigation__item post-navigation__item--next">
                                        <div className="post-navigation__item-info">
                                            <div className="post-navigation__direction">
                                                <div className="post-navigation__direction-title">
                                                    Next post
                                </div>
                                                <div className="post-navigation__direction-arrow">
                                                    <ArrowRoundedRight7x11Svg />
                                                </div>
                                            </div>
                                            <div className="post-navigation__item-title">
                                                {dataBlogPosts[2].title}
                                            </div>
                                        </div>
                                        <div className="post-navigation__item-image">
                                            <AppImageNew src={dataBlogPosts[2].image} />
                                        </div>
                                    </AppLink>
                                </div>
                            </div>

                            <div className="post-view__card">
                                <h2 className="post-view__card-title">
                                    Comments (
                    {dataBlogComments.count}
                    )
                </h2>

                                <div className="post-view__card-body comments-view">
                                    <CommentsList
                                        className="comments-view__list"
                                        comments={dataBlogComments.items3}
                                    />

                                    {/* <div className="comments-view__pagination">
                                        <Pagination current={1} siblings={2} total={3} />
                                    </div> */}
                                </div>
                            </div>

                            <div className="post-view__card">
                                <h2 className="post-view__card-title">Write A Comment</h2>

                                <form className="post-view__card-body">
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="comment-first-name">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="comment-first-name"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="comment-last-name">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="comment-last-name"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="comment-email">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="comment-email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comment-content">Comment</label>
                                        <textarea
                                            className="form-control"
                                            id="comment-content"
                                            rows={6}
                                        />
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="submit" className="btn btn-primary mt-md-4 mt-2">Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="post-view__item post-view__item-sidebar">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

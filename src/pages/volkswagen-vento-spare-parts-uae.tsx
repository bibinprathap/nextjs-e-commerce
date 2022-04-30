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
    const featuredImage = true;
    const rootClasses = classNames('post-view__item post-view__item-post');
    const burl = require(`../../images/posts/vw-vento-spar-parts-uae.jpg`);
    return (
        <React.Fragment>
            <NextSeo
                title='volkswagen vento best in spare parts deliverd from uae. SHOP NOW'
                description='Volkswagen, as you all know it is a German product. Our company provides the parts made by companies that have expertise in their own fields allows us to obtain high-quality parts.'
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
                        <h1 className="post-header__title">Volkswagen Vento Best In Spare Parts Deliverd From Uae. SHOP NOW</h1>
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
                                    <p>
                                        Volkswagen, as you all know it is a German product. Our company provides the parts made by companies that have expertise in their own fields allows us to obtain high-quality parts. We can assure you that if you buy Volkswagen Vento  Spare Parts at UAE ,  At the same time, you must be willing to bear the maintenance which is a bit on the higher side. We will provide Volkswagen spare parts price in 10 more company and you will choose your decision in your home. We will help to reduce your tension, confession about the price of spare parts. In this situation (covied 19) shopping is very difficult. We will help to reduce your tension. We will provide spare parts at you in your home. Our services are designed for maximum customer orientation and complement the company’s innovative mobility offering
                                   </p>
                                    <p>
                                        <strong>Volkswagen Spare Parts:</strong>
                                        {' '}
                                        <AppLink href="/catalog/products?filter_lang=en&filter_make=UK&filter_makeCode=UK&filter_origin=GERMANY&filter_origincode=GER">Hot Offers</AppLink>
                                    </p>

                                    <figure>
                                        <AppLink href="/">
                                            <AppImageNew src="/images/posts/BMW-LISTEN-TO-YOUR-CAR-change-spare-parts.jpg" />
                                        </AppLink>
                                        <figcaption>Wholesale and Retail car parts supplier from top brands like Mercedes| BMW| Audi| Volkswagen| Toyota| Nissan| Mitsubishi| Suzuki and Subaru</figcaption>
                                    </figure>


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
                                            <AppLink href="/catalog/products?filter_lang=en&filter_make=BM&filter_makeCode=BMW&filter_origin=BOGE&filter_origincode=BOG">BMW spare parts</AppLink>
                                            <AppLink href="/catalog/products?filter_lang=en&filter_make=MB&filter_makeCode=MERCEDES%20BENZ&filter_origin=AUTOSTAR&filter_origincode=AST&page=1">Mercedes spare parts</AppLink>
                                            <AppLink href="/catalog/products?filter_lang=en&filter_make=AD&filter_makeCode=ACDELCO&filter_origin=ORIGINAL&filter_origincode=OE">German Car parts</AppLink>
                                            <AppLink href="/catalog/products?filter_lang=en&filter_make=AU&filter_makeCode=AUDI&filter_origin=AUTOSTAR&filter_origincode=AST">Spare parts Dubai</AppLink>
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
                                        comments={dataBlogComments.items}
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

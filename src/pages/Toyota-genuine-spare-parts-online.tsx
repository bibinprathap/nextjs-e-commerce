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
    const burl = require(`../../images/posts/Toyota-genuine-spare-parts-online.jpeg`);
    return (
        <React.Fragment>
            <NextSeo
                title='TOYOTA GENUINE SPARE PARTS .GENUINE VALUE AND GENUINE SAFTY ONLINE UAE ….SEARCH HERE…'
                description='Our company provides the spare parts made by companies that have expertise in their own fields allows us to obtain high-quality genuine Toyota parts.'
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
                        <h1 className="post-header__title">Toyota Genuine Spare Parts .Genuine Value And Genuine Safty Online Uae ….<AppLink href="/catalog/products?filter_lang=en&filter_make=TOYOTA&filter_makeCode=TOYOTA" >SEARCH HERE</AppLink>…</h1>
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
                                        Our Company Provides The Spare Parts Made By Companies That Have Expertise In Their Own Fields Allows Us To Obtain High-Quality Toyota Genuine Spare Parts. Our Suppliers Make Seats, Wheels, Steering Wheels, Windshields, Headlights, And Meters, For Example As Just Mentioned, About 30,000 Parts Are Needed To Make A Car. Since Toyota Makes Cars Exactly The Way Customers Order Them, Each Car Is Unique. That Means That Different Parts Have To Be Fitted In Different Car. Get Genuine Parts And Accessories From The Manufacturer And Be Confident That It Will Be Fully Compatible With Your Toyota Vehicle
                </p>
                                    <p>  Pick Up Genuine Spare Parts From Trader In Dubai Can Be Tricky Not Knowing If You Are Buying From A Genuine Spare Parts Dealer In Dubai Or Not, But We Guarantee That We Work With All Genuine Part Dealers In Dubai And Around The World Which Puts Us In A Better Position To Help You Source Your Genuine Spare Parts Dealer In Dubai Faster.</p>
                                    <p>
                                        <strong>Toyota Spare Parts:</strong>
                                        {' '}
                                        <AppLink href="/catalog/products?make=TY&makeCode=TOYOTA&origin=SHELL&origincode=SL">Hot Offers</AppLink>
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
                                        comments={dataBlogComments.items2}
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

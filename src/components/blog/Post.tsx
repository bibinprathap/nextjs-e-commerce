// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import CommentsList from '~/components/blog/CommentsList';
import Pagination from '~/components/shared/Pagination';
import ShareLinks from '~/components/shared/ShareLinks';
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';
// data
import dataBlogComments from '~/data/blogComments';
import dataBlogPosts from '~/data/blogPosts';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

function Post(props: Props) {
    const { className, ...rootProps } = props;

    const rootClasses = classNames(className);

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="post-view__card post">
                {/* <div className="post__body typography">
                    <p>
                        Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit
                        quis magna placerat lobortis
                        eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla
                        vestibulum ipsum risus,
                        vitae maximus nunc bibendum quis.
                    </p>
                    <p>
                        Raesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat
                        risus, at suscipit ipsum diam
                        eget sem. Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus
                        tellus, molestie finibus dui quis,
                        suscipit consequat ex.
                    </p>
                    <blockquote>
                        <p>
                            Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat.
                            Proin at lectus felis.
                        </p>
                        <p><cite>John Mcarthy</cite></p>
                    </blockquote>
                    <p>
                        Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit
                        amet sem lobortis,
                        ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc.
                    </p>
                    <h2>Nam Eget Blandit Diam</h2>
                    <p>
                        Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante
                        vitae fringilla rutrum, mi tortor
                        dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam
                        eget blandit diam, imperdiet
                        condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.
                    </p>
                    <p>
                        Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit
                        quis magna placerat lobortis
                        eget pharetra magna.
                    </p>
                    <p>
                        <strong>Nulla fringilla:</strong>
                        {' '}
                        <AppLink href="/">Donec aliquet at felis et dignissim</AppLink>
                    </p>

                    <figure>
                        <AppLink href="/">
                            <AppImage src="/images/posts/car-accessories-in-sharjah-dubai.jpg" />
                        </AppLink>
                        <figcaption>Nunc viverra, dui nec commodo dignissim, libero arcu.</figcaption>
                    </figure>

                    <p>
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
                </div> */}

                <div className="post__pagination">
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
                </div>

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
                        <AppImage src="/images/avatars/avatar-4.jpg" />
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
                            <AppImage src={dataBlogPosts[1].image} />
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
                            <AppImage src={dataBlogPosts[2].image} />
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
                        comments={dataBlogComments.items8}
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
    );
}

export default Post;

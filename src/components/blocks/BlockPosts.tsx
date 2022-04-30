// react
import React, { useRef } from 'react';
// third-party
import classNames from 'classnames';
import Slick from 'react-slick';
// application
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import PostCard from '~/components/shared/PostCard';
import SectionHeader from '~/components/shared/SectionHeader';
import { ILink } from '~/interfaces/link';
import { IPost } from '~/interfaces/post';

export type IBlockPostsCarouselLayout = 'grid' | 'list';

interface Props {
    blockTitle: React.ReactNode;
    layout: IBlockPostsCarouselLayout;
    posts: IPost[];
    loading?: boolean;
    links?: ILink[];
}

const slickSettings: Record<IBlockPostsCarouselLayout, ISlickProps> = {
    grid: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            { breakpoint: 1399, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    },
    list: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    },
};

function BlockPosts(props: Props) {
    const {
        blockTitle,
        layout,
        posts,
        loading = false,
        links = [],
    } = props;
    const slickRef = useRef<Slick>(null);

    const handleNextClick = () => {
        if (slickRef.current) {
            slickRef.current.slickNext();
        }
    };

    const handlePrevClick = () => {
        if (slickRef.current) {
            slickRef.current.slickPrev();
        }
    };

    const rootClasses = classNames('block', 'block-posts-carousel', `block-posts-carousel--layout--${layout}`, {
        'block-posts-carousel--loading': loading,
    });

    return (
        <div className={rootClasses}>
            <div className="container">
                <SectionHeader
                    sectionTitle={blockTitle}
                    arrows
                    links={links}
                    onNext={handleNextClick}
                    onPrev={handlePrevClick}
                />
                <div
                    className={classNames('block-posts-carousel__carousel', {
                        'block-posts-carousel__carousel--has-items': posts.length > 0,
                    })}
                >
                    <div className="block-posts-carousel__carousel-loader" />

                    <AppSlick ref={slickRef} {...slickSettings[layout]}>
                        {posts.map((post) => (
                            <div key={post.id} className="block-posts-carousel__item">
                                <PostCard post={post} />
                            </div>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlockPosts);

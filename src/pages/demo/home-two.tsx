// react
import React, { useMemo } from 'react';
// third-party
import { useIntl } from 'react-intl';
// application
import BlockBanners from '~/components/blocks/BlockBanners';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockCategories from '~/components/blocks/BlockCategories';
import BlockFeatures from '~/components/blocks/BlockFeatures';
import BlockPosts from '~/components/blocks/BlockPosts';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockProductsColumns from '~/components/blocks/BlockProductsColumns';
import BlockSale from '~/components/blocks/BlockSale';
import BlockSlideshow from '~/components/blocks/BlockSlideshow';
import BlockSpace from '~/components/blocks/BlockSpace';
import url from '~/services/url';
import { AppDispatch } from '~/store/types';
import { optionsSetAll } from '~/store/options/optionsActions';
import { shopApi, blogApi } from '~/api';
import { useDeferredData, useProductColumns, useProductTabs } from '~/services/hooks';
import { wrapper } from '~/store/store';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const dispatch = context.store.dispatch as AppDispatch;

    await dispatch(optionsSetAll({
        desktopHeaderVariant: 'classic/one',
        mobileHeaderVariant: 'one',
    }));
});

function Page() {
    const intl = useIntl();

    const slides = useMemo(() => [
        {
            url: '/catalog/products',
            desktopImage: '/images/slides/slide-3.jpg',
            mobileImage: '/images/slides/slide-3-mobile.jpg',
            offer: '30% OFF',
            title: 'When Buying Parts <br>With Installation',
            details: 'Installation of parts in the services of <br>our partners.',
            buttonLabel: 'Shop Now',
        },
        {
            url: '/catalog/products',
            desktopImage: '/images/slides/slide-2.jpg',
            mobileImage: '/images/slides/slide-2-mobile.jpg',
            title: 'Not enough <br>spare parts?',
            details: 'We have everything you need – replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...',
            buttonLabel: 'Shop Now',
        },
        {
            url: '/catalog/products',
            desktopImage: '/images/slides/slide-1.jpg',
            mobileImage: '/images/slides/slide-1-mobile.jpg',
            offer: '30% OFF',
            title: 'Big Choice Of <br>Wheel Tires',
            details: 'Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.',
            buttonLabel: 'Shop Now',
        },
    ], []);

    const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }), []);

    const popularCategories = useDeferredData(() => shopApi.getCategories({
        slugs: [
            'headlights-lighting',
            'fuel-system',
            'body-parts',
            'interior-parts',
            'tires-wheels',
            'engine-drivetrain',
        ],
        depth: 1,
    }), []);

    /**
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(() => [
            { id: 1, name: 'All', categorySlug: null },
            { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
            { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
            { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
        ], []),
        (tab) => shopApi.getFeaturedProducts(tab.categorySlug, 8),
    );

    const blockSale = useDeferredData(() => shopApi.getSpecialOffers(8), []);

    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(() => [
        { title: 'Special Offers', url: url.blog() },
        { title: 'New Arrivals', url: url.blog() },
        { title: 'Reviews', url: url.blog() },
    ], []);

    /**
     * Product columns.
     */
    const columns = useProductColumns(
        useMemo(() => [
            {
                title: 'Top Rated Products',
                source: () => shopApi.getTopRatedProducts(null, 3),
            },
            {
                title: 'Special Offers',
                source: () => shopApi.getSpecialOffers(3),
            },
            {
                title: 'Bestsellers',
                source: () => shopApi.getPopularProducts(null, 3),
            },
        ], []),
    );

    return (
        <React.Fragment>
            <BlockSpace layout="divider-xs" />
            <BlockSlideshow slides={slides} />
            <BlockSpace layout="divider-nl" />
            <BlockBrands
                layout="columns-8-full"
                brands={brands.data}
            />
            <BlockSpace layout="divider-nl" />
            <BlockCategories
                blockTitle={intl.formatMessage({ id: 'HEADER_POPULAR_CATEGORIES' })}
                categories={popularCategories.data}
            />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_FEATURED_PRODUCTS' })}
                layout="grid-5"
                loading={featuredProducts.isLoading}
                products={featuredProducts.data}
                groups={featuredProducts.tabs}
                currentGroup={featuredProducts.tabs.find((x) => x.current)}
                onChangeGroup={featuredProducts.handleTabChange}
            />
            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockSale
                products={blockSale.data}
                loading={blockSale.isLoading}
            />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
                layout="list"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            <BlockProductsColumns columns={columns} />
            <BlockSpace layout="divider-nl" />
            <BlockFeatures layout="bottom-strip" />
        </React.Fragment>
    );
}

export default Page;

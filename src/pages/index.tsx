// react
import React, { useMemo } from 'react';
// third-party
import { useIntl } from 'react-intl';
// application
import BlockBanners from '~/components/blocks/BlockBanners';
import BlockBrands from '~/components/blocks/BlockBrands';
import BlockFeatures from '~/components/blocks/BlockFeatures';
import BlockFinder from '~/components/blocks/BlockFinder';
import BlockPosts from '~/components/blocks/BlockPosts';
import BlockProductsCarousel from '~/components/blocks/BlockProductsCarousel';
import BlockProductsColumns from '~/components/blocks/BlockProductsColumns';
import BlockSale from '~/components/blocks/BlockSale';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockZone from '~/components/blocks/BlockZone';
import url from '~/services/url';
import { blogApi, shopApi } from '~/api';
import { NextSeo } from 'next-seo';
import { useDeferredData, useProductColumns, useProductTabs } from '~/services/hooks';

function Page() {
    const intl = useIntl();

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

    const blockZones = useMemo(() => [
        {
            image: '/images/categories/IDLER-auto-spare-parts-1.jpg',
            mobileImage: '/images/categories/IDLER-auto-spare-parts-1-mobile.jpg',
            categorySlug: 'IDLER',
        },
        {
            image: '/images/categories/MIRROR-auto-spare-parts-overlay-2.jpg',
            mobileImage: '/images/categories/MIRROR-auto-spare-parts-overlay-2-mobile.jpg',
            categorySlug: 'MIRROR',
        },
        {
            image: '/images/categories/ELECTRICAL-auto-spare-parts-overlay-3.jpg',
            mobileImage: '/images/categories/ELECTRICAL-auto-spare-parts-overlay-3-mobile.jpg',
            categorySlug: 'ELECTRICAL',
        },
    ], []);

    const newArrivals = useDeferredData(() => shopApi.getLatestProducts(12), []);
    const newArrivalsLinks = useMemo(() => [
        { title: 'Wheel Covers', url: url.products() },
        { title: 'Timing Belts', url: url.products() },
        { title: 'Oil Pans', url: url.products() },
        { title: 'Show All', url: url.products() },
    ], []);

    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(() => [
        { title: 'Special Offers', url: url.blog() },
        { title: 'New Arrivals', url: url.blog() },
        { title: 'Reviews', url: url.blog() },
    ], []);

    const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }), []);

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
            <NextSeo
                title='No.1 Genuine Auto Spare Parts shop for car|dubai|abu dhabi|sharjah |Ras Al Khaimah|Click Here'
                description='Royal Auto Parts Market is one of the genuine spare parts online shop for car. We promise high-quality car parts on very low  prices at dubai,abu dhabi, sharjah,Ras Al Khaimah ,UAE'
            />
            <BlockFinder />

            <BlockFeatures layout="top-strip" />
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
            <BlockSale
                products={blockSale.data}
                loading={blockSale.isLoading}
            />
            <BlockSpace layout="divider-lg" />

            {blockZones.map((blockZone, blockZoneIdx) => (
                <React.Fragment key={blockZoneIdx}>
                    <BlockZone
                        image={blockZone.image}
                        blockZoneIdx={blockZoneIdx}
                        mobileImage={blockZone.mobileImage}
                        categorySlug={blockZone.categorySlug}
                    />
                    {blockZoneIdx < blockZones.length - 1 && (
                        <BlockSpace layout="divider-sm" />
                    )}
                </React.Fragment>
            ))}

            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={intl.formatMessage({ id: 'HEADER_NEW_ARRIVALS' })}
                layout="horizontal"
                rows={2}
                loading={newArrivals.isLoading}
                products={newArrivals.data}
                links={newArrivalsLinks}
            />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
                layout="grid"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" />

            <BlockSpace layout="divider-nl" />
            <BlockBrands
                layout="columns-8-full"
                brands={brands.data}
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            <BlockProductsColumns columns={columns} />
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;

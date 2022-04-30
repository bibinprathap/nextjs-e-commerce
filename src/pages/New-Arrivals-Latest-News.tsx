// react
import React, { useMemo } from 'react';
// application  
import { NextSeo } from 'next-seo';

import { useIntl } from 'react-intl';
import url from '~/services/url';
import BlockSpace from '~/components/blocks/BlockSpace';

import BlockBanners from '~/components/blocks/BlockBanners';
import BlockPosts from '~/components/blocks/BlockPosts';

import { blogApi } from '~/api';
import { useDeferredData, useProductColumns, useProductTabs } from '~/services/hooks';

function Page() {
    const intl = useIntl();
    const latestPosts = useDeferredData(() => blogApi.getLatestPosts(8), []);
    const latestPostsLinks = useMemo(() => [
        { title: 'Special Offers', url: url.blog() },
        { title: 'New Arrivals', url: url.blog() },
        { title: 'Reviews', url: url.blog() },
    ], []);
    return (
        <React.Fragment>
            <NextSeo
                title='No.1 Genuine Auto Spare Parts shop for car|dubai|abu dhabi|sharjah|Ras Al Khaimah |Click Here'
                description='Royal Auto Parts Market is one of the genuine spare parts online shop for car. We promise high-quality car parts on very low  prices at dubai,abu dhabi, sharjah ,UAE'
            />
            <BlockSpace layout="divider-nl" />
            <BlockBanners />
            <BlockSpace layout="divider-nl" />
            <BlockPosts
                blockTitle={intl.formatMessage({ id: 'HEADER_LATEST_NEWS' })}
                layout="grid"
                loading={latestPosts.isLoading}
                posts={latestPosts.data}
                links={latestPostsLinks}
            />
            <BlockSpace layout="divider-nl" />
        </React.Fragment>
    );
}

export default Page;

// react
import React from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';
import { NextSeo } from 'next-seo';

function Page() {
    return (<React.Fragment>
        <NextSeo
            title='car accessories in sharjah|dubai|Ras Al Khaimah |world'
            description='Royal auto parts market is one of the superior car accessories in  sharjah, Ras Al Khaimah ,dubai and all over the world'
        />
        <BlogPageCategory
            layout="classic"
            sidebarPosition="end"
        />
    </React.Fragment>
    );
}

export default Page;

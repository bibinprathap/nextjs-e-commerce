// react
import React from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

function Page() {
    return (
        <BlogPageCategory
            layout="list"
            sidebarPosition="end"
        />
    );
}

export default Page;

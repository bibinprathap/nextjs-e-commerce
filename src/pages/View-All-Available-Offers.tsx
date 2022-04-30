// react
import React, { useMemo } from 'react';
// application 
import BlockSale from '~/components/blocks/BlockSale';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockZone from '~/components/blocks/BlockZone';
import { NextSeo } from 'next-seo';

import { shopApi } from '~/api';

import { useDeferredData } from '~/services/hooks';

function Page() {

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

    return (
        <React.Fragment>
            <NextSeo
                title='car auto spare parts online trade uae,sharjah,dubai,abudhabi,Ras Al Khaimah,fujairah'
                description='Royal Auto parts Market is one of the superior car auto spare parts online trade uae and all over the world.We provide genuine products for the users.'
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
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
        </React.Fragment>
    );
}

export default Page;

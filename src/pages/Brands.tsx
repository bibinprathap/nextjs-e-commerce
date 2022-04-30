// react
import React, { useMemo } from 'react';
// application  
import { NextSeo } from 'next-seo';
import BlockBrands from '~/components/blocks/BlockBrands';
import { shopApi } from '~/api';
import { useDeferredData } from '~/services/hooks';

import BlockSpace from '~/components/blocks/BlockSpace';

function Page() {
    const brands = useDeferredData(() => shopApi.getBrands({ limit: 16 }), []);

    return (
        <React.Fragment>
            <NextSeo
                title='Royal  auto parts market is the no 1 online trade in uae'
                description='Royal auto parts market is the top one online market for your vehicles.we deal with good quality spare parts only.'
            />
            <BlockSpace layout="divider-nl" className="d-xl-block d-none" />
            <BlockBrands
                layout="columns-8-full"
                brands={brands.data}
            />
        </React.Fragment>
    );
}

export default Page;

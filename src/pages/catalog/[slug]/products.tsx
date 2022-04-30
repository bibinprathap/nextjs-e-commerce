// react
import React from 'react';
import queryString from 'query-string';
// application
import getShopPageData, { parseQueryOptions, parseQueryFilters } from '~/store/shop/shopHelpers';
import ShopPageShop from '~/components/shop/ShopPageShop';
import { wrapper } from '~/store/store';
import { IProductsList } from '~/interfaces/product';

import { IFilterValues } from '~/interfaces/list';

import { NextSeo } from 'next-seo';
//import { FakeShopApi } from './fake-api/fake-shop.api';

import { FakeShopApi } from '~/api/fake-api/cache-shop';
interface Props {
    filters: IFilterValues | null;
}
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const fakeShopApi = new FakeShopApi();
    let productsList: IProductsList;
    if (typeof context.req.url === 'string') {
        const query = queryString.stringify(queryString.parseUrl(context.req.url).query);
        const options = parseQueryOptions(query);
        const filters = parseQueryFilters(query);
        const slug = typeof context.params?.slug === 'string' ? context.params?.slug : "";
        if (slug) {
            filters.slug = slug;
        }
        productsList = await fakeShopApi.getProductsList(options, filters);
        await getShopPageData(context, undefined, productsList);
        return {
            props: {
                filters: filters,
            },
        };
    }
    else {
        await getShopPageData(context);
    }
    return {
        props: {
            filters: null,
        },
    };
});

function Page(props: Props) {
    const { filters } = props;
    debugger;
    let title = 'No.1 Genuine Auto Spare Parts shop for car|dubai|abu dhabi|sharjah|Ras Al Khaimah|fujairah';
    let description = 'Royal Auto Parts Market is one of the genuine spare parts online shop for car.We promise high - quality car parts on very low  prices at dubai, abu dhabi, sharjah, UAE';
    if (filters) {
        const data = {
            parem1: filters.model || filters.filter_model || filters.partsCategory || filters.filter_slug || filters.filter_partsCategory || filters.slug,
            parem2: filters.engine || filters.filter_engine || null,
            parem3: filters.origin || filters.filter_origin,
            parem4: filters.makeCode || filters.filter_makeCode || filters.make
        };

        if (data.parem1 && data.parem2 && data.parem3 && data.parem4) {

        } else if (data.parem1 && data.parem2 && data.parem3) {
            title = data.parem3 + '   Genuine and High-Quality  ' + data.parem1 + '  ' + data.parem2 + '  at best price 2021 ';
            description = ' Royal auto parts market is one of the best online wholsale  dealer of  ' + data.parem3 + '  Genuine and High-Quality   ' + data.parem1 + '  ' + data.parem2 + '  at best price 2021 Search  our website';
        }
        else if (data.parem4 && data.parem2 && data.parem3) {
            title = (filters.filter_makeCode || data.parem4) + '   Genuine and High-Quality  ' + data.parem3 + '  ' + data.parem2 + '  at best price 2021 ';
            description = ' Royal auto parts market is one of the best online wholsale  dealer of  ' + (filters.filter_makeCode || data.parem4) + '  Genuine and High-Quality   ' + data.parem3 + '  ' + data.parem2 + '  at best price 2021 Search  our website';
        }
        else if (data.parem1 && data.parem3 && data.parem4) {
            title = (filters.filter_makeCode || data.parem4) + '   Genuine and High-Quality  ' + data.parem1 + '  ' + data.parem3 + '  at best price 2021 ';
            description = ' Royal auto parts market is one of the best online wholsale  dealer of  ' + (filters.filter_makeCode || data.parem4) + '  Genuine and High-Quality   ' + data.parem1 + '  ' + data.parem3 + '  at best price 2021 Search  our website';
        }
        // else if (data.parem1 && data.parem2) {

        // }
        else if (data.parem1 && data.parem3) {
            title = data.parem1 + '  ' + data.parem3 + '   spare parts - buy genuine at discounted price';
            description = 'we can provide better services in the field of  genuine ' + data.parem1 + ' ' + data.parem3 + ' spare parts in  Sharjah, dubai, UAE and all over the world';
        }
        else if (data.parem1 && data.parem4) {
            title = data.parem1 + '  ' + (filters.filter_makeCode || data.parem4) + '   spare parts - buy genuine at discounted price';
            description = 'we can provide better services in the field of  genuine ' + data.parem1 + ' ' + (filters.filter_makeCode || data.parem4) + ' spare parts in  Sharjah, dubai, UAE and all over the world';
        }
        // else if (data.parem2 && data.parem3) {

        // }
        // else if (data.parem2 && data.parem4) {

        // }
        else if (data.parem3 && data.parem4) {
            title = data.parem3 + ' Genuine Parts -  ' + (filters.filter_makeCode || data.parem4 || '') + ' car  Spare Parts Dubai | Sharjah | UAE |Ras Al Khaimah  ';
            description = 'Do you want to change your ' + (filters.filter_makeCode || data.parem4 || '') + ' car spare Parts using ' + data.parem3 + '  Genuine Parts  .we provide  Genuine ' + data.parem3 + ' Spare Parts near me   ' + (filters.filter_makeCode || data.parem4 || '') + ' for Your car Please Contact US';
        }
        else if (data.parem1) {
            title = 'Genuine, High-Quality, ' + data.parem1 + 'car spare parts  at Lowest price';
            description = 'we offer  Genuine  ' + data.parem1 + ' spare parts  for your car at lowest price and High-Quality near Your Location.please Click here ';
        }
        else if (data.parem2) {
            title = 'Genuine, High-Quality, ' + data.parem2 + 'car spare parts  at Lowest price';
            description = 'we offer  Genuine  ' + data.parem2 + ' spare parts  for your car at lowest price and High-Quality near Your Location.please Click here ';
        }
        else if (data.parem3) {
            title = 'Genuine, High-Quality, ' + data.parem3 + 'car spare parts  at Lowest price';
            description = 'we offer  Genuine  ' + data.parem3 + ' spare parts  for your car at lowest price and High-Quality near Your Location.please Click here ';
        }
        else if (data.parem4) {
            if (data.parem4 == 'AUDI') {
                title = 'Perfect audi spare parts online in uae|+971523195838|sharjah|umm al quwain|ras al khaim|abu dhabi|dubai ';
                description = 'We provide a wide range of audi spare parts online and quality customer service to the wholesale, retail and government markets in uae|umm al quwain|ras al khaimah|sharjah|abu dhabi|dubai';
            }
            else {
                title = '1 Online ' + data.parem4 + ' Car Spare Parts Dealer call +971523195838';
                description = 'Are you searching for ' + data.parem4 + ' Car Spare Parts in sharjah, dubai, Abu dhabi,Ras Al Khaimah.we  are the  No. 1 Online ' + data.parem4 + ' Car Spare Parts Dealer';
            }

        }


    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
            />
            <ShopPageShop
                layout="grid"
                gridLayout="grid-4-sidebar"
                sidebarPosition="start"
                title={title}
                description={description}
            />
        </>
    );
}

export default Page;

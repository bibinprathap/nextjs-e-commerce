// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { CategoryFilterBuilder } from '~/fake-server/filters/category-filter-builder';
import { CheckFilterBuilder } from '~/fake-server/filters/check-filter-builder';
import { clone, delayResponse, error, getFinalUrl } from '~/fake-server/utils';
import { ColorFilterBuilder } from '~/fake-server/filters/color-filter-builder';
import { getNextReviewId, reviews } from '~/fake-server/database/reviews';
import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IProductsList, IProduct, IProductFromServer, IProductImageFromServer } from '~/interfaces/product';
import { IReview, IReviewServer } from '~/interfaces/review';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { products as dbProducts } from '~/fake-server/database/products';
import { RadioFilterBuilder } from '~/fake-server/filters/radio-filter-builder';
import { RangeFilterBuilder } from '~/fake-server/filters/range-filter-builder';
import { RatingFilterBuilder } from '~/fake-server/filters/rating-filter-builder';
import { shopCategoriesList } from '~/fake-server/database/categories';
import { VehicleFilterBuilder } from '~/fake-server/filters/vehicle-filter-builder';
import {
    IEnquiryData,
    IAddProductReviewData,
    IGetSearchSuggestionsOptions,
    IGetSearchSuggestionsResult,
} from '~/api/base';
import { brands } from '~/fake-server/database/brands';
import { IEnquiryState } from '~/store/enquiry/enquiryTypes';


function getProducts(shift: number, categorySlug: string | null = null): IProduct[] {
    let shiftValue = shift;

    switch (categorySlug) {
        case 'tires-wheels':
        case 'power-tools': shiftValue += 5; break;
        case 'interior-parts':
        case 'hand-tools': shiftValue += 10; break;
        case 'engine-drivetrain':
        case 'plumbing': shiftValue += 15; break;
        default:
    }

    return [...dbProducts.slice(shiftValue), ...dbProducts.slice(0, shiftValue)];
}

export function getProductsListDUMMY(
    options: IListOptions = {},
    filterValues: IFilterValues = {},
): Promise<IProductsList> {
    const filters: AbstractFilterBuilder[] = [
        new CategoryFilterBuilder('category', 'Categories'),
        new VehicleFilterBuilder('vehicle', 'Vehicle'),
        new RangeFilterBuilder('price', 'Price'),
        new CheckFilterBuilder('brand', 'Brand'),
        new RadioFilterBuilder('discount', 'With Discount'),
        new RatingFilterBuilder('rating', 'Rating'),
        new ColorFilterBuilder('color', 'Color'),
    ];

    let products = dbProducts.slice(0);

    filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));

    // Calculate items count for filter values.
    filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

    const page = options?.page || 1;
    const limit = options?.limit || 16;
    const sort = options?.sort || 'default';
    const total = products.length;
    const pages = Math.ceil(products.length / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);

    // Sort items array.
    products = products.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }

            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }

        return 0;
    });

    const items = products.slice(from - 1, to) as unknown as Array<IProduct>;

    return delayResponse(Promise.resolve({
        items,
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        products: items,
        filters: filters.map((x) => x.build()),
    }), 350);
}

export async function getProductsListCache(
    options: IListOptions = {},
    res: Array<IProductFromServer> = []
): Promise<IProductsList> {
    let products: Array<IProduct> = [];
    // dbProducts.slice(0);

    // filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));
    // Calculate items count for filter values.
    // filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    //  products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

    (res || []).map((p: IProductFromServer) => {


        products.push({
            "id": p.ITEMFIND, "name": p.descr,
            "excerpt": p.descr,
            "description": p.descr,
            "slug": p.slug,
            "sku": p.ITEMFIND.toString(),
            "partNumber": p.Partno,
            "stock": "in-stock",
            "price": p.salesPrice,
            "compareAtPrice": null,
            "images": [
                p.imagepath
            ],
            "badges": [
                "sale",
                "new",
                "hot"
            ],
            "rating": 4,
            "reviews": 0,
            "availability": "in-stock",
            "compatibility": [
                1,
                2
            ],

            "type": {
                "slug": "default",
                "name": "Default",
                "attributeGroups": [

                ]
            },
            "attributes": [

            ],
            "options": [

            ],
            "tags": [

            ],
            "categories": [

            ],
            "customFields": {}
        });
    });
    const page = options?.page || 1;
    const limit = options?.limit || 16;
    const sort = options?.sort || 'default';
    const total = products.length;
    const pages = Math.ceil(products.length / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);

    // Sort items array.
    products = products.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }

            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }

        return 0;
    });
    console.log('getProductsList', JSON.stringify(products[0]));
    const items = products.slice(from - 1, to) as unknown as Array<IProduct>;
    console.log(items);
    return Promise.resolve({
        items,
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        products,
        filters: [],
    });



}


export async function getProductsList(
    options: IListOptions = {},
    filterValues: IFilterValues = {},
): Promise<IProductsList> {
    const filters: AbstractFilterBuilder[] = [
        new CategoryFilterBuilder('category', 'Categories'),
        new VehicleFilterBuilder('vehicle', 'Vehicle'),
        new RangeFilterBuilder('price', 'Price'),
        new CheckFilterBuilder('brand', 'Brand'),
        new RadioFilterBuilder('discount', 'With Discount'),
        new RatingFilterBuilder('rating', 'Rating'),
        new ColorFilterBuilder('color', 'Color'),
    ];

    const data = {
        parem1: filterValues.model || filterValues.filter_model || filterValues.partsCategory || filterValues.filter_slug || filterValues.filter_partsCategory || filterValues.slug,
        parem2: null,
        parem3: filterValues.origin || filterValues.filter_origin,
        parem4: filterValues.makeCode || filterValues.filter_makeCode || filterValues.make,
        param5: filterValues.page,
        parem6: filterValues.limit
    };

    const reso = await fetch(getFinalUrl("Portal/searchproducttrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const res = await reso
        .json()
        .then(res => {
            return Promise.resolve(res)
            //filters: filters.map((x) => x.build()),
        })
        .catch(err => {
            console.log(err);
        });
    let products: Array<IProduct> = [];
    // dbProducts.slice(0);

    // filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));
    // Calculate items count for filter values.
    // filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    //  products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

    (res || []).map((p: IProductFromServer) => {


        products.push({
            "id": p.ITEMFIND, "name": p.descr,
            "excerpt": p.descr,
            "description": p.descr,
            "slug": p.slug,
            "sku": p.ITEMFIND.toString(),
            "partNumber": p.Partno,
            "stock": "in-stock",
            "price": p.salesPrice,
            "compareAtPrice": null,
            "images": [
                p.imagepath
            ],
            "badges": [
                "sale",
                "new",
                "hot"
            ],
            "rating": 4,
            "reviews": 0,
            "availability": "in-stock",
            "compatibility": [
                1,
                2
            ],

            "type": {
                "slug": "default",
                "name": "Default",
                "attributeGroups": [

                ]
            },
            "attributes": [

            ],
            "options": [

            ],
            "tags": [

            ],
            "categories": [

            ],
            "customFields": {}
        });
    });
    const page = options?.page || 1;
    const limit = options?.limit || 16;
    const sort = options?.sort || 'default';
    const total = products.length;
    const pages = Math.ceil(products.length / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);

    // Sort items array.
    products = products.sort((a, b) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }

            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }

        return 0;
    });
    console.log('getProductsList', JSON.stringify(products[0]));
    const items = products.slice(from - 1, to) as unknown as Array<IProduct>;
    console.log(items);
    return Promise.resolve({
        items,
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        products,
        filters: [],
    });



}

export async function getProductBySlug(slug: string): Promise<IProduct> {
    const product = dbProducts.find((x) => x.slug === slug);
    if (product) {
        return Promise.resolve(clone(product));
    }

    const data = {
        pvalue: slug,
    };
    const res = await fetch(getFinalUrl("itemmastereditmodetrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const i = await res
        .json()
        .then(res => {
            let product = {};
            // dbProducts.slice(0);

            // filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));
            // Calculate items count for filter values.
            // filters.forEach((filter) => filter.calc(filters));

            // Apply filters to products list.
            //  products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));
            const images: string[] = [];
            (res.jvdetail || []).map((i: IProductImageFromServer) => {
                images.push(i.imagepath);
            });


            (res.csheader || []).map((p: IProductFromServer) => {
                product = {
                    "id": p.Itemid, "name": p.name,
                    "excerpt": p.smalldescription,
                    "description": p.descr,
                    "slug": p.slug,
                    "sku": p.ITEMFIND,
                    "partNumber": p.Partno,
                    "stock": "in-stock",
                    "price": p.salesPrice,
                    "compareAtPrice": null,
                    "images": images,
                    "badges": [
                        "sale",
                        "new",
                        "hot"
                    ],
                    "rating": 4,
                    "reviews": 0,
                    "availability": "in-stock",
                    "compatibility": [
                        1,
                        2
                    ],
                    "brand": brands.find(b => b.id == p.cid),
                    "type": {
                        "slug": "default",
                        "name": "Default",
                        "attributeGroups": [
                            {
                                "name": "General",
                                "slug": "general",
                                "attributes": [
                                    "brand",
                                    "Origin",
                                    "Partno",
                                    "unit",
                                    "src",
                                    "bincard"
                                ]
                            }
                        ]
                    },
                    "attributes": [
                        {
                            "name": "Brand",
                            "slug": "brand",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.brandName,
                                    "slug": p.brandslug
                                }
                            ]
                        },
                        {
                            "name": "Origin",
                            "slug": "Origin",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.Origin,
                                    "slug": p.Originslug
                                }
                            ]
                        },
                        {
                            "name": "Partno",
                            "slug": "Partno",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.Partno,
                                    "slug": p.Partno
                                }
                            ]
                        },
                        {
                            "name": "Unit",
                            "slug": "unit",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.unit,
                                    "slug": p.unit
                                }
                            ]
                        },
                        {
                            "name": "Source",
                            "slug": "src",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.categoryname,
                                    "slug": p.categoryslug
                                }
                            ]
                        },
                        {
                            "name": "BinCard",
                            "slug": "bincard",
                            "featured": false,
                            "values": [
                                {
                                    "name": p.bincard,
                                    "slug": p.bincardslug
                                }
                            ]
                        }
                    ],
                    "options": [
                        {
                            "type": "default",
                            "slug": "material",
                            "name": "Material",
                            "values": [
                                {
                                    "slug": "steel",
                                    "name": "Steel"
                                },
                                {
                                    "slug": "aluminium",
                                    "name": "Aluminium"
                                },
                                {
                                    "slug": "thorium",
                                    "name": "Thorium"
                                }
                            ]
                        },
                        {
                            "type": "color",
                            "slug": "color",
                            "name": "Color",
                            "values": [
                                {
                                    "slug": "white",
                                    "name": "White",
                                    "color": "#fff"
                                },
                                {
                                    "slug": "yellow",
                                    "name": "Yellow",
                                    "color": "#ffd333"
                                },
                                {
                                    "slug": "red",
                                    "name": "Red",
                                    "color": "#ff4040"
                                },
                                {
                                    "slug": "blue",
                                    "name": "Blue",
                                    "color": "#4080ff"
                                }
                            ]
                        }
                    ],
                    "tags": [
                        p.brandName,
                        p.categoryname,
                        p.cid,
                        p.Origin,
                        p.Partno
                    ],
                    "categories": [
                        {
                            "id": 47,
                            "type": "shop",
                            "name": p.gid,
                            "slug": p.gidslug,
                            "image": "/images/categories/IDLER.jpg",
                            "items": 106,
                            "parent": null,
                            "layout": "products",
                            "customFields": {}
                        }
                    ],
                    "customFields": {}
                };
            });
            console.log('getProductBySlug', JSON.stringify(product));
            if (!product) {
                return error('Page Not Found');
            }

            return Promise.resolve(clone(product));

            //filters: filters.map((x) => x.build()),
        })
        .catch(err => {
            console.log(err);
        });
    return i;
}

export async function getProductReviews(productId: number, options?: IListOptions): Promise<IReviewsList> {

    const data = {
        pvalue: productId,
    };
    const reso = await fetch(getFinalUrl("itemreviewtrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const res = await reso
        .json()
        .then(res => {
            return Promise.resolve(res);

            //filters: filters.map((x) => x.build()),
        })
        .catch(err => {
            console.log(err);
        });
    let items: Array<IReview> = [];
    (res.csheader || []).map((p: IReviewServer) => {
        items.push({
            id: p.id,
            date: new Date(p.createddate).toString(),
            author: p.name,
            avatar: '/images/avatars/avatar-1.jpg',
            rating: p.rating,
            content: p.reviewcontent,
        });

    });
    console.log('getProductReviews', JSON.stringify(items));
    //old


    items.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        }
        if (a.date < b.date) {
            return 1;
        }

        return 0;
    });

    const page = options?.page || 1;
    const limit = options?.limit || 8;
    const sort = options?.sort || 'default';
    const total = items.length;
    const pages = Math.ceil(items.length / limit);
    const from = (page - 1) * limit + 1;
    const to = page * limit;
    const fullItems = clone(items);
    items = items.slice(from - 1, to) as unknown as Array<IReview>;

    return Promise.resolve({
        items,
        page,
        limit,
        sort,
        total,
        pages,
        from,
        to,
        products: fullItems
    });
    // return i;


}

export async function sendEnquiry(data: IEnquiryData): Promise<IEnquiryData> {
    const newdata = {
        fullname: data.fullname,
        phonenumber: data.phonenumber,
        brand: data.brand,
        email: data.email,
        year: data.year,
        chassis: data.chassis,
        address: data.address,
        enquirycontent: data.enquirycontent,
        createdDate: (new Date()).toISOString().substr(0, 10),
        pagename: data.address,
    };
    const res = await fetch(getFinalUrl("Portal/OnlineEnquirytrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newdata) // body data type must match "Content-Type" header
    });
    const i = await res
        .json()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    return Promise.resolve(data);
}

export async function addProductReview(productId: number, data: IAddProductReviewData): Promise<IReview> {
    const review: IReview = {
        id: getNextReviewId(),
        date: (new Date()).toISOString().substr(0, 10),
        author: data.author,
        avatar: '/images/avatars/avatar-2.jpg',
        rating: data.rating,
        content: data.content,
    };

    reviews.push(review);

    const newdata = {
        cid: productId,
        ItemDetails3: [{
            rating: data.rating,
            name: data.author,
            email: data.email,
            createddate: (new Date()).toISOString().substr(0, 10),
            reviewcontent: data.content,
            isEditMode: false
        }]
    };
    const res = await fetch(getFinalUrl("submitreviewtrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newdata) // body data type must match "Content-Type" header
    });
    const i = await res
        .json()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    return delayResponse(Promise.resolve(review));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getProductAnalogs(productId: number): Promise<IProduct[]> {
    // const slugs: string[] = [
    //     'sunset-brake-kit',
    //     'specter-brake-kit',
    //     'brake-kit',
    // ];
    // const analogs: IProduct[] = dbProducts.filter((x) => slugs.includes(x.slug));

    // return Promise.resolve(clone(analogs));
    const data = {
        pvalue: productId,
    };
    const res = await fetch(getFinalUrl("searchproductanalogstrade/"), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const i = await res
        .json()
        .then(res => {
            //console.log('getProductAnalogs', res);
            console.log('getProductReviews', JSON.stringify(res));
            let analogs: Array<IProduct> = [];
            // dbProducts.slice(0);

            // filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));
            // Calculate items count for filter values.
            // filters.forEach((filter) => filter.calc(filters));

            // Apply filters to products list.
            //  products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

            (res.csheader || []).map((p: IProductFromServer) => {


                analogs.push({
                    "id": p.ITEMFIND, "name": p.descr,
                    "excerpt": p.descr,
                    "description": p.descr,
                    "slug": p.slug,
                    "sku": p.ITEMFIND.toString(),
                    "partNumber": p.Partno,
                    "stock": "in-stock",
                    "price": p.salesPrice,
                    "compareAtPrice": null,
                    "images": [
                        p.imagepath
                    ],
                    "badges": [
                        "sale",
                        "new",
                        "hot"
                    ],
                    "rating": 4,
                    "reviews": 0,
                    "availability": "in-stock",
                    "compatibility": [
                        1,
                        2
                    ],
                    "brand": brands.find(b => b.id == p.cid),
                    "type": {
                        "slug": "default",
                        "name": "Default",
                        "attributeGroups": [
                            {
                                "name": "General",
                                "slug": "general",
                                "attributes": [
                                    "brand",
                                    "Origin",
                                    "Partno",
                                    "unit",
                                    "src",
                                    "bincard"
                                ]
                            }
                        ]
                    },
                    "attributes": [
                        {
                            "name": "Brand",
                            "slug": "brand",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.brand,
                                    "slug": p.brandslug
                                }
                            ]
                        },
                        {
                            "name": "Origin",
                            "slug": "Origin",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.Origin,
                                    "slug": p.Originslug
                                }
                            ]
                        },
                        {
                            "name": "Partno",
                            "slug": "Partno",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.Partno,
                                    "slug": p.Partno
                                }
                            ]
                        },
                        {
                            "name": "Unit",
                            "slug": "unit",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.unit,
                                    "slug": p.unit
                                }
                            ]
                        },
                        {
                            "name": "Source",
                            "slug": "src",
                            "featured": true,
                            "values": [
                                {
                                    "name": p.src,
                                    "slug": p.srcslug
                                }
                            ]
                        },
                        {
                            "name": "BinCard",
                            "slug": "bincard",
                            "featured": false,
                            "values": [
                                {
                                    "name": p.bincard,
                                    "slug": p.bincardslug
                                }
                            ]
                        }
                    ],
                    "options": [
                        {
                            "type": "default",
                            "slug": "material",
                            "name": "Material",
                            "values": [
                                {
                                    "slug": "steel",
                                    "name": "Steel"
                                },
                                {
                                    "slug": "aluminium",
                                    "name": "Aluminium"
                                },
                                {
                                    "slug": "thorium",
                                    "name": "Thorium"
                                }
                            ]
                        },
                        {
                            "type": "color",
                            "slug": "color",
                            "name": "Color",
                            "values": [
                                {
                                    "slug": "white",
                                    "name": "White",
                                    "color": "#fff"
                                },
                                {
                                    "slug": "yellow",
                                    "name": "Yellow",
                                    "color": "#ffd333"
                                },
                                {
                                    "slug": "red",
                                    "name": "Red",
                                    "color": "#ff4040"
                                },
                                {
                                    "slug": "blue",
                                    "name": "Blue",
                                    "color": "#4080ff"
                                }
                            ]
                        }
                    ],
                    "tags": [
                        p.brand,
                        p.gidslug,
                        p.cid,
                        p.Origin,
                        p.Partno
                    ],
                    "categories": [
                        {
                            "id": 47,
                            "type": "shop",
                            "name": p.gid,
                            "slug": p.gidslug,
                            "image": "/images/categories/IDLER.jpg",
                            "items": 106,
                            "parent": null,
                            "layout": "products",
                            "customFields": {}
                        }
                    ],
                    "customFields": {}
                });
            });
            Promise.resolve(clone(analogs));
            //filters: filters.map((x) => x.build()),
        })
        .catch(err => {
            console.log(err);
        });
    const slugs: string[] = [

        'brake-kit1',
    ];
    const analogs: IProduct[] = dbProducts.filter((x) => slugs.includes(x.slug));

    return Promise.resolve(clone(analogs));
    // return i;
}

export function getRelatedProducts(productId: number, limit: number): Promise<IProduct[]> {
    return Promise.resolve(clone(dbProducts.slice(0, limit)));
}

export function getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
    return delayResponse(Promise.resolve(clone(getProducts(0, categorySlug).slice(0, limit))), 1000);
}

export function getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
    return delayResponse(Promise.resolve(clone(getProducts(6, categorySlug).slice(0, limit))), 1000);
}

export function getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
    return delayResponse(Promise.resolve(clone(getProducts(12, categorySlug).slice(0, limit))), 1000);
}

export function getSpecialOffers(limit: number): Promise<IProduct[]> {
    return delayResponse(Promise.resolve(clone(getProducts(8).slice(0, limit))), 1000);
}

export function getLatestProducts(limit: number): Promise<IProduct[]> {
    return Promise.resolve(clone(dbProducts.slice(0, limit)));
}

export async function getSearchSuggestions(
    query: string,
    options?: IGetSearchSuggestionsOptions,
): Promise<IGetSearchSuggestionsResult> {
    const queryVal = query.toLowerCase();
    const optionsVal = {
        limitProducts: 4,
        limitCategories: 4,
        ...options,
    };

    const resultProducts = dbProducts.filter((x) => x.name.toLowerCase().includes(queryVal));
    const resultCategories = shopCategoriesList.filter((x) => x.name.toLowerCase().includes(queryVal));
    if (resultProducts.length > 0 || resultCategories.length > 0) {
        return Promise.resolve({
            products: resultProducts.slice(0, optionsVal.limitProducts),
            categories: resultCategories.slice(0, optionsVal.limitCategories).map((x) => prepareCategory(x)),
        });

    }
    else {
        const data = {
            parem2: queryVal,
        };

        const reso = await fetch(getFinalUrl("Portal/searchproducttrade/"), {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const res = await reso
            .json()
            .then(res => {
                return Promise.resolve(res)
                //filters: filters.map((x) => x.build()),
            })
            .catch(err => {
                console.log(err);
            });
        let products: Array<IProduct> = [];
        // dbProducts.slice(0);

        // filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));
        // Calculate items count for filter values.
        // filters.forEach((filter) => filter.calc(filters));

        // Apply filters to products list.
        //  products = products.filter((product) => filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true));

        (res || []).map((p: IProductFromServer) => {


            products.push({
                "id": p.ITEMFIND, "name": p.descr,
                "excerpt": p.descr,
                "description": p.descr,
                "slug": p.slug,
                "sku": p.ITEMFIND.toString(),
                "partNumber": p.Partno,
                "stock": "in-stock",
                "price": p.salesPrice,
                "compareAtPrice": null,
                "images": [
                    p.imagepath
                ],
                "badges": [
                    "sale",
                    "new",
                    "hot"
                ],
                "rating": 4,
                "reviews": 0,
                "availability": "in-stock",
                "compatibility": [
                    1,
                    2
                ],

                "type": {
                    "slug": "default",
                    "name": "Default",
                    "attributeGroups": [

                    ]
                },
                "attributes": [

                ],
                "options": [

                ],
                "tags": [

                ],
                "categories": [

                ],
                "customFields": {}
            });
        });

        return Promise.resolve({
            products,
            categories: [],
        });
    }
}

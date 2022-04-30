// application
import { IMainMenuLink } from '~/interfaces/main-menu-link';

const dataHeaderMainMenu: IMainMenuLink[] = [
    {
        title: 'Home',
        url: '/',
        submenu: {
            type: 'menu',
            links: [
                { title: 'Offers', url: '/View-All-Available-Offers' },
                { title: 'Latest News', url: '/New-Arrivals-Latest-News' },
                { title: 'Category', url: '/auto-spare-parts-category' },
                { title: 'Brands', url: '/Brands' }
            ],
        },
    },
    {
        title: 'Blog',
        url: '/car-accessories-in-sharjah-dubai-world',
        submenu: {
            type: 'menu',
            links: [
                {
                    title: 'Auto Spare Parts Uae',
                    url: '/auto-spare-parts-uae',
                    links: [],
                },
                {
                    title: 'BMW Listen To Your Car',
                    url: '/BMW-LISTEN-TO-YOUR-CAR-change-spare-parts',
                    links: [],
                },
                {
                    title: 'Online Car Spare Parts In Dubai',
                    url: '/ONLINE-CAR-SPARE-PARTS-IN-DUBAI',
                    links: [],
                },
                {
                    title: 'Top Online Car Parts Dubai',
                    url: '/TOP-ONLINE-CAR-PARTS-DUBAI',
                    links: [],
                },
                {
                    title: 'Nissan Car Spare Parts Dubai',
                    url: '/nissan-car-spare-parts-dubai',
                    links: [],
                },
                {
                    title: 'Jaguar Spare Parts',
                    url: '/jaguar-spare-parts',
                    links: [],
                },
                {
                    title: 'Rolls Royce Car Parts',
                    url: '/rolls-royce-car-parts',
                    links: [],
                },
                {
                    title: 'Toyota Genuine Spare Parts',
                    url: '/toyota-genuine-spare-parts',
                    links: [],
                },
                {
                    title: 'Toyota Genuine Spare Parts Online',
                    url: '/Toyota-genuine-spare-parts-online',
                    links: [],
                },
                {
                    title: 'Volkswagen Vento Spar Parts Uae',
                    url: '/volkswagen-vento-spare-parts-uae',
                    links: [],
                },
                {
                    title: 'Bmw Genuine Spare Parts Near Me',
                    url: '/bmw-genuine-spare-parts-near-me',
                    links: [],
                },
                {
                    title: 'Automobile Spare Parts Shop Online',
                    url: '/automobile-spare-parts-shop-online',
                    links: [],
                },
                {
                    title: 'Audi Spare Parts Catalogue',
                    url: '/audi-spare-parts-catalogue',
                    links: [],
                },
                {
                    title: 'Porsche Cayenne Spare Parts Dubai',
                    url: '/porsche-cayenne-spare-parts-dubai',
                    links: [],
                },
                {
                    title: 'Mercedes Benz Spare Parts Uae',
                    url: '/mercedes-benz-spare-parts-uae',
                    links: [],
                },
                {
                    title: 'Nissan Altima Headlight Bulb Replacement',
                    url: '/nissan-altima-headlight-bulb-replacement',
                    links: [],
                },
                {
                    title: 'How it all work: rear lights',
                    url: '/how-it-all-work-rear-lights',
                    links: [],
                },
                {
                    title: 'Blog Grid',
                    url: '/demo/blog/grid-right-sidebar',
                    links: [
                        { title: 'Left Sidebar', url: '/demo/blog/grid-left-sidebar' },
                        { title: 'Right Sidebar', url: '/demo/blog/grid-right-sidebar' },
                    ],
                }
            ],
        },
    },
    {
        title: 'Account',
        url: '/account/dashboard',
        submenu: {
            type: 'menu',
            links: [
                { title: 'Login & Register', url: '/account/login' },
                { title: 'Dashboard', url: '/account/dashboard' },
                { title: 'Garage', url: '/account/garage' },
                { title: 'Edit Profile', url: '/account/profile' },
                { title: 'Order History', url: '/account/orders' },
                {
                    title: 'Order Details',
                    url: {
                        href: '/account/orders/[id]?id=1',
                        as: '/account/orders/1',
                    },
                },
                { title: 'Address Book', url: '/account/addresses' },
                {
                    title: 'Edit Address',
                    url: {
                        href: '/account/addresses/[id]?id=new',
                        as: '/account/addresses/new',
                    },
                },
                { title: 'Change Password', url: '/account/password' },
            ],
        },
    },
    {
        title: 'Enquiry',
        url: '/about-us',
        submenu: {
            type: 'menu',
            links: [
                { title: 'About Us', url: '/about-us' },
                { title: 'Services', url: '/services' },
                { title: 'Contact Us', url: '/contact-us-v1' },
                // { title: 'Shop Branches', url: '/demo/site/contact-us-v2' },

                { title: 'Terms And Conditions', url: '/terms' },
                { title: 'FAQ', url: '/faq' },
            ],
        },
    }
];

export default dataHeaderMainMenu;

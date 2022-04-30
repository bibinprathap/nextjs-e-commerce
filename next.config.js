const locales = ['en', 'ru', 'ar'];
const defaultLocale = 'en';

// noinspection JSUnusedGlobalSymbols
const nextconfig = {
    // Target must be serverless 
    env: {
        basePath: process.env.BASE_PATH || '',
    },
    basePath: process.env.BASE_PATH || '',
    async rewrites() {
        return [
            ...locales.filter((locale) => locale !== defaultLocale).map((locale) => [
                { source: `/${locale}{/}?`, destination: '/' },
                { source: `/${locale}/:path*`, destination: '/:path*' },
            ]).reduce((acc, cur) => [...acc, ...cur], []),
        ];
    },
    async redirects() {
        return [
            {
                source: `/${defaultLocale}{/}?`,
                destination: '/',
                permanent: true,
            },
            {
                source: `/${defaultLocale}/:path*`,
                destination: '/:path*',
                permanent: true,
            },
        ];
    },
};

// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages],
    // your other plugins here
    nextconfig
]);


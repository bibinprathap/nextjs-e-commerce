// react
import React, { ComponentType, useEffect, useMemo } from 'react';
// third-party
import AppBase, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { NextComponentType, NextPageContext } from 'next';
import { useStore } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import NextNprogress from 'nextjs-progressbar';
// application
import config from '~/config';
import LanguageProvider, { getLanguageInitialProps, ILanguageProviderProps } from '~/services/i18n/provider';
import Layout from '~/components/Layout';
import PageTitle from '~/components/shared/PageTitle';
import { AppDispatch } from '~/store/types';
import { CurrentVehicleGarageProvider } from '~/services/current-vehicle';
import { getLanguageByLocale, getLanguageByPath } from '~/services/i18n/utils';
import { load, save, wrapper } from '~/store/store';
import { optionsSetAll } from '~/store/options/optionsActions';
import { useApplyClientState } from '~/store/client';
import { useLoadUserVehicles } from '~/store/garage/garageHooks';
// styles
import '../scss/index.scss';
import '../scss/style.header-spaceship-variant-one.scss';
import '../scss/style.header-spaceship-variant-two.scss';
import '../scss/style.header-spaceship-variant-three.scss';
import '../scss/style.header-classic-variant-one.scss';
import '../scss/style.header-classic-variant-two.scss';
import '../scss/style.header-classic-variant-three.scss';
import '../scss/style.header-classic-variant-four.scss';
import '../scss/style.header-classic-variant-five.scss';
import '../scss/style.mobile-header-variant-one.scss';
import '../scss/style.mobile-header-variant-two.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Props extends AppProps {
    languageInitialProps: ILanguageProviderProps;
    Component: NextComponentType<NextPageContext, any> & {
        Layout: ComponentType,
    }
}

function App(props: Props) {
    const { Component, pageProps, languageInitialProps } = props;
    const store = useStore();
    const applyClientState = useApplyClientState();
    const loadUserVehicles = useLoadUserVehicles();

    // Loading and saving state on the client side (cart, wishlist, etc.).
    useEffect(() => {
        const state = load();

        applyClientState(state || {});

        if (process.browser) {
            store.subscribe(() => {
                save(store.getState());
            });
        }
    }, [store, applyClientState]);

    // Load user vehicles
    useEffect(() => {
        loadUserVehicles().then();
    }, [loadUserVehicles]);

    // preloader
    useEffect(() => {
        const preloader = document.querySelector('.site-preloader');

        if (!preloader) {
            return;
        }

        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 100);
    }, []);

    const page = useMemo(() => {
        const PageLayout = Component.Layout || React.Fragment;

        return (
            <Layout>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Layout>
        );
    }, [Component, pageProps]);

    // noinspection HtmlRequiredTitleElement
    return (
        <LanguageProvider {...languageInitialProps}>
            <CurrentVehicleGarageProvider>
                <PageTitle />
                <DefaultSeo
                    titleTemplate={'%s | Royal Auto Parts Market'}
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://royalautopartsmarket.com/',
                        site_name: 'Royal Auto Parts Market',
                    }}
                />
                <NextNprogress
                    color="#29D"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                />
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PF4MPLN');`}} />


                </Head>
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF4MPLN" height="0" width="0" style="display:none;visibility:hidden;"></iframe>` }} />

                {page}
            </CurrentVehicleGarageProvider>
        </LanguageProvider>
    );
}

App.getInitialProps = async (context: AppContext) => {
    const dispatch = context.ctx.store.dispatch as AppDispatch;

    await dispatch(optionsSetAll({
        desktopHeaderVariant: config.desktopHeaderVariant,
        mobileHeaderVariant: config.mobileHeaderVariant,
    }));

    let language;

    if (typeof context.ctx.query.lang === 'string') {
        language = getLanguageByLocale(context.ctx.query.lang);
    } else {
        language = getLanguageByPath(context.ctx.asPath || context.ctx.pathname);
    }

    return {
        ...(await AppBase.getInitialProps(context)),
        languageInitialProps: await getLanguageInitialProps(language),
    };
};

const WrappedApp = wrapper.withRedux(App);

// noinspection JSUnusedGlobalSymbols
export default WrappedApp;

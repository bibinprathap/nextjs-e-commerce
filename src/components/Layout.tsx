// react
import React, { PropsWithChildren } from 'react';
// third-party
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';

import { useIntl } from 'react-intl';
// application
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import MobileHeader from '~/components/mobile/MobileHeader';
import MobileMenu from '~/components/mobile/MobileMenu';
import Quickview from '~/components/shared/Quickview';

import SendEnquiry from '~/components/shared/SendEnquiry';

import AsyncAction from '~/components/shared/AsyncAction';
import { IProduct } from '~/interfaces/product';
import { useEnquiryOpen } from '~/store/enquiry/enquiryHooks';
import { useOptions } from '~/store/options/optionsHooks';
import { Adsense } from '@ctrl/react-adsense';

interface Props extends PropsWithChildren<{}> { }

function Layout(props: Props) {
    const { children } = props;
    const { desktopHeaderLayout, desktopHeaderScheme, mobileHeaderVariant } = useOptions();
    const desktopVariantClass = `${desktopHeaderLayout}-${desktopHeaderScheme}`;
    const mobileVariantClass = `mobile-${mobileHeaderVariant}`;
    const enquiryOpen = useEnquiryOpen();
    const product: IProduct = {
        id: 1,
        name: "",
        excerpt: "",
        description: "",
        slug: "",
        sku: "",
        partNumber: "",
        stock: 'in-stock',
        price: 500,
        compareAtPrice: null,
        images: [],
        badges: [],
        rating: 1,
        reviews: 1,
        availability: "",
        compatibility: 'all',
        brand: null,
        type: {
            slug: 'default',
            name: 'Default',
            attributeGroups: [
                {
                    name: 'General',
                    slug: 'general',
                    attributes: [
                        'speed',
                        'power-source',
                        'battery-cell-type',
                        'voltage',
                        'battery-capacity',
                        'material',
                        'engine-type',
                    ],
                },
                {
                    name: 'Dimensions',
                    slug: 'dimensions',
                    attributes: [
                        'length',
                        'width',
                        'height',
                    ],
                },
            ],
        },
        attributes: [],
        options: [
            {
                type: 'default',
                slug: 'material',
                name: 'Material',
                values: [
                    { slug: 'steel', name: 'Steel' },
                    { slug: 'aluminium', name: 'Aluminium' },
                    { slug: 'thorium', name: 'Thorium' },
                ],
            },
            {
                type: 'color',
                slug: 'color',
                name: 'Color',
                values: [
                    { slug: 'white', name: 'White', color: '#fff' },
                    { slug: 'yellow', name: 'Yellow', color: '#ffd333' },
                    { slug: 'red', name: 'Red', color: '#ff4040' },
                    { slug: 'blue', name: 'Blue', color: '#4080ff' },
                ],
            },
        ],
        tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
        categories: undefined,
        customFields: {},
    };
    const showEnquiry = () => enquiryOpen(product);
    const intl = useIntl();
    const classes = classNames(
        'site',
        `site--desktop-header--${desktopVariantClass}`,
        `site--mobile-header--${mobileVariantClass}`,
    );

    const whatsappUrl = new Date().getHours() >= 12 ? 'https://api.whatsapp.com/send?phone=971523195838&text=Hey!I%20would%20like%20to%20know%20more%20about%20some%20parts' : 'https://api.whatsapp.com/send?phone=971523195838&text=Hey!I%20would%20like%20to%20know%20more%20about%20some%20parts';

    return (
        <div className={classes} >
            <ToastContainer autoClose={5000} hideProgressBar />

            <div className="site__container">
                <header className="site__mobile-header">
                    <MobileHeader />
                </header>

                <header className="site__header">
                    <Header />
                </header>

                <div className="site__body">
                    {children}
                </div>

                <footer className="site__footer">
                    <Footer />
                </footer>
            </div>

            <MobileMenu />

            <Quickview />
            <SendEnquiry />
            {/* <div className="adsencefloatleft">
                <Adsense
                    client="ca-pub-5680878689957775"
                    slot="7709655125"
                    style={{ display: 'block' }}
                    layout="in-article"
                    layoutKey="-6t+ed+2i-1n-4w"
                    format="fluid"
                    className="adsbygoogle"
                />
            </div> */}
            {/* <div className="adsencefloatright">
                <Adsense className="adsbygoogle"
                    client="ca-pub-5680878689957775"
                    slot="7409701403"
                    style={{ display: 'block' }}
                    layout="in-article"
                    layoutKey="-ef+6k-30-ac+ty"
                    format="fluid"
                />
            </div> */}
            {/* <div className="adsencefloatbottomright">
                <Adsense
                    client="ca-pub-5680878689957775"
                    slot="8664741628"
                    style={{ display: 'block' }}
                    layout="in-article"
                    layoutKey="-6t+ed+2i-1n-4w"
                    format="auto"
                    className="adsbygoogle"
                // fullWidthResponsive="true"
                />
            </div>
            <div className="adsencefloatbottomleft">
                <Adsense
                    client="ca-pub-5680878689957775"
                    slot="7154265125"
                    style={{ display: 'block', textAlign: 'center' }}
                    layout="in-article"
                    className="adsbygoogle"
                    format="fluid"
                />
            </div> */}

            <div className="quickfloat">
                <AsyncAction
                    action={() => showEnquiry()}
                    render={({ run, loading }) => (
                        <button
                            type="button"
                            className={classNames('btn btn-light btn-block quickmy-float', {
                                'product-card__action--loading': loading,
                            })}
                            aria-label={intl.formatMessage({ id: 'BUTTON_QUICKVIEW' })}
                            onClick={run}
                        >
                            <i className="fas fa-envelope-open-text"></i> Send Enquiry
                        </button>
                    )}
                />
            </div>


            <a href={whatsappUrl} className="float" target="_blank">

                <svg className="fa fa-whatsapp my-float" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            </a>
        </div >
    );
}

export default Layout;

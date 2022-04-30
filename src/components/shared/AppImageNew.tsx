// react
import React, { useMemo } from 'react';
// application
import { baseUrl, baseUrlNew } from '~/services/utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> { }

const AppImageNew = React.forwardRef((props: Props, ref: React.Ref<HTMLImageElement>) => {
    const { src, ...otherProps } = props;


    const normalizedSrcold = useMemo(() => (src ? baseUrl(src) : src), [src]);
    const normalizedSrc: string = normalizedSrcold || '';
    // const imageSrc = require(`${'../../../public' + normalizedSrc}?resize&size=2000`);
    // return <img alt="" {...otherProps} src={imageSrc.src} ref={ref} />;
    //console.log(normalizedSrc);
    //const=require(`${normalizedSrc}?resize`);
    //const=require(`${normalizedSrc}?lqip`);

    // const imageFileName = 'finder1.jpg';
    // const imageSizes = require(`../../../images/products/product-5-1.jpg?resize`);
    // const imagePlaceholder = require(`../../../images/products/product-5-1.jpg?lqip`);
    // const imageColors = require(`../../../images/products/product-5-1.jpg?lqip-colors`);
    // const imgSrc = imageSizes.src;
    // const imgSrcSet = imageSizes.srcSet;
    // const preSrc = imagePlaceholder.preSrc;
    //return (<img src={imageSizes.src} />);

    // return (<img
    //     sizes="100vw"
    //     loading="lazy"
    //     srcSet={imageSizes.srcSet}
    //     src={imagePlaceholder.preSrc}
    // ></img>)
    // const s = 'product-5-1.jpg';

    if (normalizedSrc.indexOf('images/products') > -1) {
        const picname = normalizedSrc.replace('/images/products/', '')
        const srcSet1 = require(`../../../images/products/${picname}?webp`);
        const srcSet2 = require(`../../../images/products/${picname}`);
        const srcmain = require(`../../../images/products/${picname}`);
        return (<picture>
            <source srcSet={srcSet1} type="image/webp" />
            <source srcSet={srcSet2} type="image/jpeg" />
            <img
                {...otherProps}
                src={srcmain}
                alt={picname}
                ref={ref}
            />
        </picture>)
    }
    return <img alt="" {...otherProps} src={normalizedSrc} ref={ref} />;
    //Partial working 
    // return (
    //     <p style={{ paddingBottom: "0px" }}>
    //         <div style={{ display: 'flex', alignItems: 'stretch', margin: '0px 8px', background: `${imageColors[4]}` }}>
    //             <div>
    //                 <img src={imagePlaceholder.preSrc} style={{ width: "254px", height: "254px" }} srcSet={imageSizes.srcSet} sizes="100vw" />
    //             </div>
    //             <div>
    //                 <img src={imagePlaceholder.preSrc} style={{ width: "254px", height: "254px" }} />
    //             </div>
    //             <div style={{ display: 'flex', flexDirection: 'column' }}>
    //                 <div
    //                     style={{
    //                         flex: '30',
    //                         background: `linear-gradient(to right, ${imageColors[0]} 0%,  ${imageColors[4]} 40%,  ${imageColors[4]} 70%, ${imageColors[2]} 100%)`,
    //                         width: '100%',
    //                     }}
    //                 ></div>
    //                 <div style={{ flex: '1', background: `${imageColors[0]}` }}></div>
    //                 <div style={{ flex: '1', background: `${imageColors[1]}` }}></div>
    //                 <div style={{ flex: '1', background: `${imageColors[2]}` }}></div>
    //                 <div style={{ flex: '1', background: `${imageColors[3]}` }}></div>
    //                 <div style={{ flex: '1', background: `${imageColors[4]}` }}></div>
    //                 <div style={{ flex: '1', background: `${imageColors[5]}` }}></div>
    //             </div>
    //         </div>

    //     </p>
    // );


});

export default AppImageNew;

// react
import React, { useMemo } from 'react';
// application
import { baseUrl } from '~/services/utils';


interface Props extends React.ImgHTMLAttributes<HTMLImageElement> { }

const AppImage = React.forwardRef((props: Props, ref: React.Ref<HTMLImageElement>) => {
    const { src, ...otherProps } = props;

    const normalizedSrcold = useMemo(() => (src ? baseUrl(src) : src), [src]);
    const normalizedSrc: string = normalizedSrcold || '';
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
    } else if (normalizedSrc.indexOf('images/avatars') > -1) {
        const picname = normalizedSrc.replace('/images/avatars/', '')
        const srcSet1 = require(`../../../images/avatars/${picname}?webp`);
        const srcSet2 = require(`../../../images/avatars/${picname}`);
        const srcmain = require(`../../../images/avatars/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/banners') > -1) {
        const picname = normalizedSrc.replace('/images/banners/', '')
        const srcSet1 = require(`../../../images/banners/${picname}?webp`);
        const srcSet2 = require(`../../../images/banners/${picname}`);
        const srcmain = require(`../../../images/banners/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/brands') > -1) {
        const picname = normalizedSrc.replace('/images/brands/', '')
        const srcSet1 = require(`../../../images/brands/${picname}?webp`);
        const srcSet2 = require(`../../../images/brands/${picname}`);
        const srcmain = require(`../../../images/brands/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/categories') > -1) {
        const picname = normalizedSrc.replace('/images/categories/', '')
        const srcSet1 = require(`../../../images/categories/${picname}?webp`);
        const srcSet2 = require(`../../../images/categories/${picname}`);
        const srcmain = require(`../../../images/categories/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/departments') > -1) {
        const picname = normalizedSrc.replace('/images/departments/', '')
        const srcSet1 = require(`../../../images/departments/${picname}?webp`);
        const srcSet2 = require(`../../../images/departments/${picname}`);
        const srcmain = require(`../../../images/departments/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/languages') > -1) {
        const picname = normalizedSrc.replace('/images/languages/', '')
        const srcSet1 = require(`../../../images/languages/${picname}?webp`);
        const srcSet2 = require(`../../../images/languages/${picname}`);
        const srcmain = require(`../../../images/languages/${picname}`);
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
    } else if (normalizedSrc.indexOf('images/posts') > -1) {
        const picname = normalizedSrc.replace('/images/posts/', '')
        const srcSet1 = require(`../../../images/posts/${picname}?webp`);
        const srcSet2 = require(`../../../images/posts/${picname}`);
        const srcmain = require(`../../../images/posts/${picname}`);
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
    else if (normalizedSrc.indexOf('images/slides') > -1) {
        const picname = normalizedSrc.replace('/images/slides/', '')
        const srcSet1 = require(`../../../images/slides/${picname}?webp`);
        const srcSet2 = require(`../../../images/slides/${picname}`);
        const srcmain = require(`../../../images/slides/${picname}`);
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
    else if (normalizedSrc.indexOf('images/teammates') > -1) {
        const picname = normalizedSrc.replace('/images/teammates/', '')
        const srcSet1 = require(`../../../images/teammates/${picname}?webp`);
        const srcSet2 = require(`../../../images/teammates/${picname}`);
        const srcmain = require(`../../../images/teammates/${picname}`);
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
    else if (normalizedSrc.indexOf('images/testimonials') > -1) {
        const picname = normalizedSrc.replace('/images/testimonials/', '')
        const srcSet1 = require(`../../../images/testimonials/${picname}?webp`);
        const srcSet2 = require(`../../../images/testimonials/${picname}`);
        const srcmain = require(`../../../images/testimonials/${picname}`);
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
    else if (normalizedSrc.indexOf('/images') > -1) {
        const picname = normalizedSrc.replace('/images/', '')
        const srcSet1 = require(`../../../images/${picname}?webp`);
        const srcSet2 = require(`../../../images/${picname}`);
        const srcmain = require(`../../../images/${picname}`);
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
    //return <img alt="" {...otherProps} src={normalizedSrc} ref={ref} />;
    return <img alt="" {...otherProps} src={normalizedSrc} ref={ref} />;
});

export default AppImage;

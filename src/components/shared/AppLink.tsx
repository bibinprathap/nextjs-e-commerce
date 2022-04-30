// react
import React, { PropsWithChildren } from 'react';
// third-party
import Link, { LinkProps } from 'next/link';
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';
import {
    format as formatUrl,
    parse as parseUrl,
    Url,
    UrlObject,
} from 'url';
// application
import { getDefaultLocale } from '~/services/i18n/utils';
import { useLocale } from '~/services/i18n/hooks';
import { baseUrl } from '~/services/utils';

export type IAppLinkHref = string | LinkProps;

type INormalizedUrlObject = Omit<UrlObject, 'query'> & {
    query: ParsedUrlQueryInput;
};

type INormalizedLinkProps = Omit<LinkProps, 'href' | 'as'> & {
    href: INormalizedUrlObject;
    as: INormalizedUrlObject;
};

export function normalizeHref(href: string | UrlObject): INormalizedUrlObject {
    const result = {
        ...(parseUrl(typeof href === 'string' ? href : formatUrl(href), true)),
    } as (Partial<Url> & { query: ParsedUrlQuery });

    delete result.host;
    delete result.href;
    delete result.path;
    delete result.search;

    result.query = result.query || {};

    return result;
}

export function normalizeLinkHref(data: IAppLinkHref): INormalizedLinkProps {
    const result = typeof data === 'string' ? { href: data } : data;

    return {
        ...result,
        href: normalizeHref(result.href),
        as: normalizeHref(result.as || result.href),
    };
}

function addLocale(url: INormalizedUrlObject, locale: string): INormalizedUrlObject {
    return {
        ...url,
        pathname: !url.pathname || locale === getDefaultLocale()
            ? url.pathname
            : `/${locale}${url.pathname}`,
    };
}

type AnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

interface Props extends PropsWithChildren<AnchorProps> {
    href?: IAppLinkHref;
    anchor?: boolean;
}

function AppLink(props: Props) {
    const {
        href,
        children,
        anchor = false,
        ...anchorProps
    } = props;
    const locale = useLocale();
    const data = normalizeLinkHref(href || '');
    const isExternal = !!data.href.hostname;
    const hasPath = !!data.href.pathname;
    const onlyHash = formatUrl(data.href).startsWith('#');

    if (isExternal || anchor || onlyHash) {
        let anchorHref;

        if (!isExternal && hasPath) {
            data.href = addLocale(data.href, locale);

            anchorHref = baseUrl(formatUrl(data.href));
        } else {
            anchorHref = formatUrl(data.href);
        }

        return <a href={anchorHref} {...anchorProps}>{children}</a>;
    }

    data.href.query = {
        ...data.href.query,
        lang: locale,
    };

    data.as = addLocale(data.as, locale);

    return (
        <Link {...data}>
            <a {...anchorProps}>{children}</a>
        </Link>
    );
}

export default AppLink;

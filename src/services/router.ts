/* eslint-disable import/prefer-default-export */

// react
import { useMemo } from 'react';
// third-party
import { NextRouter, useRouter } from 'next/router';
import { UrlObject } from 'url';
// application
import { getDefaultLocale } from '~/services/i18n/utils';
import { IAppLinkHref, normalizeHref, normalizeLinkHref } from '~/components/shared/AppLink';
import { useLocale } from '~/services/i18n/hooks';

type PushArgs = [url: UrlObject, as?: UrlObject, options?: {}];

export function hrefToRouterArgs(linkHref: IAppLinkHref): PushArgs {
    const { href, as, shallow } = normalizeLinkHref(linkHref);

    return [href, as, { shallow }];
}

function normalizeRouterArgs(args: PushArgs, locale: string): PushArgs {
    const [url, as, options] = args;
    const normalizedUrl = normalizeHref(url);
    const normalizedAs = normalizeHref(as || url);

    normalizedUrl.query = {
        ...normalizedUrl.query,
    };

    normalizedAs.pathname = locale === getDefaultLocale()
        ? normalizedAs.pathname
        : `/${locale}${normalizedAs.pathname}`;

    return [normalizedUrl, normalizedAs, options];
}

export function useOriginalRouter() {
    return useRouter();
}

export function useAppRouter(): NextRouter {
    const original = useRouter();
    const locale = useLocale();
    const mimic: Partial<typeof original> = useMemo(() => ({
        push(...args: PushArgs): Promise<boolean> {
            return original.push(
                ...normalizeRouterArgs(args, locale),
            );
        },
        replace(...args: PushArgs): Promise<boolean> {
            return original.replace(
                ...normalizeRouterArgs(args, locale),
            );
        },
    }), [original, locale]);

    return useMemo(() => Object.setPrototypeOf(mimic, original), [mimic, original]);
}

// react
import React from 'react';
// application
import { IAppLinkHref } from '~/components/shared/AppLink';
import { ICustomFields } from './custom-fields';

export interface ILink {
    title: string | React.ReactNode;
    url?: IAppLinkHref;
    customFields?: ICustomFields;
}

export interface INestedLink extends ILink {
    links?: INestedLink[];
}

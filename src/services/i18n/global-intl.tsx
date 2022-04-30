// react
import React, { PropsWithChildren } from 'react';
// third-party
import { IntlShape, useIntl } from 'react-intl';

interface Props extends PropsWithChildren<{}> { }

let intlRef: IntlShape | null = null;

export function globalIntl() {
    return intlRef;
}

function GlobalIntlProvider(props: Props) {
    const intl = useIntl();
    const { children } = props;

    intlRef = intl;

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default GlobalIntlProvider;

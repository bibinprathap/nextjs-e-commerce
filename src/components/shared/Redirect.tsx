// application
import { hrefToRouterArgs, useAppRouter } from '~/services/router';
import { IAppLinkHref } from '~/components/shared/AppLink';

interface Props {
    href: IAppLinkHref;
}

function Redirect(props: Props) {
    const { href } = props;
    const router = useAppRouter();

    if (typeof window !== 'undefined') {
        router.push(...hrefToRouterArgs(href)).then();
    }

    return null;
}

export default Redirect;

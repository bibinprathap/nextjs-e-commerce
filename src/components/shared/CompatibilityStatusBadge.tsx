// react
import React, { useMemo } from 'react';
// third-party
import { useIntl } from 'react-intl';
// application
import StatusBadge, { IStatusBadgeIcon, IStatusBadgeType } from '~/components/shared/StatusBadge';
import { IProduct, IProductCompatibilityResult } from '~/interfaces/product';
import { IVehicle } from '~/interfaces/vehicle';
import { useCurrentVehicle } from '~/services/current-vehicle';

interface Props extends React.HTMLAttributes<HTMLElement> {
    product: IProduct;
}

function CompatibilityStatusBadge(props: Props) {
    const {
        product,
        className,
    } = props;
    const intl = useIntl();
    const [currentVehicle]: readonly [Enumerable<IVehicle> | null, any] = useCurrentVehicle();

    const compatibility: IProductCompatibilityResult | null = useMemo(() => {
        if (!currentVehicle) {
            return null;
        }
        if (product.compatibility === 'all') {
            return 'all';
        }
        if (product.compatibility === 'unknown') {
            return 'unknown';
        }
        if (product.compatibility.includes(currentVehicle.id)) {
            return 'fit';
        }

        return 'not-fit';
    }, [product, currentVehicle]);

    if (!compatibility || !currentVehicle) {
        return null;
    }

    const compatibilityToTypeMap: Record<IProductCompatibilityResult, IStatusBadgeType> = {
        all: 'unknown',
        fit: 'success',
        'not-fit': 'failure',
        unknown: 'warning',
    };
    const compatibilityToIconMap: Record<IProductCompatibilityResult, IStatusBadgeIcon> = {
        all: 'success',
        fit: 'success',
        'not-fit': 'failure',
        unknown: 'failure',
    };
    const compatibilityToTextMap: Record<IProductCompatibilityResult, string> = {
        all: intl.formatMessage({ id: 'TEXT_COMPATIBILITY_ALL' }, currentVehicle),
        fit: intl.formatMessage({ id: 'TEXT_COMPATIBILITY_FIT' }, currentVehicle),
        'not-fit': intl.formatMessage({ id: 'TEXT_COMPATIBILITY_NOT_FIT' }, currentVehicle),
        unknown: intl.formatMessage({ id: 'TEXT_COMPATIBILITY_UNKNOWN' }, currentVehicle),
    };

    return (
        <StatusBadge
            type={compatibilityToTypeMap[compatibility]}
            icon={compatibilityToIconMap[compatibility]}
            text={compatibilityToTextMap[compatibility]}
            tooltip={compatibilityToTextMap[compatibility]}
            className={className}
        />
    );
}

export default CompatibilityStatusBadge;

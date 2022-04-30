// react
import React, {
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
// application
import { IVehicle } from '~/interfaces/vehicle';
import { useGarageCurrent, useGarageSetCurrent } from '~/store/garage/garageHooks';

type ContextData = readonly [
    vehicle: IVehicle | null,
    setVehicle: (value: IVehicle | null) => void,
];

const CurrentVehicleContext = React.createContext<ContextData>([null, () => {}]);

export function useCurrentVehicle() {
    return useContext(CurrentVehicleContext);
}

export function CurrentVehicleGarageProvider(props: PropsWithChildren<{}>) {
    const { children } = props;
    const vehicle = useGarageCurrent();
    const garageSetCurrent = useGarageSetCurrent();

    const setVehicle = useCallback((vehicle: IVehicle | null) => {
        garageSetCurrent(vehicle?.id || null);
    }, [garageSetCurrent]);

    const value = useMemo(() => [vehicle, setVehicle] as const, [vehicle, setVehicle]);

    return (
        <CurrentVehicleContext.Provider value={value}>
            {children}
        </CurrentVehicleContext.Provider>
    );
}

export function CurrentVehicleScopeProvider(props: PropsWithChildren<{}>) {
    const { children } = props;
    const [initialVehicle] = useCurrentVehicle();
    const [vehicle, setVehicle] = useState<IVehicle | null>(initialVehicle);
    const value = useMemo(() => [vehicle, setVehicle] as const, [vehicle, setVehicle]);

    return (
        <CurrentVehicleContext.Provider value={value}>
            {children}
        </CurrentVehicleContext.Provider>
    );
}

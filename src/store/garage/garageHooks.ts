// application
import { GARAGE_NAMESPACE } from '~/store/garage/garageReducer';
import { useAppAction, useAppSelector } from '~/store/hooks';
import {
    garageAddItem,
    garageRemoveItem,
    garageSetCurrent,
    loadUserVehicles,
} from '~/store/garage/garageAction';

export const useUserVehicles = () => useAppSelector((state) => state[GARAGE_NAMESPACE].items);

export const useGarageCurrent = () => useAppSelector((state) => state[GARAGE_NAMESPACE].current);

export const useGarageSetCurrent = () => useAppAction(garageSetCurrent);

export const useGarageAddItem = () => useAppAction(garageAddItem);

export const useGarageRemoveItem = () => useAppAction(garageRemoveItem);

export const useLoadUserVehicles = () => useAppAction(loadUserVehicles);

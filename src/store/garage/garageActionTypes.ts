// application
import { AppAction } from '~/store/types';
import { IVehicle } from '~/interfaces/vehicle';

export const GARAGE_SET_ITEMS = 'GARAGE_SET_ITEMS';
export const GARAGE_SET_CURRENT = 'GARAGE_SET_CURRENT';

export interface GarageSetItemsAction {
    type: typeof GARAGE_SET_ITEMS;
    payload: IVehicle[];
}

export interface GarageSetCurrentAction {
    type: typeof GARAGE_SET_CURRENT;
    payload: number | null;
}

export type GarageAction =
    GarageSetItemsAction |
    GarageSetCurrentAction;

export type GarageThunkAction<T = void> = AppAction<GarageAction, T>;

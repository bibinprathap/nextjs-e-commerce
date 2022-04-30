// application
import { IVehicle } from '~/interfaces/vehicle';

export interface IGarageState {
    items: IVehicle[];
    current: IVehicle | null;
}

/* eslint-disable import/prefer-default-export */

// application
import { IVehicle } from '~/interfaces/vehicle';

export abstract class VehicleApi {
    abstract getYears(): Promise<number[]>;

    abstract getMakes(year: number): Promise<string[]>;

    abstract getModels(year: number, make: string): Promise<string[]>;

    abstract getVehicles(year: number, make: string, model: string): Promise<IVehicle[]>;

    abstract getVehicleByVin(vin: string): Promise<IVehicle>;

    abstract getUserVehicles(): Promise<IVehicle[]>;

    abstract addUserVehicle(vehicleId: number): Promise<void>;

    abstract removeUserVehicle(vehicleId: number): Promise<void>;
}

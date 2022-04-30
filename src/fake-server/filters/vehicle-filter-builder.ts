/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { IProduct } from '~/interfaces/product';
import { IVehicle } from '~/interfaces/vehicle';
import { IVehicleFilter, IVehicleFilterValue } from '~/interfaces/filter';
import { vehicles as dbVehicles } from '~/fake-server/database/vehicles';

export class VehicleFilterBuilder extends AbstractFilterBuilder {
    private value: IVehicleFilterValue = null;

    private vehicle: IVehicle | null = null;

    private static testCompatibility(vehicle: IVehicle, product: IProduct): boolean {
        if (product.compatibility === 'all') {
            return true;
        }
        if (product.compatibility === 'unknown') {
            return false;
        }

        return product.compatibility.includes(vehicle.id);
    }

    test(product: IProduct): boolean {
        if (this.value) {
            return this.vehicle !== null && VehicleFilterBuilder.testCompatibility(this.vehicle, product);
        }

        return true;
    }

    makeItems(products: IProduct[], value: string): void {
        this.vehicle = dbVehicles.find((x) => x.id === parseFloat(value)) || null;
        this.value = this.vehicle ? this.vehicle.id : null;
    }

    calc(): void { }

    build(): IVehicleFilter {
        return {
            type: 'vehicle',
            slug: this.slug,
            name: this.name,
            value: this.value,
            vehicle: this.vehicle,
        };
    }
}

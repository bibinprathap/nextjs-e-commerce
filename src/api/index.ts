import { FakeAccountApi } from './fake-api/fake-account.api';
import { FakeBlogApi } from './fake-api/fake-blog.api';
import { FakeCountriesApi } from './fake-api/fake-countries.api';
import { FakeShopApi } from './fake-api/fake-shop.api';
import { FakeVehicleApi } from './fake-api/fake-vehicle.api';

export const accountApi = new FakeAccountApi();
export const blogApi = new FakeBlogApi();
export const countriesApi = new FakeCountriesApi();
export const shopApi = new FakeShopApi();
export const vehicleApi = new FakeVehicleApi();

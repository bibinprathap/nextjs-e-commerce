/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { CountriesApi } from '~/api/base';
import { getCountries } from '~/fake-server/endpoints';
import { ICountry } from '~/interfaces/country';

export class FakeCountriesApi extends CountriesApi {
    getCountries(): Promise<ICountry[]> {
        return getCountries();
    }
}

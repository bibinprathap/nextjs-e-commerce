/* eslint-disable import/prefer-default-export */

// application
import { ICountry } from '~/interfaces/country';

export abstract class CountriesApi {
    abstract getCountries(): Promise<ICountry[]>;
}

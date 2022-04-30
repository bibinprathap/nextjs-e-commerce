/* eslint-disable import/prefer-default-export */

// application
import { IOptionsData } from '~/store/options/optionsTypes';
import { OPTIONS_SET_ALL, OptionsSetAll } from '~/store/options/optionsActionTypes';

export function optionsSetAll(options: IOptionsData): OptionsSetAll {
    return {
        type: OPTIONS_SET_ALL,
        options,
    };
}

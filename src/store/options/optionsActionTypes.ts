// third-party
import { HYDRATE } from 'next-redux-wrapper';
// application
import { IOptionsData, IOptionsState } from '~/store/options/optionsTypes';
import { OPTIONS_NAMESPACE } from '~/store/options/optionsReducer';

export const OPTIONS_HYDRATE = HYDRATE;
export const OPTIONS_SET_ALL = 'OPTIONS_SET_ALL';

export interface OptionsHydrateAction {
    type: typeof OPTIONS_HYDRATE;
    payload: {
        [OPTIONS_NAMESPACE]: IOptionsState;
    };
}

export interface OptionsSetAll {
    type: typeof OPTIONS_SET_ALL;
    options: IOptionsData;
}

export type OptionsAction =
    OptionsHydrateAction |
    OptionsSetAll;

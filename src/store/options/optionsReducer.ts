// application
import { OPTIONS_HYDRATE, OPTIONS_SET_ALL, OptionsAction } from '~/store/options/optionsActionTypes';
import {
    IDesktopHeaderLayout,
    IDesktopHeaderScheme,
    IOptionsData,
    IOptionsState,
} from '~/store/options/optionsTypes';

function optionsSetAll(state: IOptionsState, options: IOptionsData): IOptionsState {
    const { desktopHeaderVariant, mobileHeaderVariant } = options;
    const [
        desktopHeaderLayout,
        desktopHeaderScheme,
    ] = desktopHeaderVariant.split('/') as [IDesktopHeaderLayout, IDesktopHeaderScheme];

    return {
        desktopHeaderLayout,
        desktopHeaderScheme,
        mobileHeaderVariant,
    };
}

const initialState: IOptionsState = {
    desktopHeaderLayout: 'spaceship',
    desktopHeaderScheme: 'one',
    mobileHeaderVariant: 'one',
};

export const OPTIONS_NAMESPACE = 'options';

function optionsReducer(state = initialState, action: OptionsAction) {
    switch (action.type) {
    case OPTIONS_HYDRATE:
        return action.payload[OPTIONS_NAMESPACE];
    case OPTIONS_SET_ALL:
        return optionsSetAll(state, action.options);

    default:
        return state;
    }
}

export default optionsReducer;

// third-party
import { Action } from 'redux';
// application
import { AppReducer } from '~/store/types';
import { useAppAction } from '~/store/hooks';

const APPLY_CLIENT_STATE = 'APPLY_CLIENT_STATE';

type ApplyClientStateAction<T> = {
    type: typeof APPLY_CLIENT_STATE;
    state: T;
};

function isApplyClientStateAction<T extends any>(action: Action): action is ApplyClientStateAction<T> {
    return action.type === APPLY_CLIENT_STATE;
}

export function applyClientState<T extends object>(state: T): ApplyClientStateAction<T> {
    return {
        type: APPLY_CLIENT_STATE,
        state,
    };
}

export const useApplyClientState = () => useAppAction(applyClientState);

export type IStateFromServer = 'server';
export type IStateFromClient = 'client';
export type IStateFrom = IStateFromServer | IStateFromClient;

export function withClientState<
    T extends AppReducer<any, any>,
    S extends ReturnType<T>,
    R extends S & { stateFrom: IStateFrom }
>(
    reducer: T extends AppReducer<ReturnType<T> & { stateFrom: any }, any>
        ? AppReducer<ReturnType<T> & { stateFrom: never }, any>
        : T,
    namespace: string,
): AppReducer<R> {
    return (state: S, action: Action | ApplyClientStateAction<{ [ns: string]: any }>): R => {
        const childState = reducer(state, action);

        if (isApplyClientStateAction(action)) {
            return {
                ...(action.state[namespace] || childState),
                stateFrom: 'client',
            };
        }

        if ('stateFrom' in childState) {
            return childState;
        }

        return {
            ...childState,
            stateFrom: 'server',
        };
    };
}

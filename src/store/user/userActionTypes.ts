// application
import { AppAction } from '~/store/types';
import { IUser } from '~/interfaces/user';

export const USER_SET_CURRENT = 'USER_SET_CURRENT';

export interface UserSetCurrentAction {
    type: typeof USER_SET_CURRENT;
    payload: IUser | null;
}

export type UserAction = UserSetCurrentAction;

export type UserThunkAction<T = void> = AppAction<UserAction, T>;

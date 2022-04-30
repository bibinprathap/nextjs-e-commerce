// application
import { IUserState } from '~/store/user/userTypes';
import { USER_SET_CURRENT, UserAction } from '~/store/user/userActionTypes';

const initialState: IUserState = {
    current: null,
};

export const USER_NAMESPACE = 'user';

function userReducer(state = initialState, action: UserAction): IUserState {
    switch (action.type) {
    case USER_SET_CURRENT:
        return {
            ...state,
            current: action.payload,
        };
    default:
        return state;
    }
}

export default userReducer;

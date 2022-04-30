// application
import { useAppAction, useAppSelector } from '~/store/hooks';
import { USER_NAMESPACE } from '~/store/user/userReducer';
import {
    userEditProfile,
    userSignIn,
    userSignOut,
    userSignUp,
} from '~/store/user/userAction';

export const useUser = () => useAppSelector((state) => state[USER_NAMESPACE].current);

export const useUserSignIn = () => useAppAction(userSignIn);

export const useUserSignUp = () => useAppAction(userSignUp);

export const useUserSignOut = () => useAppAction(userSignOut);

export const useUserEditProfile = () => useAppAction(userEditProfile);

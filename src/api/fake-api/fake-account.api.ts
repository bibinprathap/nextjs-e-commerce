/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { IAddress } from '~/interfaces/address';
import { IOrder } from '~/interfaces/order';
import { IOrdersList } from '~/interfaces/list';
import { IUser } from '~/interfaces/user';
import {
    AccountApi,
    IEditAddressData,
    IEditProfileData,
    IGetOrdersListOptions,
} from '~/api/base';
import {
    accountChangePassword,
    accountEditProfile,
    accountSignIn,
    accountSignOut,
    accountSignUp,
    addAddress,
    delAddress,
    editAddress,
    getAddress,
    getAddresses,
    getDefaultAddress,
    getOrderById,
    getOrderByToken,
    getOrdersList,
} from '~/fake-server/endpoints';

export class FakeAccountApi extends AccountApi {
    signIn(email: string, password: string): Promise<IUser> {
        return accountSignIn(email, password);
    }

    signUp(email: string, password: string): Promise<IUser> {
        return accountSignUp(email, password);
    }

    signOut(): Promise<void> {
        return accountSignOut();
    }

    editProfile(data: IEditProfileData): Promise<IUser> {
        return accountEditProfile(data);
    }

    changePassword(oldPassword: string, newPassword: string): Promise<void> {
        return accountChangePassword(oldPassword, newPassword);
    }

    addAddress(data: IEditAddressData): Promise<IAddress> {
        return addAddress(data);
    }

    editAddress(addressId: number, data: IEditAddressData): Promise<IAddress> {
        return editAddress(addressId, data);
    }

    delAddress(addressId: number): Promise<void> {
        return delAddress(addressId);
    }

    getDefaultAddress(): Promise<IAddress | null> {
        return getDefaultAddress();
    }

    getAddress(addressId: number): Promise<IAddress> {
        return getAddress(addressId);
    }

    getAddresses(): Promise<IAddress[]> {
        return getAddresses();
    }

    getOrdersList(options?: IGetOrdersListOptions): Promise<IOrdersList> {
        return getOrdersList(options);
    }

    getOrderById(id: number): Promise<IOrder> {
        return getOrderById(id);
    }

    getOrderByToken(token: string): Promise<IOrder> {
        return getOrderByToken(token);
    }
}

// application
import { addresses, getNextAddressId } from '~/fake-server/database/addresses';
import { clone, delayResponse } from '~/fake-server/utils';
import { IAddress } from '~/interfaces/address';
import { IEditAddressData } from '~/api/base';

export function getDefaultAddress(): Promise<IAddress> {
    return Promise.resolve(clone(addresses.find((x) => x.default) || null));
}

export function getAddress(addressId: number): Promise<IAddress> {
    return Promise.resolve(clone(addresses.find((x) => x.id === addressId) || null));
}

export function getAddresses(): Promise<IAddress[]> {
    return Promise.resolve(clone(addresses));
}

export function addAddress(data: Partial<IEditAddressData>): Promise<IAddress> {
    const address: IAddress = {
        id: getNextAddressId(),
        firstName: '',
        lastName: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        default: false,
        ...data,
    };

    if (addresses.length < 1) {
        address.default = true;
    }

    if (address.default) {
        for (let i = 0; i < addresses.length; i += 1) {
            addresses[i].default = false;
        }
    }

    addresses.push(address);

    return delayResponse(Promise.resolve(address));
}

// noinspection DuplicatedCode
export function editAddress(addressId: number, data: IEditAddressData): Promise<IAddress> {
    const address = addresses.find((x) => x.id === addressId);

    if (!address) {
        throw new Error('Address not found');
    }

    address.firstName = data.firstName;
    address.lastName = data.lastName;
    address.company = data.company;
    address.country = data.country;
    // address.address1 = data.address1;
    // address.address2 = data.address2;
    // address.city = data.city;
    // address.state = data.state;
    // address.postcode = data.postcode;
    address.email = data.email;
    address.phone = data.phone;
    address.default = data.default;

    if (address.default) {
        for (let i = 0; i < addresses.length; i += 1) {
            addresses[i].default = addresses[i].id === addressId;
        }
    }

    return delayResponse(Promise.resolve(address));
}

export function delAddress(addressId: number): Promise<void> {
    const index = addresses.findIndex((x) => x.id === addressId);

    if (index !== -1) {
        const address = addresses.splice(index, 1)[0];

        if (address.default && addresses.length > 0) {
            addresses[0].default = true;
        }
    }

    return delayResponse(Promise.resolve());
}

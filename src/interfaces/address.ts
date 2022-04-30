export interface IAddressData {
    firstName: string;
    lastName: string;
    company: string;
    country: string;

    email: string;
    phone: string;
}
// address1: string;
// address2: string;
// city: string;
// state: string;
// postcode: string;

export interface IAddress extends IAddressData {
    id: number;
    default: boolean;
}

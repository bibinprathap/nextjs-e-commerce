// application
import { IAddress } from '~/interfaces/address';
import { makeIdGenerator } from '~/fake-server/utils';

export const getNextAddressId = makeIdGenerator();

export const addresses: IAddress[] = [
    {
        id: getNextAddressId(),
        firstName: 'Ryan',
        lastName: 'Ford',
        company: 'Stroyka',
        country: 'RAND',
        email: 'stroyka@example.com',
        phone: '+9715692452112',
        default: true,
    },
    {
        id: getNextAddressId(),
        firstName: 'Jupiter',
        lastName: 'Saturnov',
        company: 'Stroyka',
        country: 'LAND',
        email: 'jupiter@example.com',
        phone: 'ZX 971 972-57-26',
        default: false,
    },
];

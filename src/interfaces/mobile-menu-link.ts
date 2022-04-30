// application
import { ILink } from './link';

export interface IMobileMenuLink extends ILink {
    image?: string;
    submenu?: IMobileMenuLink[];
}

// application
import { ILink } from './link';
import { IMegamenu } from './menu';

export interface IDepartmentsLink extends ILink {
    submenu?: IMegamenu;
}

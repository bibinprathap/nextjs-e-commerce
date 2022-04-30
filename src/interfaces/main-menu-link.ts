// application
import { ILink } from './link';
import { IMegamenu, IMenu } from './menu';

export interface IMainMenuLink extends ILink {
    submenu?: IMenu | IMegamenu;
}

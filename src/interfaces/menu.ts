// application
import { INestedLink } from './link';

export interface IMenuBase {
    type: string;
}

export type IMegamenuSize = 'xl' | 'lg' | 'md' | 'nl' | 'sm';

export type IMegamenuColumnSize =
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
    '1of1' | '1of2' | '1of3' | '1of4' | '1of5';

export interface IMegamenuColumn {
    size: IMegamenuColumnSize;
    links: INestedLink[];
}

export interface IMegamenu extends IMenuBase {
    type: 'megamenu';
    size: IMegamenuSize;
    image?: string;
    columns: IMegamenuColumn[];
}

export interface IMenu extends IMenuBase {
    type: 'menu';
    links: INestedLink[];
}

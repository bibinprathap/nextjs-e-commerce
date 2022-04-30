export type IDirection = 'ltr' | 'rtl';

export interface ILanguage {
    locale: string;
    code: string;
    name: string;
    icon: string;
    direction: IDirection;
}

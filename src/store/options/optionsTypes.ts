export type IDesktopHeaderVariant =
    'spaceship/one' |
    'spaceship/two' |
    'spaceship/three' |
    'classic/one' |
    'classic/two' |
    'classic/three' |
    'classic/four' |
    'classic/five';

export type IDesktopHeaderLayout = 'classic' | 'spaceship';

export type IDesktopHeaderScheme = 'one' | 'two' | 'three' | 'four' | 'five';

export type IMobileHeaderVariant = 'one' | 'two';

export interface IOptionsData {
    desktopHeaderVariant: IDesktopHeaderVariant;
    mobileHeaderVariant: IMobileHeaderVariant;
}

export interface IOptionsState {
    desktopHeaderLayout: IDesktopHeaderLayout;
    desktopHeaderScheme: IDesktopHeaderScheme;
    mobileHeaderVariant: IMobileHeaderVariant;
}

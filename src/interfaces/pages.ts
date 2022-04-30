type SidebarPosition = 'start' | 'end';

// shop category
export type IShopCategoryPageLayout =
    'columns-3-sidebar' |
    'columns-4-sidebar' |
    'columns-5-sidebar' |
    'columns-4-full' |
    'columns-5-full' |
    'columns-6-full' |
    'columns-7-full';

export type IShopCategoryPageSidebarPosition = SidebarPosition;

// shop
export type IShopPageLayout =
    'grid' |
    'grid-with-features' |
    'list' |
    'table';

export type IShopPageGridLayout =
    'grid-3-sidebar' |
    'grid-4-sidebar' |
    'grid-4-full' |
    'grid-5-full' |
    'grid-6-full';

export type IShopPageSidebarPosition = SidebarPosition;

export type IShopPageOffCanvasSidebar = 'always' | 'mobile';

// product
export type IProductPageLayout = 'sidebar' | 'full';

export type IProductPageSidebarPosition = SidebarPosition;

// blog
export type IBlogPageLayout = 'classic' | 'grid' | 'list';

export type IBlogPageSidebarPosition = SidebarPosition;

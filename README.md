

## Next.js Shopping Website
![alt nextjs-e-commerce-shoping-website](https://media-exp1.licdn.com/dms/image/C4E2DAQGwkKGYdH0BIA/profile-treasury-image-shrink_800_800/0/1609766935867?e=2147483647&v=beta&t=6DJeDzQ4QExqo8q4JpX5bsAWymz_wwuDOuu5PxOC9Q0) 

This is a shopping website developed using Next.js, Node.js, React, Redux, Algoliya
Search, Redis Caching. Hosted on Digital ocean Ubendu server

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/bibin-prathap-4a34a489" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="bibin-prathap-4a34a489" height="30" width="40" /></a>
<a href="https://stackoverflow.com/users/6724770/bibin-prathap" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="6724770/bibin-prathap" height="30" width="40" /></a>
<a href="https://fb.com/bibin.prathap" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="bibin.prathap" height="30" width="40" /></a>
<a href="https://medium.com/@bibinprathap" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="@bibinprathap" height="30" width="40" /></a>
</p> 

<h3 align="left">Support:</h3>
<p><a href="https://www.buymeacoffee.com/bibinprathap"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="bibinprathap" /></a></p><br><br>
 
## Features
-  Two header layouts
- RTL/LTR Supported
- Five different color schemes
- Based on Bootstrap 4.6.x
- Powerful mobile menu
- With auto parts store features
- 100% Responsive Layout
- HTML5, CSS3, SASS
- CSS3 Animation
-  SVG & Font Awesome Icons
- BEM syntax
- Roboto Google Font
- Compatible with all major browsers
- Four shop layouts
- Quickview
- Offcanvas filters
- Account pages
- Megamenu
- Vertical Megamenu
- Photoswipe gallery
- Cursor based and page based navigation


## Getting Started
<h1 align="center"> Preparation </h1>
<p align="left">Make sure your system has installed Node.js and Yarn.</p>
<p align="left">Open a terminal window and go to the Sources directory.</p>
<p align="left">Run the yarn install command. This command will load all necessary dependencies specified in the package.json file.</p>
<h1 align="center">Build Project </h1>
<p align="left">To start a local HTTP server and runs the build process with change tracking run the command:</p>

<p align="left">npm run dev</p>
<p align="left">To build for production, run the command:</p>

<p align="left">npm run build</p>
<p align="left">After executing the command, the compiled project will be located in the .next directory.</p>

<p align="left">You can find more information about the available commands in the official NextJs</p>

<h1 class="docs-section__title">Project Structure</h1>
<p>
        Project source codes are in the <code>Sources</code> directory.
        After downloading and unpacking the package, the <code>Sources</code> directory will look like this:
</p>

<pre><code class="language-text">Sources/
    public/
        i18n/
        images/
    src/
        api/
        components/
        data/
        fake-server/
        interfaces/
        pages/
        scss/
        services/
        store/
        svg/
    .babelrc
    .editorconfig
    .env
    .eslintrc.js
    .gitignore
    custom.d.ts
    next.config.js
    next-env.d.ts
    package.json
    tsconfig.json
    yarn.lock</code></pre>


Here is a description of the most important files and directories of the
project:

-   `Sources/src/api/` - Contains functions that fetch data from the
    server. You need to replace calls to the fake server with real AJAX
    requests.
-   `Sources/src/components/` - Contains components used in the
    template. More details below.
-   `Sources/src/data/` - Contains stubs data for the template,
    products, categories, etc.
-   `Sources/src/fake-server/` - Contains fake server code. Used for
    demonstration purposes only. After you replace calls to the fake
    server with real AJAX requests, you can delete this directory.
-   `Sources/src/interfaces/` - Contains the typescript interfaces used
    in the template.
-   `Sources/src/pages/` - Contains the components of Next.js pages.
-   `Sources/src/scss/` - Contains project styles. More details are
    described in the **SCSS Files** section.
-   `Sources/src/services/` - Contains some useful functions and classes
    that are used in the template.
-   `Sources/src/store/` - Files related to React Redux: actions,
    reducers, .etc. More details below.
-   `Sources/src/svg/` - Contains separate SVG files.

## Components directory

`Sources/src/components` is a main directory with the following
structure:

``` text
components/
    account/
    blocks/
    blog/
    filters/
    footer/
    header/
    mobile/
    shared/
    shop/
    site/
    widgets/
    Layout.tsx
```

**Directory Description**

-   **src/components/account**  
    Contains customer pages and components.

-   **src/components/blocks**  
    Contains components used as a construction bricks for pages (mainly
    used on the home page).

-   **src/components/blog**  
    Blog related components, pages, etc.

-   **src/components/filters**  
    Contains shop filters.

-   **src/components/footer**  
    Contains the components used in the footer of the site.

-   **src/components/header**  
    Contains the components used in the header of the site.

-   **src/components/mobile**  
    Contains the components used in the mobile header and mobile menu.

-   **src/components/shared**  
    Contains components used across all template.

-   **src/components/shop**  
    Contains shop pages (category, product, cart, checkout, etc.) and
    components.

-   **src/components/site**  
    Contains rest site pages (About Us, Contact Us, etc.).

-   **src/components/widgets**  
    Contains components used in the shop or/and blog sidebar.

## Store directory

`Sources/src/store` contains files related to React Redux: actions,
reducers, .etc.

All actions, reducers are logically separated by "feature", you can see
the structure of this directory below:

``` text
store/
    cart/
        cartActions.ts
        cartActionTypes.ts
        cartHooks.ts
        cartReducer.ts
        cartTypes.ts
    compare/
        ...
    currency/
        ...
    garage/
        ...
    mobile-menu/
        ...
    options/
        ...
    quickview/
        ...
    root/
        ...
    shop/
        ...
    user/
        ...
    wishlist/
        ...
    client.ts
    hooks.ts
    store.ts
    types.ts
    version.ts
```

# Customization

## How to change logo?

-   **Desktop header** - In the `src/components/header/Logo.tsx` file,
    find comments `{/* logo */}` and `{/* logo / end */}` and replace
    code between them with your logo image.
-   **Mobile header** - In the `src/components/mobile/MobileLogo.tsx`
    file, find comments `{/* mobile-logo */}` and
    `{/* mobile-logo / end */}` and replace code between them with your
    logo image.

## How to change font?

1.  Open the `src/pages/_document.tsx` file.

2.  Find and replace with the desired font:

    ``` jsx
    {/* fonts */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i">
    ```

3.  Open the `src/scss/_custom-variables.scss` file.

4.  And define a special variable, as in the example below:

    ``` scss
    $body-font-family: 'YOUR_FONT_NAME';
    ```

## How to change theme color scheme?

**Predefined color schemes**

-   To compile a template with one of the predefined color schemes, open
    the `src/scss/_custom-variables.scss` file.

-   Then find and uncomment one of the following lines:

    ``` scss
    //@import 'themes/theme-red/theme-variables';
    //@import 'themes/theme-blue/theme-variables';
    //@import 'themes/theme-green/theme-variables';
    //@import 'themes/theme-orange/theme-variables';
    //@import 'themes/theme-violet/theme-variables';
    ```

-   After that, you need to rebuild the template.

**Your own color scheme**

1.  Open the `src/scss/_custom-variables.scss` file.

2.  Find the code below:

    ``` scss
    // Change main theme color
    //$theme-scheme: (
    //    main:  #584d8c, // main theme color
    //    muted: #cdc8e5, // muted text color
    //);
    ```

3.  Uncomment these lines and replace the colors with the ones you need.

## How to remove/change copyright notice?

1.  Open the `src/components/footer/Footer.tsx` file.
2.  Find comments `{/* copyright */}` and `{/* copyright / end */}`,
    then replace code between them with your copyright.

## How to change layout and header variant?
1.  Open the `src/config.ts` file.

2.  Find the following code:

    ``` typescript
    const config: IConfig = {
        desktopHeaderVariant: 'spaceship/one',
        mobileHeaderVariant: 'one',
    };
    ```

3.  Then change the value of the `desktopHeaderVariant` and
    `mobileHeaderVariant` properties.

4.  Open the `src/pages/_app.tsx` file, then find and remove all unused
    header styles:

    ``` typescript
    import '../scss/style.header-spaceship-variant-one.scss';
    import '../scss/style.header-spaceship-variant-two.scss';
    import '../scss/style.header-spaceship-variant-three.scss';
    import '../scss/style.header-classic-variant-one.scss';
    import '../scss/style.header-classic-variant-two.scss';
    import '../scss/style.header-classic-variant-three.scss';
    import '../scss/style.header-classic-variant-four.scss';
    import '../scss/style.header-classic-variant-five.scss';
    import '../scss/style.mobile-header-variant-one.scss';
    import '../scss/style.mobile-header-variant-two.scss';
    ```

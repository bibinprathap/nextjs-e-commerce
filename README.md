

## Next.js Shopping Website
![alt nextjs-e-commerce-shoping-website](https://media-exp1.licdn.com/dms/image/C4E2DAQGwkKGYdH0BIA/profile-treasury-image-shrink_800_800/0/1609766935867?e=2147483647&v=beta&t=6DJeDzQ4QExqo8q4JpX5bsAWymz_wwuDOuu5PxOC9Q0) 
<p align="center"> 
<img alt="stars" title="stars" src="https://img.shields.io/github/stars/bibinprathap/nextjs-e-commerce" />
<img alt="issues" title="issues" src="https://img.shields.io/github/issues/bibinprathap/nextjs-e-commerce" />
<img alt="forks" title="forks" src="https://img.shields.io/github/forks/bibinprathap/nextjs-e-commerce" />
<img alt="stars" title="stars" src="https://img.shields.io/github/stars/bibinprathap/nextjs-e-commerce" />
<img alt="license" title="license" src="https://img.shields.io/github/license/bibinprathap/nextjs-e-commerce" />

    # Whatsapp [wa.me/917994671704](http://wa.me/917994671704) 

<a href="https://linkedin.com/in/bibin-prathap-4a34a489/">
<img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue">
</a>

</p>
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

## Flutter E Commerce Mobile App
    
<p align="center">
Mobile Application of this ecommerce application is developed using Flutter .Source code of this Flutter mobile app is available on https://github.com/bibinprathap/flutter-e-commerce-app
 </p>   
<p align="center">
<img src="https://cdn.rawgit.com/steverichey/google-play-badge-svg/master/img/fr_get.svg" width="50%">
</p>

https://play.google.com/store/apps/details?id=com.openflutter.openflutterecommerce
 
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
  <h1 class="docs-section__title">Third-Party Packages</h1>
 <p>This template uses third-party modules from the following packages:</p>
-   **React** ( [https://reactjs.org/][] )  
    A JavaScript library for building user interfaces

-   **Next.js** ( [https://nextjs.org/][] )  
    The React Framework for server side rendering.

-   **Next Redux Wrapper** (
    [https://github.com/kirill-konshin/next-redux-wrapper][] )  
    A HOC that brings Next.js and Redux together.

-   **React Hook Form** ( [https://react-hook-form.com/][] )  
    Performant, flexible and extensible forms with easy-to-use
    validation.

-   **React Input Range** (
    [https://github.com/davidchin/react-input-range][] )  
    React component for inputting numeric values within a range (range
    slider).

-   **React Intl** ( [https://www.npmjs.com/package/react-intl][] )  
    Internationalize React apps. This library provides React components
    and an API to format dates, numbers, and strings, including
    pluralization and handling translations.

-   **React Redux** ( [https://react-redux.js.org/][] )  
    Official React bindings for Redux.

-   **React Slick** ( [https://react-slick.neostack.com/][] )  
    React carousel component.

  [https://reactjs.org/]: https://reactjs.org/
  [https://nextjs.org/]: https://nextjs.org/
  [https://github.com/kirill-konshin/next-redux-wrapper]: https://github.com/kirill-konshin/next-redux-wrapper
  [https://react-hook-form.com/]: https://react-hook-form.com/
  [https://github.com/davidchin/react-input-range]: https://github.com/davidchin/react-input-range
  [https://www.npmjs.com/package/react-intl]: https://www.npmjs.com/package/react-intl
  [https://react-redux.js.org/]: https://react-redux.js.org/
  [https://react-slick.neostack.com/]: https://react-slick.neostack.com/
-   **React Toastify** ( [https://fkhadra.github.io/react-toastify/][]
    )  
    React notification made easy.

-   **Reactstrap** ( [https://reactstrap.github.io/][] )  
    Simple React Bootstrap 4 components.

  [https://fkhadra.github.io/react-toastify/]: https://fkhadra.github.io/react-toastify/
  [https://reactstrap.github.io/]: https://reactstrap.github.io/

  <p>The following libraries and frameworks are also used:</p>
-   **Bootstrap** ( [https://getbootstrap.com/][] )  
    Bootstrap is an open source toolkit for developing with HTML, CSS,
    and JS.

-   **Classnames** ( [https://github.com/JedWatson/classnames][] )  
    A simple javascript utility for conditionally joining classNames
    together.

-   **Redux** ( [https://redux.js.org/][] )  
    Predictable state container for JavaScript apps.

-   **Redux Thunk** ( [https://github.com/reduxjs/redux-thunk][] )  
    Thunk middleware for Redux.

-   **PhotoSwipe** ( [https://photoswipe.com/][] )  
    JavaScript gallery, no dependencies. Used on the product page.

-   **query-string** ( [https://github.com/sindresorhus/query-string][]
    )  
    Parse and stringify URL query strings.

  [https://getbootstrap.com/]: https://getbootstrap.com/
  [https://github.com/JedWatson/classnames]: https://github.com/JedWatson/classnames
  [https://redux.js.org/]: https://redux.js.org/
  [https://github.com/reduxjs/redux-thunk]: https://github.com/reduxjs/redux-thunk
  [https://photoswipe.com/]: https://photoswipe.com/
  [https://github.com/sindresorhus/query-string]: https://github.com/sindresorhus/query-string

      <h1 class="docs-section__title">SCSS Files</h1>

   <p>The directory with SCSS files contains the following files and subdirectories:</p>

``` text
scss/
    account/
    blocks/
    blog/
    common/
    components/
    filters/
    footer/
    header/
    mixins/
    mobile/
    pages/
    shop/
    themes/
    widgets/
    _bootstrap-variables.scss
    _constants.scss
    _custom.scss
    _custom-variables.scss
    _functions.scss
    _style.header.scss
    _style.mobile.scss
    _svg.scss
    _variables.scss
    bootstrap.scss
    index.scss
    style.header-classic-variant-five.scss
    style.header-classic-variant-four.scss
    style.header-classic-variant-one.scss
    style.header-classic-variant-three.scss
    style.header-classic-variant-two.scss
    style.header-spaceship-variant-one.scss
    style.header-spaceship-variant-three.scss
    style.header-spaceship-variant-two.scss
    style.mobile-header-variant-one.scss
    style.mobile-header-variant-two.scss
    style.scss
```
  <p>You can make changes to any of these files.</p>
 
  To make it easier for you in the future to upgrade the template to the
new version, we recommend (if possible) making changes only to
`_custom-variables.scss` and `_custom.scss` files.
-   `_custom-variables.scss` - It is used to override the values of
    variables.
-   `_custom.scss` - Use to write your own scss code.

## How does LTR/RTL support work?

The direction is controlled using two scss variables:

-   `$direction` - indicates direction. Possible values: `ltr` or `rtl`.
-   `$both-directions` - if `true` compiles styles for two directions,
    the `$direction` variable will be ignored. Possible values: `true`
    or `false`.

Some "magic" variables are also used, which change their value depending
on the given direction value. The names of these variables are the same
as the names of the [Logical Properties][] (for example, variable
`$margin-inline-start`). These variables should only be used in the
`direction` mixin.

  [Logical Properties]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties
This example demonstrates how it works:

``` scss
.alert {
    @include direction {
        #{$margin-inline-start}: 20px;
    }
}
```

Will be compiled to:

-   If `$direction == ltr` and `$both-directions == false`:

    ``` css
    .alert {
        margin-left: 20px;
    }
    ```

-   If `$direction == rtl` and `$both-directions == false`:

    ``` css
    .alert {
        margin-right: 20px;
    }
    ```

-   If `$both-directions == true`:

    ``` css
    [dir=ltr] .alert {
        margin-left: 20px;
    }
    [dir=rtl] .alert {
        margin-right: 20px;
    }
    ```

### What if you want to use only one direction?

Open `src/scss/_custom-variables.scss`, and define next variables:

``` scss
$direction:       ltr;   // specify the direction you need (ltr or rtl)
$both-directions: false; // set to false to disable style compilation
                         // for two directions
```
 # Fonts

<div class="docs-typography">

We used two fonts in this template:

-   **Roboto** (Google Web Font:
    <https://fonts.google.com/specimen/Roboto> ) The main font used in
    the template.

-   **FontAwesome** ( <https://fontawesome.com/> ) Icon Font to display
    some icons in the template.

</div>
    # Translation

<div class="docs-typography">

The language configuration is in the `src/data/shopLanguages.ts` file.

Set the default language and an array of available languages:

``` typescript
const dataShopLanguages: ILanguage[] = [
    {
        locale: 'en',
        code: 'en',
        name: 'English',
        icon: '/images/languages/language-1.png',
        direction: 'ltr',
    },
    // ...
];

export const dataShopDefaultLocale = 'en';
```

## How to translate template?

1.  Go to `public/i18n/` directory.

2.  Then copy the `en.json` file and specify its name, for example
    `[LANGUAGE_LOCALE].json`.

3.  Open the copied file and translate all entries.

4.  Add a new language to the configuration.  
    `src/data/shopLanguages.ts`

    ``` typescript
    const dataShopLanguages: ILanguage[] = [
        {
            locale: 'en',
            code: 'en',
            name: 'English',
            icon: '/images/languages/language-1.png',
            direction: 'ltr',
        },
        {
            locale: LANGUAGE_LOCALE,
            code: LANGUAGE_CODE,
            name: LANGUAGE_NAME,
            icon: LANGUAGE_ICON, // path to the language icon
            direction: LANGUAGE_DIRECTION, // ltr or rtl
        },
    ];
    ```

## Where can I get flag icons?

You can get flag icons from the [https://github.com/gosquared/flags][]
repository.

The template uses a 24px (24.png) version of the icons.

</div>

  [https://github.com/gosquared/flags]: https://github.com/gosquared/flags/tree/master/src/flags

# Currencies

<div class="docs-typography">

Currency configuration is in the `src/data/shopCurrencies.ts` file.

Find the following piece of code and set the default currency and an
array of available currencies:

``` typescript
const dataShopCurrencies: ICurrency[] = [
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 1,
    },
    // ...
];

const dataShopDefaultCurrencyCode = 'USD';
```

</div>
# Changelog

<div class="docs-typography">

**Version 1.2.0** – May 1, 2022

-   Fixed: The provided \`href\` (/catalog/\[slug\]/products) value is
    missing query values (slug) to be interpolated properly;
-   Updated: Next.js from 10.2.0 to 11.1.2;
-   Updated: Other dependencies.

**Version 1.1.0** – january 5, 2022

-   Added: Support for cursor based navigation;
-   Fixed: range filter incorrectly rounds min and max values if they
    have the same value;
-   Fixed: Bug of displaying slides of a react-slick if the infinite
    property is true and the slides are not enough to fill the entire
    frame;
-   Updated: Next.js from 9.5.2 to 10.2.0;
-   Updated: React from 16.13.1 to 17.0.2;
-   Updated: react-hook-form from 6.13.1 to 7.4.0;
-   Updated: Other dependencies.

**Version 1.0.0** – September 2, 2021

-   Initial Release.

</div>

# Credits

<div class="docs-typography">

-   React (<https://reactjs.org/>)
-   Next.js (<https://nextjs.org/>)
-   Next Redux Wrapper
    (<https://github.com/kirill-konshin/next-redux-wrapper>)
-   React Hook Form (<https://react-hook-form.com/>)
-   React Input Range (<https://github.com/davidchin/react-input-range>)
-   React Intl (<https://www.npmjs.com/package/react-intl>)
-   React Redux (<https://react-redux.js.org/>)
-   React Slick (<https://react-slick.neostack.com/>)
-   React Toastify (<https://fkhadra.github.io/react-toastify/>)
-   Reactstrap (<https://reactstrap.github.io/>)
-   Bootstrap (<https://getbootstrap.com/>)
-   Classnames (<https://github.com/JedWatson/classnames>)
-   Redux (<https://redux.js.org/>)
-   Redux Thunk (<https://github.com/reduxjs/redux-thunk>)
-   PhotoSwipe (<https://photoswipe.com/>)
-   query-string (<https://github.com/sindresorhus/query-string>)
<a href="https://experttutorshub.com" target="_blank"> experttutorshub.com </a> 
</div>

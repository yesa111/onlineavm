# KS BootShop - Shopify Theme
Free Shopify theme powered by the Bootstrap framework (v5), developed respecting <a rel="nofollow" href="https://shopify.dev/tutorials/review-theme-store-requirements">Shopify theme requirements</a>, accessibility best practices, and of course our own experience developing high-quality themes for more than 15 years. We aim to make this project the most complete, robust, and awesome Shopify Theme for the Bootstrap framework.&nbsp;&nbsp;

## Highlighted features:
* Advanced styling for each section (New)
* Powered by [Bootstrap framework](https://getbootstrap.com/) (v5)
* Developed respecting [Shopify themes requirements](https://shopify.dev/tutorials/review-theme-store-requirements)
* All elements are fully accessible with [aria attributes](https://www.w3.org/WAI/standards-guidelines/aria/)
* No Javascript framework dependencies (e.g. jQuery)
* Support for [native image lazy-loading](https://web.dev/native-lazy-loading/)
* PageSeed score 96/100 [check results](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fks-bootshop.myshopify.com%2F&tab=desktop) 
* All Shopify required homepage sections (~20)
* All Shopify templates (cart, product, etc.) have their corresponding settings
* Product layout option grid or list
* Ajax add to cart
* Recommended products section [Learn more](https://shopify.dev/tutorials/develop-theme-recommended-products)

## Sections
* Announcement bar
* Card slider/list
* Contact form
* FAQ
* Featured collections
* Featured Products
* Hero carousel
* HTML
* Media with text
* Newsletter
* Richtext
* Separator 
* Testimonials

## Demo 
https://ks-bootshop.myshopify.com

## Download Theme
https://www.kondasoft.com/collections/shopify-themes/products/ks-bootshop

## Premium Shopify Themes 
Ready to take your Shopify store to the next level with  advanced features like:
- Cart upsells
- Cart goal
- Cart gift
- Shipping Calculator
- Quantity Breaks
- Combo cross-sells
- Wishlist
- Recently viewed
- Megamenu
- Color swatches
- Quick view
- Inventory bar
- and much more 

Browse all themes: https://www.kondasoft.com/collections/shopify-themes

## Video introduction
Click on the screenshot below to play the video on YouTube.

[<img src="https://img.youtube.com/vi/_G9IRSFAI_A/maxresdefault.jpg" width="50%">](https://youtu.be/_G9IRSFAI_A)

## Installation
**Note:** Please, make sure you are familiar with [Theme kit](https://shopify.github.io/themekit/), and official documentation before proceeding. We are assuming that at this point you have already installed the Theme Kit.

### 1- Clone this repository (download theme files)
Create a new folder on your computer, `cd` to it, and run the following command to copy all theme files from our GitHub repository master branch. Note: Include the dot at the end of the command to clone into your current directory.

`git clone https://github.com/kondasoft/ks-bootshop .`

### 2- Create and configure theme with Theme Kit
Run the following command to create a new theme in your Shopify store along with our theme files that you have just downloaded:

`theme new --password=[your-api-password] --store=[your-store.myshopify.com] --name="ks-bootshop-v3"`

Optional: Run this command to open your Shopify store with our theme in preview mode.

`theme open`

## Customization
Please don't directly modify theme files as you will lose any changes when you upgrade our theme. The recommended way to handle this is by creating a copy of our theme and then modifying it. Please follow this [official tutorial](https://help.shopify.com/en/manual/online-store/legacy/using-themes/managing-themes/duplicating-themes) to learn more. 

Also, we have provided 2 blank files (`custom.css` and `custom.js`) which are inside the `assets` folder. It is recommended that you use these 2 files to add your styles and scripts since they will not be changed during the upgrade.

### Modifying styles (SCSS)
We have provided only a few additional styles for this Shopify theme, and all of those are done via plain CSS in the `assets` folder. Our goal for this theme is to provide a solid foundation, completely backed by the Bootstrap framework, so that you can easily get it going with the framework you already know and love. 

All bootstrap-related styles and variables are in the `src/bootstrap.scss` file. Assuming that you already know how to work with [Bootstrap variables](https://getbootstrap.com/docs/5.1/customize/overview/), feel free to modify this file, especially the color variables at the top of the file.

After that, install all the needed npm packages that are already defined in the `packages.json` file
`npm install`

Now, you can compile the `bootstrap.scss` file that you have just modified using the following command:
`npm run bs-css` or `npm run watch` (to continuously watch for changes)

To deploy your changes on your Shopify store run the following Theme Kit command:
`theme deploy` or: `theme watch`

## Support
Please submit a [new issue](https://github.com/kondasoft/ks-bootshop/issues/new) in case you want to submit a bug or feature request. Additionally, you may visit our [website](https://www.kondasoft.com/) for further help.

## Copyright and license
Copyright 2022 [kondasoft.com](https://www.kondasoft.com). Code released under the [MIT License](https://github.com/kondasoft/ks-bootshop/blob/master/LICENSE).

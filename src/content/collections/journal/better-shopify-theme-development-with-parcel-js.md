---
title: Better Shopify Theme Development With Parcel JS
handle: better-shopify-theme-development-with-parcel-js
category: development
description: How to use Parcel as a lightweight alternative to Slate to improve your Shopify themes development workflow when working on existing themes.
date: June 01 2018
featuredImage:
  src: /journal-assets/parcel-shopify/featured.jpg
  width: 1404
  height: 701
  alt: Parcel And Shopify
image:
  src: /journal-assets/parcel-shopify/listing.jpg
  width: 500
  height: 500
  alt: Parcel And Shopify
medium: https://medium.com/@danwebb/better-shopify-theme-development-with-parcel-js-704f17f367fc
related:
  - effortless-animation-with-react-16-3-and-popmotion-pose
---

[Shopify's slate](https://github.com/Shopify/slate), especially the new v1 release, is a great tool to improve the Shopify theme development workflow. For me one of the core benefits is getting to use new language features and organise JS code into different folders with [ES6 imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

Slate comes with a load more features out the box like a local development server, organising SVG's into snippet includes and code splitting using [template and layout bundles](https://github.com/Shopify/slate/wiki/Template-and-layout-bundles). This is great for building out **new** theme's and keeping all the code organised and efficiently optimised. However, a consistent way of converting an **existing** theme into Slate v1 [currently isn't provided](https://github.com/Shopify/slate/issues/542) and even when it eventually is, it's likely to take manual effort and heavily change the structure of the theme's files to get it to work.

If you're like me you won't intend to go back to trying to organise your code in single monolithic theme JS files using old language features. But if you're just making some edits to an existing theme and are only looking to use new JS language features and imports then Slate may be a bit overkill...Enter [Parcel](https://parceljs.org/).

## Setting Up

[Parcel](https://parceljs.org/) can be used as a lightweight alternative to Slate which can be set up in no time with zero configuration to handle bundling of your theme's JS files. We just need to install parcel and set up our files locally using the steps provided below.  

### 1: Install Parcel

Presuming you have [Node JS](https://nodejs.org/en/) installed you can easily install Parcel by running the following NPM command:
```
npm install -g parcel-bundler
```
![Installing Parcel](/journal-assets/parcel-shopify/install-parcel.gif)

### 2: Install Theme kit

We will also need to install [Theme kit](https://shopify.github.io/themekit/), this is what Slate uses under the hood to sync updates between the theme on Shopify and your local code. The command line interface it provides is just as easy to use. Follow the installation instructions on the site or if you're on mac and lazy you can use the following curl command to get it installed:
```
curl -s https://raw.githubusercontent.com/Shopify/themekit/master/scripts/install | sudo python
```
![Intalling Theme Kit](/journal-assets/parcel-shopify/install-themekit.gif)

### 3: Download The Theme

You may have noticed Theme kit requires a configuration including the [setup of a private app](https://shopify.github.io/themekit/#get-api-access) so that it can gain the necessary access to modify the themes files. Once you've followed the instructions to set up the private app on the store and created a folder somewhere locally to store your theme files you can run the following commands to pull down the files.
```
theme configure --password=[your-password] --store=[you-store.myshopify.com] --themeid=[your-theme-id]
theme download
```
![Downloading A Theme](/journal-assets/parcel-shopify/theme-download.gif)

**You should use a development theme id here to avoid making unwanted changes to a theme that might be live.**

## Using Parcel

Now we're ready to start using Parcel! Let's start with a basic example to get an idea of how this is going to work. Create a scripts folder in the root of your local theme folder and add an scripts.js file inside it containing the following line of JS:
```
console.log('Parcel!');
```
![A First Bundle](/journal-assets/parcel-shopify/parcel-log.gif)

Now to get our code uploading to the theme we need to make parcel bundle our code and chuck it out into the assets folder, then we need theme kit to pick up the changes to the asset folder and push them up to the theme. Luckily, Parcel makes this is a lot simpler than it may sound, it just requires a few commands run in separate terminal windows:
```
npm init -y # Creates a package.json file for NPM dependencies
theme watch # Auto sync file changes to our theme
# Then in a separate terminal window to bundle our JS upon changing files
parcel watch scripts/scripts.js --out-dir assets --out-file scripts.js  
```
The final step is to include the new JS file in the theme. Somewhere in the `&lt;head&gt;` of your layout/theme.liquid add the following line:
```
{{ 'scripts.js' | asset_url | script_tag }}
```
Open the theme and check the console, it should show "Parcel!" which means our JS is bundling correctly 🎉

<video src="/journal-assets/parcel-shopify/theme-upload.mp4" width="620" controls="controls">
<div class="caption">Too big for a gif 😅</div>

Have a go at changing the `console.log` text to something different, parcel will automatically re-bundle the JS when you save which in turn causes theme kit to push the updated file up to the theme.

## Integrating The Existing Theme Code

OK, so we've successfully got Parcel bundling the code. Now let's include the existing theme files in our bundle so we ideally end up with just the one JS file that our theme needs to load in. Start by creating a folder under the scripts directory to add the old theme files too, I'm going to call it "core" so `/scripts/core`.

Find the old theme JS files in the assets folder, you may also identify them by checking the `layout/theme.liquid` file to see which scripts are included. Move any of the scripts you find into `/scripts/core` and remove the script includes from `/layout/theme.liquid`.

Now import the core files in your `scripts.js` file like: `import './core/core-file'`, make sure you maintain the order the files where previously included in. I'm using the "debut" theme, your theme will likely have different files but the process should still look something like this:

![Importing Theme Files](/journal-assets/parcel-shopify/imports.gif)

If you check back in the console you might come across some undefined variable errors 😩, don't panic. This will be because the theme contained some libraries that export themselves as modules instead of global variables if the libraries detect you're now using an environment that supports exports. There are a few ways you can deal with this...

1. The "correct" but time consuming way: Split the libraries out and import them individually, maybe moving some dependencies like JQuery to be managed with NPM.
2. The quick but risky way: Remove the exports code condition from the libraries source code so it forces the lib to be included as a global.
3. The quick and safe but less optimised way: Leave the file with the imported libraries as a separate script include in layout/theme.liquid

You're probably on a tight deadline and besides, setting up parcel was supposed to be quick and easy, wasn't it? Even if we do need to leave the third party libraries as a separate script include for now it's still better than going back monolithic theme JS files using old language features, so let's go with route #3. In the debut theme the file called `vendor.js` contains all these types of libs so I'm just going to move this file back into the theme for now.

![Handling External Libs](/journal-assets/parcel-shopify/external-libs.gif)

We now have Parcel bundling the old theme code alongside our new `console.log` without errors, you could call it a day here if you're happy with the changes and ready to push to production you can stop the watch task, add a live environment to the theme kit `config.yml` and use:
```
parcel build scripts/theme.js --out-dir assets --out-file theme.js
theme replace -e=live assets/theme.js layout/theme.liquid
```
The `parcel build` command will minify the code into an optimised production ready bundle you can use in the live theme. The `parcel watch` task doesn't include this minification because it makes bundling and debugging errors faster while developing.

## Improving The Workflow

Writing out these long parcel commands all the time is becoming a chore, let's create a shortcut using NPM scripts in our `package.json` to handle watching and building the JS bundle for us:
```
"scripts": {
	"watch": "concurrently \"theme watch\" \"parcel watch scripts/scripts.js --out-dir assets --out-file scripts.js\"",
	"build": "parcel build scripts/scripts.js --out-dir assets --out-file scripts.js"
}
```
The watch command uses [concurrently](https://www.npmjs.com/package/concurrently) so we don't have to run both `theme watch` and `parcel watch` separately. Concurrently is an NPM module so we will have to install it as a development dependency using:
```
npm i -D concurrently
```
From here on we can start watching for changes and automatically upload to our development theme using `npm run watch`:

![NPM Scripts](/journal-assets/parcel-shopify/npm-scripts.gif)

## Create Better Code

Awesome, now let's see how we might go about adding something a little more complicated to our theme than a `console.log`. The debut theme has an OK search page...But wouldn't it be cooler if the page didn't have to reload every time a new search was made?

![Standard Search](/journal-assets/parcel-shopify/search.gif)

It certainly would, it'd be even better if the results changed as you type in the search term, let's quickly add a new search module to handle a basic implementation of that.

I'm going to be running through this implementation fairly quickly, more to demonstrate the benefits of using Parcel than describing how to build the feature itself, but write a comment on [Medium](https://medium.com/@danwebb/better-shopify-theme-development-with-parcel-js-704f17f367fc) if you have any questions about it.

The feature is going to be built using new JS language features that may not be available in all browsers, so I'm going to install babel to compile the JS back to versions all browsers can use, firstly babel will need to be installed:
```
npm i -D babel-core babel-polyfill babel-preset-env
```

Then a `.babelrc` file in the theme directory added to tell parcel which babel preset to use:
```
{
  "presets": ["env"]
}
```

I'm then going to add `import 'babel-polyfill';` at the top of `scripts.js` to be able to use  new language features like [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Parcel will automatically use babel so just by taking these few steps we can now safely use all the new JS language features we want to 💅.

Next I'm going to add two files `/templates/search.json.liquid` to provide a URL where we can get the search results in JSON format:
```
{% layout none %}
{% paginate search.results by 99 %}
{% capture results %}
  {% for item in search.results %}
    {
      "title": {{ item.title | highlight: search.terms | json }},
			"url": {{ item.url | within: item.collections.last | json }},
			"price": {{ item.price | json }},
			"featured_image": {{ item.featured_image.src | json }}
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
{% endcapture %}
{
  "count": {{ search.results_count }},
  "results": [{{ results }}]
}
{% endpaginate %}
```
And `/scripts/search.js` to handle updating the search results while the customer is typing in the search box:
```
const getResults = query => $.getJSON(`/search?view=json&q=${query}`);

const generateItemHtml = item => `
	<li class="list-view-item">
		<a href="${item.url}" class="list-view-item__link">
			<div class="list-view-item__image-column">
				<div class="list-view-item__image-wrapper">
					<img class="list-view-item__image" src="${item.featured_image}">
				</div>
			</div>

			<div class="list-view-item__title-column">
				<div class="list-view-item__title">${item.title}</div>
			</div>

			<div class="list-view-item__price-column">
				<div class="product-price">
					<span class="product-price__price">${item.price}</span>
				</div>
			</div>
		</a>
	</li>
`;

const updateSearchText = (query, count) => $('h1').html(`
	<span class="visuallyhidden">Search result:</span>
	${count} results for "${query}"
`);

const search = async e => {
	const query = e.target.value;
	const {results, count} = await getResults(query);
	const html = results.map(generateItemHtml).join('');
	$('.list-view-items').empty().append(html);
	updateSearchText(query, count);
}

export default () => $(() => $('#SearchInput').keyup(search));
```
Great, now all that's left is to include the new search module in our `/scripts/scripts.js` to make sure parcel adds it to the JS bundle:
```
import 'babel-polyfill';
import './core/lazysizes';
import './core/theme.js';
import search from './search';

if (window.location.pathname === '/search') {
	search();
}
```
Here's the result, much better 😊

![Dynamic Search](/journal-assets/parcel-shopify/dynamic-search.gif)

Hold up! Just one last thing...The formatting of the price looks off. Thinking about this problem, it's very likely at some point we will need to use JS to format prices elsewhere on the site. Rather than creating a solution specific to the search module let's create a re-usable utility function for formatting any money amounts under `/scripts/utils/format-money.js`
```
const formatMoney = amount => {
	const roundNumber = (num, dec) => Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);

	if (amount) {
		// Make sure "amount" is in cents
		if (String(amount).indexOf('.') > -1) {
			amount = Number(amount) * 100;
		}
		amount = (amount / 100).toFixed(2);
	} else {
		amount = 0.00;
	}

	return `$${amount}`;
};

export default formatMoney;
```
Now the `formatMoney` function can be imported and used anywhere in our code, `import` it into `/scripts/search.js` and pass in the items price while generating the html like so:
```
import formatMoney from './utils/format-money';

const getResults = query => $.getJSON(`/search?view=json&q=${query}`);

const generateItemHtml = item => `
	<li class="list-view-item">
		<a href="${item.url}" class="list-view-item__link">
			<div class="list-view-item__image-column">
				<div class="list-view-item__image-wrapper">
					<img class="list-view-item__image" src="${item.featured_image}">
				</div>
			</div>

			<div class="list-view-item__title-column">
				<div class="list-view-item__title">${item.title}</div>
			</div>

			<div class="list-view-item__price-column">
				<div class="product-price">
					<span class="product-price__price">${formatMoney(item.price)}</span>
				</div>
			</div>
		</a>
	</li>
`;

const updateSearchText = (query, count) => $('h1').html(`
	<span class="visuallyhidden">Search result:</span>
	${count} results for "${query}"
`);

const search = async e => {
	const query = e.target.value;
	const {results, count} = await getResults(query);
	const html = results.map(generateItemHtml).join('');
	$('.list-view-items').empty().append(html);
	updateSearchText(query, count);
}

export default () => $(() => $('#SearchInput').keyup(search));
```
Finally we now have dynamically displaying search results with correctly formatted prices 🎉

![Formatted Prices](/journal-assets/parcel-shopify/formatted-prices.gif)

## Conclusion

This post has been focussed on bundling Shopify theme JS files with Parcel as a lightweight alternative to Slate which can be integrated with existing themes. Hopefully this can help improve your development experience and efficiency while developing Shopify themes as well as the overall code quality and organisation whilst minimising the time impact of getting set up.

If you'd like to take your use of Parcel a step further take a look over it's [documentation](https://parceljs.org/getting_started.html), like Slate, Parcel also makes it possible to compile [SCSS](https://parceljs.org/assets.html#scss) and has built in support for [code splitting](https://parceljs.org/code_splitting.html).

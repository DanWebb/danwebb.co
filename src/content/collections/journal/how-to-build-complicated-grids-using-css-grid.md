---
title: How to build complicated grids using CSS grid
handle: how-to-build-complicated-grids-using-css-grid
category: development
description: A real world example showing how I created an unconventional homepage grid layout from a provided design using CSS grid.
date: June 30 2018
featuredImage:
  src: /journal-assets/css-grid/wl-grid.jpg
  width: 1404
  height: 701
  alt: Wanderlust Life's featured collections
image:
  src: /journal-assets/css-grid/wl-grid-small.jpg
  width: 500
  height: 500
  alt: Wanderlust Life's featured collections
medium: https://medium.com/@danwebb/how-to-build-complicated-grids-using-css-grid-609b1197cf75
related:
  - effortless-animation-with-react-16-3-and-popmotion-pose
  - better-shopify-theme-development-with-parcel-js
---

<div class="caption">
  The end goal, designed by Jennie Lewis from [Sunside Studio](http://www.hellosunside.com/).
</div>

Once upon a time, I might have had to begrudgingly tell a designer this type of layout wouldn't work well on a responsive web page which needs to function across a range of screen sizes, but not anymore!

With CSS grid now available in all popular browsers it's possible to reliably define the rows and columns that make up any kind of grid, I'm pretty excited about this and you should be too. In this article I'm going to detail how I achieved the designed layout using CSS grid without any silly workarounds or javascript magic necessary.

## Defining The Grid

The first step in building any grid should be to work out the grid measurements, in other words - defining the grids columns and rows. Here's a quick annotation I did on top of the designs to visualise the grid that needed to be achieved.

![Grid Visualisation](/journal-assets/css-grid/grid-visualisation.jpg)
<div class="caption">The complicated grid visualised</div>

This looks a bit complicated and it is time for some math! But don't sweat it 😅, all I've really done is add lines where each element starts / finishes and the math should be easy to work out.

### Columns

Taking the first column as example here is what the calculation will look like:

Total width of design = `1290px`

Total column width = `54px`

54 of 1290 as a percentage = `54/1290*100` = `4.186046512%`

So the first column on the left takes up 4.186046512% of the total width. This calculation can be repeated for the remaining columns until we have a list of percentages, in this case 9 percentages because we have 9 columns. Adding the 9 percentages together will hopefully add up to ~100%.

### Rows

There are two types of rows in the grid, "responsive rows" that will need to change in height responsively based on the height of the elements contained in the row and "separating rows" that we will use to define where elements start/end.

Defining the grids rows is easier than the columns. For the responsive rows luckily CSS grid provides an "auto" value which will achieve the exact result we're after. For the separating rows in this case it's possible to simply provide fixed pixel heights based on the provided design.

![Row types](/journal-assets/css-grid/separating-vs-responsive-rows.jpg)
<div class="caption">
  Separating = fixed height, Responsive = auto height based on elements the row contains
</div>

## Building the grid and placing the elements

Now that the grid rows and columns are defined the values can be translated directly into CSS, here's what it might look like:

```
.grid {
  display: grid;
  grid-template-columns: 4.06504065% 12.814556717% 18.81533101% 13.008130081% 2.322880372% 8.439798684% 8.594657375% 23.228803717% 8.713372048%;
  grid-template-rows: 157px auto 57px auto 73px 170px auto;
}
```

This will give us a responsive grid to work with that has defined rows and columns exactly where they're needed, now all that's left is to place each of the child elements at the correct locations on the grid.

This grid is laid out to contain a max of 6 uniquely positioned elements, to place each element within a specific column and row the `grid-column-start`, `grid-column-end` and `grid-row-start` properties can be used. The property names are pretty self explanatory, it just takes working out the correct column/row number to provide for each element.

While doing this it really helps to be able to visualise the grid, I used the diagram I manually created to do this, alternatively Chrome and Firefox now have grid development tools built in, these might help with defining which elements should sit where. Just open inspect element and select the grid element to have the grid lines display as an overlay within the browser.

![Chrome Grid Tools](/journal-assets/css-grid/chrome-grid-tools.jpg)
<div class="caption">Chrome developer grid tools are pretty neat</div>

Let's take the first grid element in the top left. It starts at the 1st column / 2nd row and ends at the 5th column, as shown in the diagram below.

![First Grid Element](/journal-assets/css-grid/our-first-grid-element.jpg)

This can be defined in CSS by using a selector that targets the first grid element and specifying the grid column and row start/end values:

```
.grid-element:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
}
```

If no grid-column-end/grid-row-end is declared, the element will default to spanning one row or column. So in this example only the grid-row-start needs to be specified as 2 for the grid element to span the second row only.

Once all the grid element placements are defined there should be a complete list of grid element with co-ordinates like so:

```
.grid {
  display: grid;
  grid-template-columns: 4.06504065% 12.814556717% 18.81533101% 13.008130081% 2.322880372% 8.439798684% 8.594657375% 23.228803717% 8.713372048%;
  grid-template-rows: 157px auto 57px auto 73px 170px auto;
}

.grid-element:nth-child(1) {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
}
  
.grid-element:nth-child(2) {
  grid-column-start: 7;
  grid-column-end: 9;
}
  
.grid-element:nth-child(3) {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 4;
}
  
.grid-element:nth-child(4) {
  grid-column-start: 8;
  grid-column-end: 10;
  grid-row-start: 4;
}

.grid-element:nth-child(5) {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 7;
}
  
.grid-element:nth-child(6) {
  grid-column-start: 6;
  grid-column-end: 10;
  grid-row-start: 6;
}
```

To handle the mobile view it's easy to change any of the grid values per breakpoint, in this case the grid isn't needed on mobile as all the elements go full width. So the grid code can be wrapped in a min-width breakpoint then it will never be used on mobile:

```
@media (min-width: 720px) {
  /* Grid code here... */
} 
```

## Wrapping Up

![The Result](/journal-assets/css-grid/wanderlust-grid-result.gif)
<div class="caption">
  See the grid in action and browse some minimalist travel inspired jewellery over at https://wanderlustlife.co.uk/
</div>

The final result is a reliable grid that responds well to changes in screen width, matches the original vision portrayed in the designs and is easy to make adjustments to in the future without a line of Javascript. Everyones happy.
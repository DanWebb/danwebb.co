---
title: Effortless animation with React 16.3+ and Popmotion Pose
handle: effortless-animation-with-react-16-3-and-popmotion-pose
category: development
description: How Popmotion Pose can be used with React via react-pose to effortlessly build animations with React that look great.
date: May 20 2018
image:
  src: /journal-assets/popmotion/featured.jpg
  width: 500
  height: 500
  alt: Custom Animation
medium: https://itnext.io/effortless-animation-with-react-16-3-and-popmotion-pose-674dac34b3c1
related:
  - better-shopify-theme-development-with-parcel-js
  - how-to-build-complicated-grids-using-css-grid
---

[Popmotion Pose](https://popmotion.io/pose/) is described as a "Declarative motion system for HTML, SVG, React & React Native", it builds upon the author Matt Perry's work on [Popmotion](https://popmotion.io/) to expose a simpler way to declare animations. In this article we're going to look at how it can be used with React via [react-pose](https://www.npmjs.com/package/react-pose) to effortlessly build animations with React that look great.

Rather than providing independent examples I'm going to start from scratch taking you through how to add advanced custom animations to an actual React project.

**This article presumes basic knowledge of using the command line and creating React apps.**

## Get Started

If you want to follow along make sure you have NodeJS and NPM 5.2+ installed, the `npx` command we're going to use comes with NPM version 5.2+.

We're going to use [create react app](https://github.com/facebook/create-react-app) to quickly get up and running with all the build configuration handled for us, open terminal and `cd` to a folder you want to create your app in then run:

```
npx create-react-app react-animations
cd react-animations
npm start
```

Your default browser should open up [http://localhost:3000/](http://localhost:3000/) automatically where our app will now be running.

## A Basic Animation

![Animated Box](/journal-assets/popmotion/box.gif)

We will need to start by installing react-pose which is distributed as an [NPM module](https://www.npmjs.com/package/react-pose) I'm also going to install [styled components](https://www.styled-components.com/) to add custom styles to the animated elements. You don't need to use Styled components for css but it works great with React Pose as their API is similar. Go back to the terminal and run:

```
npm install react-pose styled-components --save
```

Open the react-animations project folder in your favourite text editor and create a new file within the /src directory named Box.js, this is where we will create our first animated element. We'll need to start by importing react pose and styled components at the top of the file like so:

```
import posed from "react-pose";
import styled from "styled-components";
```

Now the posed and styled variables are in scope let's create the Box component, keeping it simple to start off...

```    
const Box = styled(posed.div({
  top: {y: 50},
  bottom: {y: 300}
}))`
  background-color: #f9415d;
  position: absolute;

  ${props => `
    height: ${props.size}px;
    width: ${props.size}px;
    left: calc(50% - ${props.size / 2}px);
  `}
`;

export default Box;
```

This is probably confusing at first glance because it looks a bit different to normal Javascript code especially if you've never used styled components before so let's separate it out and inspect each part individually.

```
styled(posed.div({
  top: {y: 50},
  bottom: {y: 300}
}))`
```

Here we're defining a new posed component which will get styled. `posed.div()` creates a new React component which is a `div` and then we wrap the `div` in the `styled()` function which can take any [React component as it's argument](https://www.styled-components.com/docs/api#styled).

The options argument passed in to `posed.div({options})` defines an animation,  with a "top" and "bottom" state. From the property values of "top" and "bottom" you might guess the box is going to move on the y axis from 50 to 300.

**The property names "top" and "bottom" aren't important, they could be set to anything it is just a name to reference the animation state.**

```
}))`
  background-color: #f9415d;
  position: absolute;

  ${props => `
    height: ${props.size}px;
    width: ${props.size}px;
    left: calc(50% - ${props.size / 2}px);
  `}
`;
```

This is our CSS styles for the box, styled components allows props to be passed in and used within the CSS, we are using one size prop in our styles to define how large the box will be. This is a CSS string written in JavaScript, if it still looks weird you might need to look up JS [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) as they're still reasonably new language features.

Now we just need to change the /src/App.js file to include our Box component defining the size and pose props, the pose prop should be equal to one of the property names defined in our animation config, in this case "top" or "bottom":

```
import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  render() {
    return <Box size={100} pose="top"/>;
  }
}

export default App;
```

Open up [http://localhost](http://localhost):3000 to see the result...

![Basic Animation](/journal-assets/popmotion/simple-animated-box.gif)

I'm using the [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) chrome extension here to swap out the elements pose prop between the "top" and "bottom" animation state.

This is what's meant by the title of this article, the animation is *effortless* because we never have to define, configure or fine tune any animation. All we've defined is a start and end position for the box and Popmotion pose has handled animating between the two points for us. As [the docs](https://popmotion.io/pose/learn/popmotion-get-started/) state Popmotion will...

> Automatically select a Popmotion animation based on the property being animated:
- translate and rotate props use a [slighty-bouncy spring](https://popmotion.io/api/spring/).
- scale props use a [tight spring](https://popmotion.io/api/spring/).
- All other props use a [tween](https://popmotion.io/api/tween/).

## Adding Interactivity

The y axis isn't the only thing we can animate, go ahead and try adding more style attributes to automatically animate between, here's an example with more style attributes:

```
const Box = styled(posed.div({
  top: {y: 50, scale: 1, backgroundColor: '#f9415d', opacity: 1},
  bottom: {y: 300, scale: 1.5, backgroundColor: '#fcab10', opacity: 0.5}
}))`
```

While we're at it, let's also change the pose prop to be based on a mouse enter event in /src/App.js. This is an important step as real users aren't going to be swapping props out using react developer tools!

```
import React, { Component } from 'react';
import Box from './Box';

class App extends Component {
  state = {pose: 'top'}

  handleMouseEnter = () => this.setState({
    pose: this.state.pose === 'top' ? 'bottom' : 'top'
  })

  render() {
    return <Box
      size={100}
      pose={this.state.pose}
      onMouseEnter={this.handleMouseEnter}
    />;
  }
}

export default App;
```

All we're doing here is toggling between the two animation states "top" and "bottom" on the mouse enter event, instead of statically passing in the pose prop it's now based on `this.state.pose`.

Here's the result...

![Interactive Animation](/journal-assets/popmotion/interactive-animation.gif)

## Create Something Great

Go mental, combining the powerful re-usability of React components we can create effortlessly re-usable and compossible groups of individually animated elements.

![More Animations](/journal-assets/popmotion/go-mental.gif)

See [this repo](https://github.com/DanWebb/react-popmotion-animation-example) for the full code behind this example.

But of course we're only scratching the surface, animations defined with Popmotion pose don't need to be individual or even need to use the default animations, it's possible to:

- Orchestrate groups of animations based on [child and parent elements](https://popmotion.io/pose/learn/animating-children/) or [linked passive values](https://popmotion.io/pose/learn/passive/)
- Define your own [custom animations](https://popmotion.io/pose/learn/custom-transitions/)
- Effortlessly add animated [draggable elements](https://popmotion.io/pose/learn/dragging/)
- [And more](https://popmotion.io/pose/api/)

For some more ideas check out some of the animations on my websites homepage [https://danwebb.co/](https://danwebb.co/), see this [post by João Miguel Cunha](https://medium.com/@joomiguelcunha/amazing-react-animation-with-react-pose-3b67d9eb6e07) that goes through some more advanced individual examples or take a look at some the examples on the [Popmotion Pose website](https://popmotion.io/pose/).

## Conclusion

Popmotion Pose makes it effortless to define slick looking complex animations, it becomes easy to take for granted how much complexity under the hood it's handling for us, instead of spending countless hours fine tuning animations we can now focus on building out animated UI efficiently with concise, maintainable code.

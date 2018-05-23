import React from 'react';
import {string} from 'prop-types';
import {Head} from 'react-static';

const Meta = ({title}) => (
	<Head>
		<meta name="title" content={title ? title : 'danwebb'}/>
		<meta name="description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>
		<meta itemProp="name" content="danwebb"/>
		<meta itemProp="url" content="https://danwebb.co"/>
		<meta itemProp="image" content="https://danwebb.co/fb-logo.png"/>
		<meta itemProp="thumbnailUrl" content="https://danwebb.co/square-logo.png"/>
		<link rel="image_src" href="https://danwebb.co/fb-logo.png"/>

		<meta property="og:site_name" content="danwebb.co"/>
		<meta property="og:title" content="danwebb"/>
		<meta property="og:url" content="https://danwebb.co"/>
		<meta property="og:type" content="website"/>
		<meta property="og:description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>
		<meta property="og:image" content="https://danwebb.co/fb-logo.png"/>
		<meta property="og:image:width" content="1200"/>
		<meta property="og:image:height" content="630"/>

		<meta name="twitter:title" content="danwebb"/>
		<meta name="twitter:creator" content="@danwebbbb"/>
		<meta name="twitter:image" content="https://danwebb.co/square-logo.png"/>
		<meta name="twitter:url" content="https://danwebb.co"/>
		<meta name="twitter:card" content="summary"/>
		<meta name="twitter:description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>
	</Head>
);

Meta.propTypes = {
	title: string
};

Meta.defaultProps = {
	title: ''
};

export default Meta;

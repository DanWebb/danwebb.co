import React from 'react';
import {any, node, object} from 'prop-types';

const Document = ({Html, Head, Body, children, renderMeta}) => (
	<Html>
		<Head>
			<meta charSet="UTF-8"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>

			<title>danwebb</title>
			<meta name="description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>
			<meta itemProp="name" content="danwebb"/>
			<meta itemProp="url" content="https://danwebb.co"/>
			<meta itemProp="image" content="https://danwebb.co/fb-logo.png"/>
			<meta itemProp="thumbnailUrl" content="https://danwebb.co/square-logo.png"/>
			<link rel="image_src" href="https://danwebb.co/fb-logo.png"/>

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f9415d"/>
			<meta name="msapplication-TileColor" content="#f9415d"/>
			<meta name="theme-color" content="#f9415d"/>

			<meta property="og:site_name" content="danwebb.co"/>
			<meta property="og:title" content="danwebb"/>
			<meta property="og:url" content="https://danwebb.co"/>
			<meta property="og:type" content="website"/>
			<meta property="og:description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>
			<meta property="og:image" content="https://danwebb.co/fb-logo.png"/>
			<meta property="og:image:width" content="1200"/>
			<meta property="og:image:height" content="630"/>

			<meta name="twitter:title" content="danwebb"/>
			<meta name="twitter:creator" content="@danwebbbb">
			<meta name="twitter:image" content="https://danwebb.co/square-logo.png"/>
			<meta name="twitter:url" content="https://danwebb.co"/>
			<meta name="twitter:card" content="summary"/>
			<meta name="twitter:description" content="Dan Webb - coder, thinker, maker, explorer. Create something great."/>

			{renderMeta.styleTags}
		</Head>
		<Body>
			{children}
		</Body>
	</Html>
);

Document.propTypes = {
	Html: any.isRequired,
	Head: any.isRequired,
	Body: any.isRequired,
	children: node.isRequired,
	renderMeta: object.isRequired
};

export default Document;

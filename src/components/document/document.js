import React from 'react';
import {any, node, object} from 'prop-types';
import gtag from '../../modules/gtag';

const Document = ({Html, Head, Body, children, renderMeta}) => (
	<Html>
		<Head>
			<meta charSet="UTF-8"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>

			<title>danwebb</title>

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f9415d"/>
			<meta name="msapplication-TileColor" content="#f9415d"/>
			<meta name="theme-color" content="#f9415d"/>

			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-116654469-1"/>
			<script dangerouslySetInnerHTML={{__html: gtag}}/>

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

import React from 'react';
import {any, node, object} from 'prop-types';
import {injectGlobal} from 'styled-components';
import {globalStyles} from '../../theme/theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	${globalStyles}
`;

const Document = ({Html, Head, Body, children, renderMeta}) => (
	<Html>
		<Head>
			<meta charSet="UTF-8"/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>

			<title>React Static - Website Starter</title>
			<meta name="description" content=""/>
			<meta itemProp="name" content=""/>
			<meta itemProp="url" content=""/>
			<meta itemProp="image" content=""/>
			<meta itemProp="thumbnailUrl" content=""/>
			<link rel="image_src" href=""/>

			<link rel="icon" type="image/x-icon" href=""/>

			<meta property="og:site_name" content=""/>
			<meta property="og:title" content=""/>
			<meta property="og:url" content=""/>
			<meta property="og:type" content=""/>
			<meta property="og:description" content=""/>
			<meta property="og:image" content=""/>
			<meta property="og:image:width" content=""/>
			<meta property="og:image:height" content=""/>

			<meta name="twitter:title" content=""/>
			<meta name="twitter:image" content=""/>
			<meta name="twitter:url" content=""/>
			<meta name="twitter:card" content="summary"/>
			<meta name="twitter:description" content=""/>

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

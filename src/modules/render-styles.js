import React from 'react';
import {ServerStyleSheet} from 'styled-components';

const renderStyles = (render, Comp, meta) => {
	const sheet = new ServerStyleSheet();
	const html = render(sheet.collectStyles(<Comp/>));
	meta.styleTags = sheet.getStyleElement();
	return html;
};

export default renderStyles;

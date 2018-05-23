import React from 'react';
import {node, string} from 'prop-types';
import PageWrap from '../elements/page-wrap';
import PageTitle from '../page-title/page-title';
import Text from '../elements/text';
import Layout from './layout';

const PageLayout = ({children, title}) => (
	<Layout title={title}>
		<PageWrap>
			<PageTitle>{title}</PageTitle>
			<Text>{children}</Text>
		</PageWrap>
	</Layout>
);

PageLayout.propTypes = {
	title: string.isRequired,
	children: node.isRequired
};

export default PageLayout;

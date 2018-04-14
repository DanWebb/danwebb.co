import React from 'react';
import {object} from 'prop-types';
import {withRouteData} from 'react-static';
import convert from 'htmr';
import PageLayout from '../components/layout/page-layout';

const Page = ({page}) => (
	<PageLayout title={page.title}>
		{convert(page.contents)}
	</PageLayout>
);

Page.propTypes = {
	page: object.isRequired
};

export default withRouteData(Page);

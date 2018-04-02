import React from 'react';
import {Link} from 'react-static';
import PageLayout from '../components/layout/page-layout';

const NotFound = () => (
	<PageLayout title="404">
		<p>
			The page you&apos;re looking for couldn&apos;t be found or doesn&apos;t exist yet, {' '}
			<Link to="/">Return to the homepage</Link> or see what I’m up to on {' '}
			<a href="https://twitter.com/danwebbbb" rel="noopener noreferrer" target="_blank">Twitter</a> and <a href="https://www.instagram.com/danwebbbbb/" rel="noopener noreferrer" target="_blank">Instagram</a>
		</p>
	</PageLayout>
);

export default NotFound;

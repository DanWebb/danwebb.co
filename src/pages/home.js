import React from 'react';
import Layout from '../components/layout/layout';
import Introduction from '../components/introduction/introduction';
import Project from '../components/project/project';
import rachaelHallLarge from '../../public/rachael-hall-large.jpg';
import rachaelHallSmall from '../../public/rachael-hall-small.jpg';

const Home = () => (
	<Layout>
		<Introduction/>
		<Project
			image={rachaelHallLarge}
			mobileImage={rachaelHallSmall}
			description={{
				title: 'Rachael Hall',
				spec: '/ website / blog / paid membership',
				content: 'Rachael is an advanced franklin method educator helping people access the body of their dreams. I developed a paid members only courses area through a custom registration process and Stripe integration as well as a bespoke sales website. Both are backed by Prismic CMS to flexibly and intuitivly manage all content from a single location.',
				visit: 'https://www.rachhall.com/',
				tools: [
					{name: 'react', description: '+ next.js for server side rendering'},
					{name: 'node', description: 'Custom REST API with express.js'},
					{name: 'prismic', description: 'Content slices allow entry of varied content'},
					{name: 'stripe', description: 'Recurring billing through Stripe subscriptions API'},
					{name: 'mongo', description: 'Databse storage with mongolab'}
				]
			}}
		/>
	</Layout>
);

export default Home;

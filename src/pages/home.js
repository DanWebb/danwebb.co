import React from 'react';
import Layout from '../components/layout/layout';
import Introduction from '../components/introduction/introduction';
import Project from '../components/project/project';
import Testimonial from '../components/testimonial/testimonial';

import rachaelHallLarge from '../../public/rachael-hall-large.jpg';
import rachaelHallSmall from '../../public/rachael-hall-small.jpg';
import sunsideStudio from '../../public/sunside-studio.png';

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
		<Testimonial author="Jennie Lewis" logo={sunsideStudio} url="http://www.hellosunside.com/">
			I&apos;ve worked with Dan on a number of projects now and without hesitation he is {' '}
			one of the suppliers I most enjoy working with. He takes all the stress out of projects {' '}
			for me - explains everything in a way which I understand and keeps the projects running far {' '}
			more smoothly than I could ever manage. His work is always faultless, he has incredible {' '}
			attention to detail and top communication skills. You can find many talented developers {' '}
			but the ones that are as organised and as pro-active as Dan are priceless. I don&apos;t {' '}
			know what I&apos;d do without him.
		</Testimonial>
	</Layout>
);

export default Home;

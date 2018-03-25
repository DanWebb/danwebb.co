import React from 'react';
import Layout from '../components/layout/layout';
import Introduction from '../components/introduction/introduction';
import Project from '../components/project/project';
import Testimonial from '../components/testimonial/testimonial';

import rachaelHallLarge from '../../public/rachael-hall-large.jpg';
import rachaelHallSmall from '../../public/rachael-hall-small.jpg';
import wanderlustLarge from '../../public/wanderlust-large.jpg';
import wanderlustSmall from '../../public/wanderlust-small.jpg';
import sunsideStudio from '../../public/sunside-studio.png';
import studio1850 from '../../public/studio-1850.png';

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
			I&apos;ve worked with Dan on a number of projects now and without hesitation he is one of the suppliers I most enjoy working with. He takes all the stress out of projects for me - explains everything in a way which I understand and keeps the projects running far more smoothly than I could ever manage. His work is always faultless, he has incredible attention to detail and top communication skills. You can find many talented developers but the ones that are as organised and as pro-active as Dan are priceless. I don&apos;t know what I&apos;d do without him.
		</Testimonial>
		<Project
			background="potPourri"
			image={wanderlustLarge}
			mobileImage={wanderlustSmall}
			description={{
				title: 'Wanderlust Life',
				spec: '/ ecommerce / blog',
				content: 'Wanderlust life sells minimalist travel inspired jewellery based in North Devon, UK (home!). I collaborated with the design talent at Sunside Studio to develop an ecommerce website and blog based on Shopify and backed by advanced Mailchimp API integrations to sell their beautiful creations.',
				visit: 'https://wanderlustlife.co.uk/',
				tools: [
					{name: 'shopify', description: '+ Shopify POS for store management and checkout'},
					{name: 'node', description: 'Connect Mailchimp + Shopify to send discounts based on birthdays'},
					{name: 'mailchimp', description: 'Mailing list signups + custom API integration'}
				]
			}}
			right
		/>
		<Testimonial author="Elaine Mitchell" logo={studio1850} url="https://studio1850.com/">
			Dan has been the most joyous web developer I&apos;ve ever had the pleasure to work with – my usual response to developer emails is opening them with eyes half hidden behind my hands, but each of his emails has left me with a huge smile. Nothing has been too much trouble, time is taken to graciously ensure everything is explained simply and in an easy to understand manner. Projects that once filled me with dread and ate into more than my budgeted time can now be elegantly managed, designed and built – I finally feel I can offer clients the websites they deserve, and in a stress free and profitable way.
			<br/><br/>
			Honestly, hire him, a thousand times over. I could not be more impressed and more thankful for his management, understanding, clarity, and of course his beautiful development skills.
		</Testimonial>
	</Layout>
);

export default Home;

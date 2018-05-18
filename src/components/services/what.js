import React from 'react';
import TwoColumns from '../elements/two-columns';
import Title from '../elements/underlined-title';
import Section from './section';
import Subtitle from './subtitle';
import List from './list';

const What = () => (
	<Section background="witchHaze">
		<div>
			<Title>What I do</Title>
			<TwoColumns>
				<div>
					<Subtitle>Explore</Subtitle>
					<List>
						<li>Ideas</li>
						<li>Research</li>
						<li>Planning</li>
						<li>Strategy</li>
						<li>Consultation</li>
						<li>Prototyping</li>
					</List>
				</div>

				<div>
					<Subtitle>Create</Subtitle>
					<List>
						<li>Shopify Themes & Apps</li>
						<li>Bespoke Websites</li>
						<li>Web & Mobile Applications</li>
						<li>API Integrations</li>
					</List>
				</div>
			</TwoColumns>
		</div>
	</Section>
);

export default What;

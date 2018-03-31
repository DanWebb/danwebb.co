import React from 'react';
import settings from '../../theme/settings';
import Button from '../button/button';
import Circle from './circle';
import Section from './section';
import Title from './title';
import Divider from './divider';
import Content from './content';

const Cta = () => (
	<Section>
		<div>
			<Circle/>
			<Title>Create something great</Title>
			<Divider/>
			<Content>Need a hand with something and think we’ll be a good match?</Content>
			<Button href={`mailto:${settings.email}`} background="white" color="red">
				Work with me
			</Button>
		</div>
	</Section>
);

export default Cta;

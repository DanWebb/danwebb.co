import React from 'react';
import Logo from '../logo/logo';
import Span from '../elements/span';
import Button from '../button/button';
import Section from './section';

const Introduction = () => (
	<Section>
		<Logo/>
		<p>
			I help people by creating great <Span color="red" weight="extraBold">WEBSITES</Span>{' '}
			and <Span color="red" weight="extraBold">APPLICATIONS</Span>, I do this in beautifully {' '}
			simple, focussed and understandable ways which make sure I consistently create the {' '}
			greatest experiences that exceed desired results.
		</p>
		<Button>Work with me</Button>
	</Section>
);

export default Introduction;

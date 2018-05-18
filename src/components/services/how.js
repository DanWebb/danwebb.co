import React from 'react';
import settings from '../../theme/settings';
import Span from '../elements/span';
import Title from '../elements/underlined-title';
import Button from '../button/button';
import Section from './section';

const How = () => (
	<Section background="buttermilk">
		<div>
			<Title>How I do it</Title>
			<p>
				<Span size={{small: '20px', medium: '27px'}}>Communication and code.</Span>
				<br/><br/>
				I work with people to realise possible approaches to ideas that meet or exceed goals and expectations. From prototypes, words or visuals I will proceed to bring these ideas to life by forming great websites and applications which once complete will recieve my continued help to manage, support and grow.
			</p>
			<Button href={`mailto:${settings.email}`}>Work With Me</Button>
		</div>
	</Section>
);

export default How;

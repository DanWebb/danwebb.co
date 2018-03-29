import React from 'react';
import TwoColumns from '../elements/two-columns';
import Span from '../elements/span';
import Divider from '../divider/divider';
import Section from './section';
import Subtitle from './subtitle';
import Title from './title';
import Content from './content';
import Image from './image';
import whoIAm from './who-i-am.jpg';
import whoIAmMob from './who-i-am-mob.jpg';

const About = () => (
	<Section>
		<TwoColumns>
			<Content>
				<Subtitle>Dan Webb - Coder, thinker, maker, explorer</Subtitle>
				<Title>Who I am</Title>
				<Divider color="red" width="125px" spacing="20px" centered={false}/>
				<p>
					<Span size={{small: '20px', medium: '30px'}}>
						An experienced, result focussed web developer who appreciates quality design and enjoys bringing ideas into reality.
					</Span>
				</p>
				<p>
					Recently I was at <a href="http://www.inspiradigital.co.uk/" rel="noopener noreferrer" target="_blank"><Span weight="semiBold" color="inspiraBlue">Inspira Digital</Span></a> for 5 years, the last 3 of which were spent as lead developer managing a team whilst still taking on my own projects.
				</p>
				<p>
					These days I’m focussed on helping my clients build great websites/applications and grow businesses as a freelance web developer as well as creating software products of my own.
				</p>
				<p>
					For the latest updates sign up for my newsletter below or see what I’m up to on <a href="https://twitter.com/danwebbbb" rel="noopener noreferrer" target="_blank"><Span weight="semiBold" color="twitterBlue">Twitter</Span></a> and <a href="https://www.instagram.com/danwebbbbb/" rel="noopener noreferrer" target="_blank"><Span weight="semiBold" color="instagramPurple">Instagram</Span></a>.
				</p>
			</Content>

			<Image>
				<picture>
					<source media="(min-width: 834px)" srcSet={whoIAm}/>
					<img src={whoIAmMob} alt="Who I am" width="615" height="909"/>
				</picture>
			</Image>
		</TwoColumns>
	</Section>
);

export default About;

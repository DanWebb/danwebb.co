import React from 'react';
import {array} from 'prop-types';
import {breakpoints} from '../../theme/breakpoint';
import A from '../elements/a';
import TwoColumns from '../elements/two-columns';
import Span from '../elements/span';
import Divider from '../divider/divider';
import Section from './section';
import Subtitle from './subtitle';
import Title from './title';
import Content from './content';
import Image from './image';
import JournalLink from './jornal-link';
import JournalLinkHolder from './journal-link-holder';
import whoIAm from './who-i-am.jpg';
import whoIAmMob from './who-i-am-mob.jpg';

const About = ({latestArticles}) => (
	<Section>
		<TwoColumns>
			<Content>
				<Subtitle>Dan Webb - Coder, thinker, maker, explorer</Subtitle>
				<Title>Who I am</Title>
				<Divider color="red" width="125px" spacing="20px" centered={false}/>
				<p>
					<Span size={{small: '20px', medium: '30px'}}>
						An experienced, result focussed web developer who appreciates quality {' '}
						design and enjoys bringing ideas into reality.
					</Span>
				</p>
				<p>
					Recently I was at <A href="http://www.inspiradigital.co.uk/" color="inspiraBlue" external>Inspira Digital</A> {' '}
					for 5 years, the last 3 of which were spent as lead developer managing a team whilst still taking on my own projects.
				</p>
				<p>
					These days I’m focussed on helping my clients build great websites/applications {' '}
					and grow businesses as a freelance web developer as well as creating software {' '}
					products of my own.
				</p>
				<p>
					For the latest updates check out a few of my recent <JournalLink to="/journal">journal</JournalLink> {' '}
					entries below or see what I’m up to on <A href="https://twitter.com/danwebbbb" color="twitterBlue" external>Twitter</A> {' '}
					and <A href="https://www.instagram.com/danwebbbbb/" color="instagramPurple" external>Instagram</A>.
				</p>
				<p>
					{latestArticles.map(article => (
						<JournalLinkHolder key={article.handle}>
							<JournalLink to={`/journal/${article.handle}`}>{article.title}</JournalLink> {' '}
							- {article.date}
						</JournalLinkHolder>
					))}
				</p>
			</Content>

			<Image>
				<picture>
					<source media={`(min-width: ${breakpoints.medium}px)`} srcSet={whoIAm}/>
					<img src={whoIAmMob} alt="Who I am" width="615" height="909"/>
				</picture>
			</Image>
		</TwoColumns>
	</Section>
);

About.propTypes = {
	latestArticles: array.isRequired
};

export default About;

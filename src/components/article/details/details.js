import React from 'react';
import {string} from 'prop-types';
import SeparatingText from '../../elements/separating-text';
import Newsletter from '../../newsletter/newsletter';
import A, {InternalLink} from '../../elements/a';
import H4 from '../../elements/h4';
import Container from './container';
import AvatarContainer from './avatar-container';
import Avatar from './avatar';
import P from './p';

const tweet = title => `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`"${title}"`)}&via=danwebbbb`;
const facebook = () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;

const ArticleDetails = ({title}) => (
	<div>
		<SeparatingText linePos="bottom">
			Share this on {' '}
			<A href={tweet(title)} color="twitterBlue" external>twitter</A>
			{' '} or {' '}
			<A href={facebook()} color="facebookBlue" external>facebook</A>
		</SeparatingText>

		<Container>
			<AvatarContainer>
				<Avatar src="/om-min.jpg" alt="Dan Webb" width="96" height="96"/>
				<div>
					<H4>Hi there - I&apos;m Dan</H4>
					<P>This is my journal where I write about being a freelance web developer, making great things and exploring ideas, places, stories and thoughts.</P>
				</div>
			</AvatarContainer>
			<Newsletter dark title/>
		</Container>

		<SeparatingText linePos="top">
			Go to the <InternalLink to="/journal">journal overview</InternalLink> to view all posts
		</SeparatingText>
	</div>
);

ArticleDetails.propTypes = {
	title: string.isRequired
};

export default ArticleDetails;

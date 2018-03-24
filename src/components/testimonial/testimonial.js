import React from 'react';
import {string, node} from 'prop-types';
import Section from './section';
import Quote from './quote';
import Content from './content';
import Author from './author';
import Wrap from './wrap';

const Testimonial = ({children, author, logo, url}) => (
	<Section>
		<Wrap>
			<Quote/>
			<Content>
				<p>{children}</p>
				<Author>
					<span>{author} -</span>
					<a href={url} target="_blank" rel="noopener noreferrer">
						<img src={logo} alt={author} height="47"/>
					</a>
				</Author>
			</Content>
		</Wrap>
	</Section>
);

Testimonial.propTypes = {
	children: node.isRequired,
	author: string.isRequired,
	logo: string.isRequired,
	url: string.isRequired
};

export default Testimonial;

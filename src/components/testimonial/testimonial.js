import React from 'react';
import {string, node} from 'prop-types';
import {imageType} from '../../types';
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
						<img {...logo}/>
					</a>
				</Author>
			</Content>
		</Wrap>
	</Section>
);

Testimonial.propTypes = {
	children: node.isRequired,
	author: string.isRequired,
	logo: imageType.isRequired,
	url: string.isRequired
};

export default Testimonial;

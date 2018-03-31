import React from 'react';
import Wrap from './wrap';
import Text from './text';
import Form from './form';
import Input from './input';
import Button from './button';

const Newsletter = () => (
	<Wrap>
		<Text>
			Join my occasional newsletter for product launches, availability, news and more.
		</Text>
		<Form>
			<Input type="email" placeholder="you@email.com"/>
			<Button>Join</Button>
		</Form>
	</Wrap>
);

export default Newsletter;

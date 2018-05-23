import React, {Component} from 'react';
import {bool} from 'prop-types';
import fetchJsonp from 'fetch-jsonp';
import H4 from '../elements/h4';
import Wrap from './wrap';
import Text from './text';
import Form from './form';
import Input from './input';
import Button from './button';

class Newsletter extends Component {
	state = {success: false, email: '', message: ''};

	handleChange = e => this.setState({email: e.target.value});

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({success: false, message: ''});

		const {email} = this.state;
		const mailchimpUrl = 'https://danwebb.us16.list-manage.com/subscribe/post-json?u=68795bac6a6469fcd3e22a523&id=8e0185fe15';
		const body = `&EMAIL=${email}&b_68795bac6a6469fcd3e22a523_8e0185fe15=`;
		const res = await fetchJsonp(`${mailchimpUrl}${body}`, {jsonpCallback: 'c'});
		const data = await res.json();
		const message = data.msg.replace('0 -', '');

		if (data.result === 'error') {
			return this.setState({message});
		}

		return this.setState({success: true, message});
	}

	render() {
		const {success, message} = this.state;
		const {title} = this.props;

		return (
			<Wrap>
				{title && <H4>Stay up to date</H4>}

				<Text dark={this.props.dark}>
					Join my occasional newsletter for product launches, availability, news and more.
				</Text>

				{message && <Text dark={this.props.dark}>{message}</Text>}

				{!success && (
					<Form noValidate>
						<Input
							type="email"
							placeholder="you@email.com"
							value={this.state.email}
							onChange={this.handleChange}
							dark={this.props.dark}
						/>

						<Button onClick={this.handleSubmit} dark={this.props.dark}>
							Join
						</Button>
					</Form>
				)}
			</Wrap>
		);
	}
}

Newsletter.propTypes = {
	dark: bool,
	title: bool
};

Newsletter.defaultProps = {
	dark: false,
	title: false
};

export default Newsletter;

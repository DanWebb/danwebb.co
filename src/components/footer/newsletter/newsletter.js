import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
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

		return (
			<Wrap>
				<Text>
					Join my occasional newsletter for product launches, availability, news and more.
				</Text>

				{message && <Text>{message}</Text>}

				{!success && (
					<Form noValidate>
						<Input
							type="email"
							placeholder="you@email.com"
							value={this.state.email}
							onChange={this.handleChange}
						/>

						<Button onClick={this.handleSubmit}>
							Join
						</Button>
					</Form>
				)}
			</Wrap>
		);
	}
}

export default Newsletter;

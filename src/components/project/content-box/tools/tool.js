import React, {Component} from 'react';
import {oneOf, string} from 'prop-types';
import Tooltip from '../../../tooltip/tooltip';
import logos from './logos/logos';
import Logo from './logo';
import urls from './urls';

class Tool extends Component {
	state = {showTip: false};

	handleMouseEnter = () => this.setState({showTip: true});

	handleMouseLeave = () => this.setState({showTip: false});

	render() {
		const {name, description} = this.props;
		const {showTip} = this.state;

		return (
			<Logo onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<a href={urls[name]} target="_blank" rel="noopener noreferrer">
					<img src={logos[name]} height="32"/>
					<Tooltip
						title={name}
						description={description}
						showTip={showTip && description}
					/>
				</a>
			</Logo>
		);
	}
}

Tool.propTypes = {
	name: oneOf([
		'mailchimp',
		'mongo',
		'node',
		'prismic',
		'react',
		'shopify',
		'stripe'
	]).isRequired,
	description: string
};

Tool.defaultProps = {
	description: ''
};

export default Tool;

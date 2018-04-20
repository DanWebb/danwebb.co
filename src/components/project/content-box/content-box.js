import React, {Component} from 'react';
import {array, string, bool} from 'prop-types';
import {colorType} from '../../../types';
import {breakpoints} from '../../../theme/breakpoint';
import Divider from '../../divider/divider';
import Button from '../../button/button';
import Tools from './tools/tools';
import BoxContainer from './box-container';
import Box from './box';
import Title from './title';
import Spec from './spec';
import Content from './content';
import Buttons from './buttons';

class ContentBox extends Component {
	state = {inView: false};

	elem = React.createRef();

	componentDidMount() {
		if (window.width <= breakpoints.medium) {
			return this.setState({inView: true});
		}

		window.addEventListener('scroll', () => {
			const elemTop = this.elem.current.getBoundingClientRect().top;

			if (elemTop <= 450 && !this.state.inView) {
				this.setState({inView: true});
			}
		});
	}

	render() {
		const {color, title, spec, summary, visit, caseStudy, tools, right} = this.props;
		const {inView} = this.state;
		let animation = inView ? 'show' : 'hideLeft';

		if (right) {
			animation = inView ? 'show' : 'hideRight';
		}

		return (
			<BoxContainer right={right} innerRef={this.elem} inView={inView}>
				<Box background={color} right={right ? 1 : 0} pose={animation}>
					<Divider color="red" width="60px" centered={false}/>
					<Title>{title}</Title>
					<Spec>{spec}</Spec>
					<Content>{summary}</Content>

					{(visit || caseStudy) && (
						<Buttons>
							{visit && <Button href={visit} secondary small>Visit</Button>}
							{caseStudy && <Button href={caseStudy} small>Read case study</Button>}
						</Buttons>
					)}

					{tools.length > 0 && <Tools tools={tools}/>}
				</Box>
			</BoxContainer>
		);
	}
}

ContentBox.propTypes = {
	color: colorType.isRequired,
	title: string.isRequired,
	spec: string.isRequired,
	summary: string.isRequired,
	visit: string,
	caseStudy: string,
	tools: array,
	right: bool
};

ContentBox.defaultProps = {
	visit: '',
	caseStudy: '',
	tools: [],
	right: false
};

export default ContentBox;

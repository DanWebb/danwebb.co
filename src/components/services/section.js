import styled from 'styled-components';
import color from '../../theme/color';
import {colorType} from '../../types';

const Section = styled.section`
	background: ${props => color[props.background]};
	padding: 100px 30px;

	> div {
		margin: 0 auto;
		max-width: 770px;
		text-align: center;
	}

	p {
		margin-bottom: 80px;
		letter-spacing: 3px;
	}
`;

Section.propTypes = {
	background: colorType.isRequired
};

export default Section;

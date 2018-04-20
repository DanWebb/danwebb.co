import styled from 'styled-components';
import breakpoint from '../../../theme/breakpoint';

const BoxContainer = styled.div`
	z-index: 3;
	width: calc(100% - 30px);
	max-width: 345px;
	position: relative;
  top: -100px;
	margin: 55px auto 0 auto;

	${props => breakpoint('medium', `
		opacity: ${props.inView ? 1 : 0};
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		margin: 0;
		transition: opacity 0.6s;

		${props.right ? `
			right: 30px;
		` : `
			left: 30px;
		`};

		&::after {
			display: block;
		}
	`)}

	${props => breakpoint('large', `
		${props.right ? `
			right: 0;
		` : `
			left: 0;
		`};
	`)}
`;

export default BoxContainer;

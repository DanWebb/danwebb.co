import breakpoint from '../../theme/breakpoint';
import Dot from './dot';

const InlineDot = Dot.extend`
	position: static;
	display: inline-block;
	margin-left: 2px;
	margin-bottom: -1px;
	border-width: 1px;
	height: 6px;
	width: 6px;

	${breakpoint('small', `
		border-width: 1px;
		height: 6px;
		width: 6px;
	`)}

	${breakpoint('medium', `
		border-width: 3px;
		height: 12px;
		width: 12px;
		margin-left: 5px;
	`)}
`;

export default InlineDot;

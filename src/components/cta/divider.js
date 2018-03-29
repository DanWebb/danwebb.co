import OriginalDivider from '../divider/divider';
import color from '../../theme/color';
import breakpoint from '../../theme/breakpoint';

const Divider = OriginalDivider.extend`
	 background: ${color.white};
	 margin: 20px auto;
	 width: 35px;
	 height: 1px;

	${breakpoint('small', `
		margin: 35px auto;
		width: 100px;
		height: 2px;
	`)}
`;

export default Divider;

import breakpoint from '../../../theme/breakpoint';
import OriginalCreatedAt from '../created-at';

const CreatedAt = OriginalCreatedAt.extend`
	font-size: 12px;

	${breakpoint('medium', `
		font-size: 16px;
	`)}
`;

export default CreatedAt;

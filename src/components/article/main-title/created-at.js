import breakpoint from '../../../theme/breakpoint';
import OriginalCreatedAt from '../created-at';

const CreatedAt = OriginalCreatedAt.extend`
	font-size: 12px;

	a {
		color: #C4C3C5;
		border-bottom: 1px solid #f0eef2;
	}

	${breakpoint('medium', `
		font-size: 16px;
	`)}
`;

export default CreatedAt;

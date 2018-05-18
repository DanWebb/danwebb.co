import breakpoint from '../../../theme/breakpoint';
import Container from './container';

const AvatarContainer = Container.extend`
	display: flex;
	max-width: 400px;
	margin: 0 auto;

	> div:last-child {
		margin: 0;
	}

	${breakpoint('medium', `
		> img + div:last-child {
			width: auto;
			padding-left: 0;
			padding-right: 0;
		}
	`)};
`;

export default AvatarContainer;

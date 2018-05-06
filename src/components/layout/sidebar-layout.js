import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';
import settings from '../../theme/settings';

const SidebarLayout = styled.div`
	max-width: 500px;
	margin: 0 auto;
	padding: 60px 30px;

	${breakpoint('medium', `
		max-width: ${settings.containerWidth};
		display: flex;

		> div {
			width: 66.6666666%;
			margin-right: 100px;
		}

		> aside {
			width: 33.3333333%;

			> div {
				margin-bottom: 40px;
			}
		}
	`)}

	${breakpoint('large', `
		padding: 110px 0;
	`)}
`;

export default SidebarLayout;

import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';
import settings from '../../theme/settings';

const SidebarLayout = styled.div`
	display: flex;
	max-width: ${settings.containerWidth};
	margin: 0 auto;
	padding: 110px 30px;

	${breakpoint('medium', `
		padding: 110px 0;

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
`;

export default SidebarLayout;

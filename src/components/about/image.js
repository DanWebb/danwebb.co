import styled from 'styled-components';
import breakpoint from '../../theme/breakpoint';

const Image = styled.div`
	margin: 80px -30px;

	img {
		width: 100%;
		height: auto;
	}

	${breakpoint('medium', `
		margin: 0;

		&,
		img {
			max-width: 615px;
			width: calc(50% - 100px);
			height: auto;
		}

		img {
			display: block;
			position: absolute;
			right: 0;
		}
	`)}

	${breakpoint('large', `
		height: 950px;
	`)}
`;

export default Image;

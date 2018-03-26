import styled from 'styled-components';
import color from '../../theme/color';

const List = styled.ul`
	color: ${color.red};
	text-align: center;
	padding: 20px 0;

	> li {
		padding: 5px 0;
	}
`;

export default List;

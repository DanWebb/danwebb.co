import {Link} from 'react-static';
import OriginalCategory from '../category';
import breakpoint from '../../../theme/breakpoint';

const Category = OriginalCategory.extend`
	font-size: 12px;

	${breakpoint('medium', `
		font-size: 16px;
	`)}
`;

export default Category.withComponent(Link);

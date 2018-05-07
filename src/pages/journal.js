import React, {Component} from 'react';
import {shape, string, array} from 'prop-types';
import {RouteData} from 'react-static';
import {colorType, imageType} from '../types';
import {breakpoints} from '../theme/breakpoint';
import Layout from '../components/layout/layout';
import SidebarLayout from '../components/layout/sidebar-layout';
import Desktop from '../components/elements/desktop';
import Banner from '../components/banner/banner';
import Signup from '../components/newsletter/signup';
import Newsletter from '../components/newsletter/newsletter';
import CategoryList from '../components/category-list/category-list';
import Article from '../components/article/article';

class Journal extends Component {
	state = {isMobile: false}

	isMobile = () => this.setState({isMobile: window.outerWidth <= breakpoints.medium});

	componentDidMount() {
		this.isMobile();
		window.addEventListener('resize', this.isMobile);
	}

	render() {
		const {intro, categories, articles} = this.props;
		const {isMobile} = this.state;
		console.log(isMobile, window.outerWidth, breakpoints.medium);

		return (
			<Layout>
				<Banner
					color={intro.color}
					title={intro.title}
					text={intro.description}
					image={intro.image}
				/>
				<Signup/>
				<SidebarLayout>
					<div>
						{articles.map((article, i) => (
							<div key={article.handle}>
								<Article {...article}/>
								{i === 1 && isMobile && <CategoryList categories={categories}/>}
							</div>
						))}
					</div>
					{!isMobile && (
						<aside>
							<Newsletter dark title/>
							<CategoryList categories={categories}/>
						</aside>
					)}
				</SidebarLayout>
			</Layout>
		);
	}
}

Journal.propTypes = {
	intro: shape({
		color: colorType.isRequired,
		title: string.isRequired,
		description: string,
		image: imageType
	}).isRequired,
	articles: array.isRequired,
	categories: array.isRequired
};

export default () => <RouteData component={Journal}/>

import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

class UrbanAreasList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			urbanAreasList: []
		};
	}

	componentDidMount() {
		fetch('https://api.teleport.org/api/urban_areas/')
			.then(res => res.json())
			.then(res => {
				const urbanAreasList = res['_links']['ua:item'];

				this.setState({ urbanAreasList });
			})
			.catch(error => console.log(error));
	}

	renderUrbanAreas() {
		const { urbanAreasList } = this.state;

		const urbanAreas = urbanAreasList.map((area, index) => {
			const { href, name } = area;
			const slugName = href.split('slug:')[1].split('/')[0];

			return (
				<li key={index}>
					<Link to={`${ROUTES.CITIES}/${slugName}`}>{name}</Link>
				</li>
			);
		});

		return urbanAreas;
	}

	render() {
		return (
			<div>
				<ul className="urban-areas-container">{this.renderUrbanAreas()}</ul>
			</div>
		);
	}
}

export default UrbanAreasList;

/**
 * DEPENDENCIES
 */
import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * CONSTANTS
 */
import * as ROUTES from '../constants/routes';

const INITIAL_STATE = {
	city: '',
	suggestions: []
};

class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };

		// BIND METHODS
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });

		fetch(`https://api.teleport.org/api/cities/?search=${e.target.value}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					suggestions: data['_embedded']['city:search-results']
				});
			});
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	handleSuggestionSelect(cityValue) {
		const { suggestions } = this.state;
		const selectedCity = suggestions.find(city => cityValue === city.matching_full_name);
		const apiUrl = selectedCity['_links']['city:item']['href'];

		fetch(apiUrl)
			.then(res => res.json())
			.then(res => {
				let urbanAreaLink = res['_links']['city:urban_area']
					? res['_links']['city:urban_area']['href']
					: null;
				let slugName = urbanAreaLink ? urbanAreaLink.split('slug:')[1].split('/')[0] : 'notfound';

				this.setState({ ...INITIAL_STATE });
				this.props.history.push(`${ROUTES.CITIES}/${slugName}`);
			});
	}

	renderSuggestions() {
		const { city, suggestions } = this.state;

		if (suggestions && city !== '') {
			return suggestions.slice(0, 10).map((suggestion, index) => {
				const city = suggestion.matching_full_name;
				return (
					<li key={index} onClick={() => this.handleSuggestionSelect(city)}>
						{city}
					</li>
				);
			});
		}
	}

	render() {
		const { city, suggestions } = this.state;
		const activeClass = city && suggestions.length ? 'search-input is-active' : 'search-input';

		return (
			<form onSubmit={this.handleSubmit}>
				<input
					className={activeClass}
					name="city"
					onChange={this.handleChange}
					value={this.state.city}
					placeholder="Search cities"
				/>
				<ul className="search-suggestions">{this.renderSuggestions()}</ul>
			</form>
		);
	}
}

export default withRouter(SearchBox);

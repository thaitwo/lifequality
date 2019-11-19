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
}

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
      })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSuggestionSelect(cityValue) {
    const { suggestions } = this.state;
    const selectedCity = suggestions.find(city => cityValue === city.matching_full_name);
    const apiUrl = selectedCity['_links']['city:item']['href'];
    const cityId = apiUrl.split('geonameid:')[1].split('/')[0];
    this.setState({ ...INITIAL_STATE });
    this.props.history.push(`${ROUTES.CITY}/${cityId}`);
  }

  renderSuggestions() {
    const { suggestions } = this.state;

    if (suggestions) {
      return suggestions.slice(0,10).map((suggestion, index) => {
        const city = suggestion.matching_full_name;
        return <li key={index} onClick={() => this.handleSuggestionSelect(city)}>{city}</li>;
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="city" onChange={this.handleChange} value={this.state.city} />
        <ul className="search-suggestions">
          {this.renderSuggestions()}
        </ul>
      </form>
    );
  }
}

export default withRouter(SearchBox);
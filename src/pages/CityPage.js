import React from 'react';
import { withRouter } from 'react-router-dom';
import UrbanAreaScores from '../components/UrbanAreaScores';
import UrbanAreaSalaries from '../components/UrbanAreaSalaries';

class CityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityId: this.props.match.params.cityId,
      uaInfo: {},
      uaSummary: '',
      uaScores: [],
      uaSalaries: null,
      cityData: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cityId !== this.state.cityId) {
      this.fetchData();
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.cityId !== prevState.cityId) {
      const cityId = nextProps.match.params.cityId;
      return {
        cityId,
        cityData: null
      }
    }
    return null;
  }

  fetchData() {
    const { cityId } = this.state;

    fetch(`https://api.teleport.org/api/cities/geonameid:${cityId}`)
      .then(res => res.json())
      .then(res => {
        const urbanAreaApiUrl = res['_links']['city:urban_area']['href'];
        this.setState({ cityData: res });

        return Promise.all([
          fetch(urbanAreaApiUrl),
          // fetch(`${urbanAreaApiUrl}details`),
          fetch(`${urbanAreaApiUrl}scores`),
          fetch(`${urbanAreaApiUrl}salaries`)
        ])
      })
      .then(res => Promise.all(res.map(r => r.json())))
      .then(res => {
        console.log(res);
        const [ uaInfo, { categories, summary }, { salaries } ] = res;
        this.setState({
          uaInfo,
          uaSummary: summary,
          uaScores: categories,
          uaSalaries: salaries
        });
      })
  }

  renderData() {
    const { cityData } = this.state;
    // console.log(this.state);
    if (cityData) {
      const { full_name, population } = cityData;
  
      return (
        <div>
          <p>City: {full_name}</p>
          <p>Population: {population}</p>
        </div>
      );
    }
  }

  render() {
    // console.log('scores', this.state.uaScores)
    return (
      <div>
        {this.renderData()}
        <div className="ua-container">
          <UrbanAreaScores
            summary={this.state.uaSummary}
            scores={this.state.uaScores}
            />
          <UrbanAreaSalaries
            salaries={this.state.uaSalaries}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CityPage);
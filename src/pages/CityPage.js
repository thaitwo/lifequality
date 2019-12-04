import React from 'react';
import { withRouter } from 'react-router-dom';
import LifeQuality from '../components/LifeQuality';
import Salaries from '../components/Salaries';
import Climate from '../components/Climate';
import CostOfLiving from '../components/CostOfLiving';
import JobMarket from '../components/JobMarket';
import Education from '../components/Education';
import Housing from '../components/Housing';
import Safety from '../components/Safety';
import Lgbt from '../components/Lgbt';
import People from '../components/People';

const BASE_URL_URBAN_AREAS = 'https://api.teleport.org/api/urban_areas';

class CityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityId: this.props.match.params.cityId,
      cityData: {},
      uaSummary: '',
      uaScores: [],
      uaSalaries: [],
      climate: {},
      costOfLiving: {},
      jobMarket: {},
      education: {},
      housing: {},
      safety: {},
      lgbt: {},
      people: {},
      uaPopulation: {},
      language: {}
    }
  }

  componentDidMount() {
    const { cityId } = this.state;

    if (cityId !== 'notfound') {
      this.fetchData();
    }
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
        cityData: {}
      }
    }
    return null;
  }

  fetchData() {
    const { cityId } = this.state;

    Promise.all([
      fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/scores`),
      fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/salaries`),
      fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/details`)
    ])
    .then(res => Promise.all(res.map(r => r.json())))
    .then(([ scoresData, salariesData, detailsData ]) => {
      const details = detailsData.categories;
      console.log(details);

      const climate = details.find(category => category.id === 'CLIMATE');
      const costOfLiving = details.find(category => category.id === 'COST-OF-LIVING');
      const jobMarket = details.find(category => category.id === 'JOB-MARKET');
      const education = details.find(category => category.id === 'EDUCATION');
      const housing = details.find(category => category.id === 'HOUSING');
      const safety = details.find(category => category.id === 'SAFETY');
      const lgbt = details.find(category => category.id === 'MINORITIES');
      const people = details.find(category => category.id === 'INTERNAL');
      const uaPopulation = details.find(category => category.id === 'CITY-SIZE');
      const language = details.find(category => category.id === 'LANGUAGE');
      // console.log(uaPopulation);

      this.setState({
        uaSummary: scoresData.summary,
        uaScores: scoresData.categories,
        uaSalaries: salariesData.salaries,
        uaDetails: detailsData.categories,
        climate,
        costOfLiving,
        jobMarket,
        education,
        housing,
        safety,
        lgbt,
        people,
        uaPopulation,
        language
      });
    });
  }

  renderNotFound() {
    return (
      <div>
        <h3>Sorry but no data was found for this city.</h3>
      </div>
    );
  }

  renderCityData() {
    const { cityId } = this.state;
    let content;

    if (cityId !== 'notfound') {
      content = (
        <div>
          <div className="section">
            <CityInfo name={this.state.cityData.full_name} population={this.state.cityData.population} />
          </div>
          <div className="section">
            <LifeQuality summary={this.state.uaSummary} scores={this.state.uaScores} />
          </div>
          <div className="bg-black">
            <div className="section">
              <Climate label={this.state.climate.label} data={this.state.climate.data} />
            </div>
          </div>
          <div className="section">
            <CostOfLiving label={this.state.costOfLiving.label} data={this.state.costOfLiving.data} />
            <Housing label={this.state.housing.label} data={this.state.housing.data} />
          </div>
          <div className="bg-black">
            <div className="section">
              <JobMarket label={this.state.jobMarket.label} data={this.state.jobMarket.data} />
            </div>
          </div>
          <div className="section">
            <Education label={this.state.education.label} data={this.state.education.data} />
          </div>
          <div className="bg-blue">
            <div className="section">
              <Safety label={this.state.safety.label} data={this.state.safety.data} />
            </div>
          </div>
          <div className="section">
            <Lgbt data={this.state.lgbt.data} />
          </div>
          <div className="bg-orange">
            <div className="section">
              <People
                data={this.state.people.data}
                population={this.state.uaPopulation.data}
                language={this.state.language.data}
              />
            </div>
          </div>
          <div className="section">
            <Salaries salaries={this.state.uaSalaries} />
          </div>
        </div>
      );
    }

    return content;
  }

  render() {
    return (
      <div>
        {this.renderCityData()}
        {this.renderNotFound()}
      </div>
    )
  }
}

const CityInfo = ({ name, population }) => (
  <div>
    <p className="text-header">{name}</p>
    <p className="text-subheader">Population: {population}</p>
  </div>
);

export default withRouter(CityPage);
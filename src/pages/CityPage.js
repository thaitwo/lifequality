/**
 * DEPENDENCIES
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentLoader from 'react-content-loader';

/**
 * COMPONENTS
 */
import Summary from '../components/Summary';
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

const LoadingContent = () => (
	<ContentLoader height={160} width={400} speed={1} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
		<rect x="0" y="13" rx="4" ry="4" width="400" height="9" />
		<rect x="0" y="29" rx="4" ry="4" width="100" height="8" />
		<rect x="0" y="50" rx="4" ry="4" width="400" height="10" />
		<rect x="0" y="65" rx="4" ry="4" width="400" height="10" />
		<rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
		<rect x="0" y="99" rx="5" ry="5" width="400" height="200" />
	</ContentLoader>
);

class CityPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			areaName: '',
			cityId: this.props.match.params.cityId,
			cityData: {},
			summary: '',
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
			population: {},
			language: {}
		};
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
			};
		}
		return null;
	}

	fetchData() {
		this.setState({ loading: true });
		const { cityId } = this.state;

		Promise.all([
			fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/`),
			fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/scores/`),
			fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/salaries/`),
			fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/details/`),
			fetch(`${BASE_URL_URBAN_AREAS}/slug:${cityId}/images/`)
		])
			.then(res => Promise.all(res.map(r => r.json())))
			.then(([basicData, scoresData, salariesData, detailsData, imagesData]) => {
				const details = detailsData.categories;
				const climate = details.find(category => category.id === 'CLIMATE');
				const costOfLiving = details.find(category => category.id === 'COST-OF-LIVING');
				const jobMarket = details.find(category => category.id === 'JOB-MARKET');
				const education = details.find(category => category.id === 'EDUCATION');
				const housing = details.find(category => category.id === 'HOUSING');
				const safety = details.find(category => category.id === 'SAFETY');
				const lgbt = details.find(category => category.id === 'MINORITIES');
				const people = details.find(category => category.id === 'INTERNAL');
				const population = details.find(category => category.id === 'CITY-SIZE');
				const language = details.find(category => category.id === 'LANGUAGE');
				const imageUrl = imagesData.photos[0].image.web;

				this.setState({
					areaName: basicData.full_name,
					summary: scoresData.summary,
					imageUrl,
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
					population,
					language
				});
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}

	renderNotFound() {
		const { cityId } = this.state;
		let content = '';

		if (cityId === 'notfound') {
			content = (
				<div>
					<h3>Sorry but no data was found for this city.</h3>
				</div>
			);
		}

		return content;
	}

	renderCityData() {
		const { cityId } = this.state;
		let content;

		if (cityId !== 'notfound') {
			const {
				areaName,
				population,
				summary,
				imageUrl,
				uaScores,
				climate,
				costOfLiving,
				housing,
				jobMarket,
				education,
				safety,
				lgbt,
				people,
				language,
				uaSalaries
			} = this.state;

			content = (
				<div>
					<div className="section">
						<Summary name={areaName} population={population.data} summary={summary} />
					</div>
					<div className="urban-area-image">
						<img alt={areaName} src={imageUrl} />
					</div>
					<div className="section">
						<LifeQuality summary={summary} scores={uaScores} />
					</div>
					{climate ? <Climate climate={climate.data} /> : ''}
					<div className="section">
						<CostOfLiving label={costOfLiving.label} data={costOfLiving.data} />
						<Housing label={housing.label} data={housing.data} />
					</div>
					{jobMarket ? (
						<div className="bg-black">
							<div className="section">
								<JobMarket data={jobMarket.data} />
							</div>
						</div>
					) : (
						''
					)}
					{education ? <Education data={education.data} /> : ''}
					<div className="bg-blue">
						<div className="section">
							<Safety label={safety.label} data={safety.data} />
						</div>
					</div>
					<div className="section">
						<Lgbt data={lgbt.data} />
					</div>
					<div className="bg-orange">
						<div className="section">
							<People people={people.data} population={population.data} language={language.data} />
						</div>
					</div>
					<div className="section">
						<Salaries salaries={uaSalaries} />
					</div>
				</div>
			);
		}

		return content;
	}

	render() {
		const { loading } = this.state;

		return (
			<div>
				{loading ? (
					<div className="section">
						<LoadingContent />
					</div>
				) : (
					''
				)}
				{this.renderCityData()}
				{this.renderNotFound()}
			</div>
		);
	}
}

export default withRouter(CityPage);

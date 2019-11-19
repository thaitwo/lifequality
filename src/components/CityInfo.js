import React from 'react';

class CityInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityId: this.props.match.params.cityId,
      data: null
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
        data: null
      }
    }
    return null;
  }

  fetchData() {
    const { cityId } = this.state;

    fetch(`https://api.teleport.org/api/cities/geonameid:${cityId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res });
      });
  }

  renderData() {
    const { data } = this.state;
    if (data) {
      const { full_name, population } = data;
  
      return (
        <div>
          <p>{full_name}</p>
          <p>{population}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderData()}
      </div>
    );
  }
}

export default CityInfo;
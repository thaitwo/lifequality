import React from 'react';
import Highcharts from 'highcharts';
import ReactHtmlParser from 'react-html-parser';

class UrbanAreaScores extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      scores: [],
    };

    this.chart = null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scores !== this.props.scores) {
      const categories = this.props.scores.map(category => category.name);
      const scores = this.props.scores.map(category => parseInt(category.score_out_of_10));
      
      const options = {
        title: {
          text: undefined
        },
        chart: {
          renderTo: 'uaScoresChart',
          type: 'bar'
        },
        xAxis: {
          categories: categories,
          lineWidth: 0,
        },
        yAxis: {
          title: {
            text: null
          },
          gridLineWidth: 0,
          visible: false
        },
        plotOptions: {
          series: {
            pointPadding: 0,
          }
        },
        series: [
          {
            borderRadius: 4,
            data: scores,
            color: '#66BB6A',
            pointWidth: 20,
            showInLegend: false
          }
        ],
        credits: {
          enabled: false
        }
      };
      this.chart = new Highcharts.chart(options);
    }
  }

  renderSummary() {
    const { summary } = this.props;
    if (summary) {
      return ReactHtmlParser(summary);
    }
  }

  render() {
    return (
      <div>
        <h2 className="text-subheader">Life Quality</h2>
        <div className="ua-scores-container">
          <div className="ua-scores-summary">
            {this.renderSummary()}
          </div>
          <div id="uaScoresChart" style={chartStyles}></div>
        </div>
      </div>
    );
  }
}

const chartStyles = {
  height: '600px',
  width: '400px'
};

export default UrbanAreaScores;
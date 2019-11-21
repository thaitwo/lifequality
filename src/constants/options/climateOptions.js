import Highcharts from 'highcharts';

export const gaugeOptions = {
    chart: {
      renderTo: 'avgDayLengthChart',
      type: 'solidgauge',
      height: '100%',
      // events: {
      //     render: renderIcons
      // }
  },
  title: {
      text: 'Activity',
      style: {
          fontSize: '24px'
      }
  },
  tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
          fontSize: '16px'
      },
      pointFormat: '{series.name}<br><span style="font-size:1em; color: {point.color};">{point.y}hrs</span>',
      positioner: function (labelWidth) {
          return {
              x: (this.chart.chartWidth - labelWidth) / 2,
              y: (this.chart.plotHeight / 2) + 15
          };
      }
  },
  pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Move
          outerRadius: '100%',
          innerRadius: '88%',
          backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
              .setOpacity(0.3)
              .get(),
          borderWidth: 0
        }]
  },
  yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
  },
  plotOptions: {
      solidgauge: {
          dataLabels: {
              enabled: false
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true
      }
  },
  series: [{
      name: 'Day Length',
      data: [{
          color: Highcharts.getOptions().colors[0],
          radius: '100%',
          innerRadius: '88%',
          y: 53
      }]
  }]
}
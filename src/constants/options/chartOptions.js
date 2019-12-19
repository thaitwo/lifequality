export const options = {
  chart: {
    renderTo: 'uaSalariesChart',
    type: 'columnrange',
    inverted: true
  },
  accessibility: {
    description: 'A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: null
  },
  yAxis: {
    title: {
      text: null
    }
  },
  tooltip: {
    valuePrefix: '$',
    valueSuffix: 'K'
  },
  plotOptions: {
    columnrange: {
      dataLabels: {
        enabled: true,
        format: '{y}K'
      },
      color: '#2196F3'
    }
  },
  legend: {
    enabled: false
  },
  series: [{
    name: 'Salary',
    data: null,
    borderRadius: 4,
    pointWidth: 18,
  }],
  credits: {
    enabled: false
  }
}
var chartDom0 = document.getElementById('climate-change');
var myChart0 = echarts.init(chartDom0);
var option0;


$.get('./data/climate-change.json', function (data) {

  var temperatureAnomalies = data.temperature; 

  var seriesData = temperatureAnomalies.map(function (value) {
    return {
        value: value,
        itemStyle: {
            color: value < 0 ? '#00F5FF' : '#FF6A6A'
        }
    };
  });

  option0 = {
    title: {
      text: 'Temperature Anomaly',
      subtext: 'from 1880 to 2023',
      textStyle: {
        color:'#D3D3D3'
      },
      subtextStyle: {
        color: '#D3D3D3'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[0];
        return tar.name + '<br/>' + tar.value + '˚C';
      }
    },
    xAxis: {
      type: 'category',
      data: data.year,
      axisLabel: {
        color: '#D3D3D3	'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} ˚C',
        color: '#D3D3D3'
      }
    },
    series: [
      {
        data: seriesData,
        type: 'bar'
      }
    ]
  };

  myChart0.setOption(option0);
})

option0 && myChart0.setOption(option0);

var chartDom = document.getElementById('gepie-US');
var myChart = echarts.init(chartDom);
var option;

setTimeout(function () {
  option = {
    legend: {textStyle: {color: "#ccc"}},
    paper_bgcolor: "rgba(0, 0, 0, 0)",
    plot_bgcolor: "rgba(0, 0, 0, 0)",
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['Source', '1971', '1981', '1991', '2001', '2011', '2021'] ,
        ['Wind', 0, 0, 3, 7, 120, 378] ,
        ['Hydro', 272, 267, 287, 208, 313, 246] ,
        ['Solar', 0, 0, 0, 1, 2, 164] ,
        ['Other', 17, 27, 61, 65, 75, 72]
      ]
    },
    // title: {text: "Green Energy Generation by Source, China", color: "#fff"},
    xAxis: { type: 'category', axisLabel: {color: "#D3D3D3"}, color: "#fff" },
    yAxis: { gridIndex: 0, 
        axisLabel: {
        color: '#D3D3D3'}, },
    grid: { top: '55%' },
    axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#ccc',
          borderColor: '#aaa',
          borderWidth: 1,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          color: '#222'
        }},
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '35%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: \n {@2021} ({d}%)'
        },
        encode: {
          itemName: 'Source',
          value: '2021',
          tooltip: '2021'
        }
      }
    ]
  };
  myChart.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: '+ '\r\n'+ '{@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart.setOption(option);
});

option && myChart.setOption(option);

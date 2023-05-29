var chartDom4 = document.getElementById('Asia-energy-income');
var myChart4 = echarts.init(chartDom4);
var option4;

$.get('./data/clean-fuels-access-asia.json', function (rawData) {
  const series = [];
  rawData.countries.forEach(function (country) {
    const data = rawData.series.map(function (yearData) {

      const item = yearData.filter(function (item) {
        return item[3] === country;
      })[0];

      return {
        label: {
          show: +item[4] % 5 === 0,// && +item[4] >= 1990,
          position: 'top'
        },
        emphasis: {
          label: {
            show: true
          }
        },
        name: item[4],
        value: item
      };
    });
    var links = data.map(function (item, idx) {
      return {
        source: idx,
        target: idx + 1
      };
    });
    links.pop();
    series.push({
      name: country,
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      data: data,
      links: links,
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: 5,
      legendHoverLink: false,
      lineStyle: {
        color: '#FFFFF0'
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: '#333'
      },
      label: {
        color: '#F0FFF0',
        position: 'right'
      },
      symbolSize: 10,
      animationDelay: function (idx) {
        return idx * 100;
      }
    });
  });
  option4 = {
    visualMap: {
      show: false,
      min: 0,
      max: 100,
      dimension: 1
    },
    legend: {
      data: rawData.countries,
      selectedMode: 'single',
      right: 50
    },
    grid: {
      left: 0,
      bottom: 0,
      containLabel: true,
      top: 150
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} $',
        color: '#D3D3D3'
    }
    },
    yAxis: {
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} %',
        color: '#D3D3D3'
    }
    },
    toolbox: {
      feature: {
        dataZoom: {}
      }
    },
    dataZoom: {
      type: 'inside'
    },
    series: series
  };
  myChart4.setOption(option4);
});

option4 && myChart4.setOption(option4);

window.addEventListener('DOMContentLoaded', (event) => {
  var buttons = document.getElementsByClassName('continent');
  var divs = document.getElementsByClassName('myContinent');

  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
          var targetDivId = this.getAttribute('data-target');
          for (var j = 0; j < divs.length; j++) {
              if (divs[j].id === targetDivId) {
                  divs[j].style.display = 'block';
              } else {
                  divs[j].style.display = 'none';
              }
          }
      });
  }
});

window.addEventListener('resize', myChart4.resize());
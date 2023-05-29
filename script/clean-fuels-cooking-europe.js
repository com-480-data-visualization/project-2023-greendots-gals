var chartDom5 = document.getElementById('Europe-energy-income');
var myChart5 = echarts.init(chartDom5);
var option5;

$.get('./data/clean-fuels-access-europe.json', function (rawData) {
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
  option5 = {
    visualMap: {
      show: false,
      min: 0,
      max: 100,
      dimension: 1
    },
    legend: {
      data: rawData.countries,
      selectedMode: 'single',
      right: 100
    },
    grid: {
      left: 0,
      bottom: 0,
      containLabel: true,
      top: 120
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
  myChart5.setOption(option5);
});

option5 && myChart5.setOption(option5);

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

window.addEventListener('resize', myChart5.resize());
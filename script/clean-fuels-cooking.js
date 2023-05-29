var chartDom2 = document.getElementById('energy_and_income_viz');
var myChart2 = echarts.init(chartDom2);
var option2;


$.get('./data/clean-fuels-access.json', function (data) {

  var itemStyle = {
    opacity: 0.8
  };
  var sizeFunction = function (x) {
    var y = Math.sqrt(x / 5e8) + 0.1;
    return y * 40;
  };
  // Schema:
  var schema = [
    { name: 'GDP per capita', index: 0, text: 'GDP per capita', unit: '$' },
    { name: 'Access to clean fuels and technologies for cooking', index: 1, text: 'Access proportion', unit: '%' },
    { name: 'Population', index: 2, text: 'Population', unit: '' },
    { name: 'Country', index: 3, text: 'Country', unit: '' },
    {name:'Continent', index: 4, text: 'Continent', unit: ''}
  ];
  
  option2 = {
    baseOption: {
      timeline: {
        axisType: 'category',
        orient: 'vertical',
        autoPlay: true,
        inverse: true,
        playInterval: 1000,
        left: null,
        right: 0,
        top: 20,
        bottom: 20,
        width: 55,
        height: null,
        symbol: 'none',
        checkpointStyle: {
          borderWidth: 2
        },
        controlStyle: {
          showNextBtn: false,
          showPrevBtn: false
        },
        data: []
      },
      title: [
        {
          text: data.timeline[0],
          textAlign: 'center',
          left: '72%',
          top: '65%',
          textStyle: {
            fontSize: 70
          }
        },
        {
          text: 'Access to Clean fuels for cookings vs. GDP per capita',
          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color: '#D3D3D3'
          }
        }
      ],
      tooltip: {
        padding: 5,
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          // prettier-ignore
          return schema[3].text + ':' + value[3] + '<br>'
                        + schema[1].text + ':' + value[1] + schema[1].unit + '<br>'
                        + schema[0].text + ':' + value[0] + schema[0].unit + '<br>'
                        + schema[2].text + ':' + value[2] + '<br>';
        }
      },
      grid: {
        top: 100,
        containLabel: true,
        left: 30,
        right: '110'
      },
      xAxis: {
        type: 'log',
        name: 'GDP per capita',
        max: 100000,
        min: 300,
        nameGap: 25,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 18,
          color: '#D3D3D3'
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} $',
          color: '#D3D3D3'
        }
      },
      yAxis: {
        type: 'value',
        name: 'Proportions',
        max: 100,
        nameTextStyle: {
          fontSize: 18,
          color: '#D3D3D3'
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} %',
          color: '#D3D3D3'
        }
      },
      visualMap: [
        {
          show: false,
          dimension: 5,
          categories: data.continent,
          inRange: {
            color: (function () {
              // prettier-ignore
              var colors = ['#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a']//, '#c77288', '#786090', '#91c4c5', '#6890ba'];
              return colors.concat(colors);
            })()
          }
        }
      ],
      series: [
        {
          name: data.timeline[0],
          type: 'scatter',
          itemStyle: itemStyle,
          data: data.series[0],
          symbolSize: function (val) {
            return sizeFunction(val[2]);
          }
        }
      ],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
    },
    options: []
  };
  for (var n = 0; n < data.timeline.length; n++) {
    option2.baseOption.timeline.data.push(data.timeline[n]);
    option2.options.push({
      title: {
        show: true,
        text: data.timeline[n] + ''
      },
      series: {
        name: data.timeline[n],
        type: 'scatter',
        itemStyle: itemStyle,
        data: data.series[n],
        symbolSize: function (val) {
          return sizeFunction(val[2]);
        }
      }
    });
  }

  myChart2.setOption(option2);
});

option2 && myChart2.setOption(option2);

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

window.addEventListener('resize', myChart2.resize());
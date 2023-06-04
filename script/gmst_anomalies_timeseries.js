var chartDom_gmst = document.getElementById('gmst');
var myChart_gmst = echarts.init(chartDom_gmst);
var option_gmst;
var lineSelect = document.getElementById('lineSelect');

$.get('./data/lines.json', function (data) {

    var commonOptions = {
        title: {
          text: 'Global surface temperature change since 1850',
          subtext: 'Observed warming(1850-2019) is only reproduced in simulations including human influence',
          textStyle: {
            color:'#D3D3D3'
          },
          subtextStyle: {
            color: '#D3D3D3'
          },
          left: 'left'
        },
        grid: {
            left: '2%',
            right: '2%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: data.map(function (item) {
              return item.date;
            }),
            axisLabel: {
                formatter: function (value) {
                  var date = new Date(value);
                  return date.getFullYear();
                },
                color: '#D3D3D3'
              },          
            boundaryGap: false
          }
      };

    var base1 = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l_1));
      }, Infinity);
    
    var base2 = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l_2));
      }, Infinity);

    var base3 = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l_3));
      }, Infinity);
    
    var base4 = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l_4));
      }, Infinity);
      
    myChart_gmst.setOption(Object.assign({}, commonOptions, {
        tooltip: {
            trigger: 'axis',
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
            formatter: function (params) {
                return (
                  params[0].name +
                  '<br />' +
                  'grey: ' + (params[0].value).toFixed(3) +
                  '°C' + '<br />' + 
                  'red: ' + (params[1].value).toFixed(3) +
                  '°C' + '<br />' +
                  'observation: ' + (params[2].value).toFixed(3) +
                  '°C' + '<br />' +
                  'blue: ' + (params[3].value).toFixed(3) +
                  '°C' + '<br />' +
                  'green: ' + (params[4].value).toFixed(3) +
                  '°C' 
                );
              }
        },
        yAxis: {
            axisLabel: {
                formatter: function (val) {
                return val + '°C';
                },
                color: '#D3D3D3'
            },
            axisPointer: {
                label: {
                formatter: function (params) {
                    return (params.value).toFixed(1) + '°C';
                }
                }
            },
            splitNumber: 3
            },
          series: [
                {
                    name: 'grey_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_1;
                    }),
                    itemStyle: {
                        color: '#9C9C9C'
                    },
                    showSymbol: false
                },
                {
                    name: 'red_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_2;
                    }),
                    itemStyle: {
                        color: '#FF6A6A'
                    },
                    showSymbol: false
                },
                {
                    name: 'observation',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_5;
                    }),
                    itemStyle: {
                        color: "#FFFAF0"
                    },
                    showSymbol: false
                },
                {
                    name: 'blue_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_3;
                    }),
                    itemStyle: {
                        color: '#00F5FF'
                    },
                    showSymbol: false
                },
                {
                    name: 'green_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_4;
                    }),
                    itemStyle: {
                        color: '#2E8B57'
                    },
                    showSymbol: false
                }
            ]
    }));  
    
    lineSelect.addEventListener('change', function() {
        var selectedLine = this.value;
        if (selectedLine === 'all') {
            myChart_gmst.setOption(Object.assign({}, commonOptions, {
            tooltip: {
                trigger: 'axis',
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
                formatter: function (params) {
                    return (
                        params[0].name +
                        '<br />' +
                        (params[0].value).toFixed(3) +
                        '°C' + '<br />' + 
                        (params[1].value).toFixed(3) +
                        '°C' + '<br />' +
                        (params[2].value).toFixed(3) +
                        '°C' + '<br />' +
                        (params[3].value).toFixed(3) +
                        '°C' + '<br />' +
                        (params[4].value).toFixed(3) +
                        '°C' 
                    );
                    }
            },
            yAxis: {
                axisLabel: {
                    formatter: function (val) {
                    return val + '°C';
                    },
                    color: '#D3D3D3'
                },
                axisPointer: {
                    label: {
                    formatter: function (params) {
                        return (params.value).toFixed(1) + '°C';
                    }
                    }
                },
                splitNumber: 3
                },
            series: [
                {
                    name: 'grey_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_1;
                    }),
                    itemStyle: {
                        color: '#9C9C9C'
                    },
                    showSymbol: false
                },
                {
                    name: 'red_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_2;
                    }),
                    itemStyle: {
                        color: '#FF6A6A'
                    },
                    showSymbol: false
                },
                {
                    name: 'observation',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_5;
                    }),
                    itemStyle: {
                        color: "#FFFAF0"
                    },
                    showSymbol: false
                },
                {
                    name: 'blue_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_3;
                    }),
                    itemStyle: {
                        color: '#00F5FF'
                    },
                    showSymbol: false
                },
                {
                    name: 'green_line',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value_4;
                    }),
                    itemStyle: {
                        color: '#2E8B57'
                    },
                    showSymbol: false
                }
            ]
        }), true);  
        } else if (selectedLine === 'line1') {
                myChart_gmst.setOption(Object.assign({}, commonOptions, {
                tooltip: {
                    trigger: 'axis',
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
                    formatter: function (params) {
                        return (
                            params[2].name +
                            '<br />' +
                            (params[2].value).toFixed(3) +
                            '°C'
                        );
                        }
                },
                yAxis: {
                axisLabel: {
                    formatter: function (val) {
                    return val - base1 + '°C';
                    },
                    color: '#D3D3D3'
                },
                axisPointer: {
                    label: {
                    formatter: function (params) {
                        return (params.value - base1).toFixed(1) + '°C';
                    }
                    }
                },
                splitNumber: 3
                },
                series: [
                    {
                    name: 'grey_L1',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.l_1 + base1; 
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                    },
                    {
                        name: 'grey_U1',
                        type: 'line',
                        data: data.map(function (item) {
                        return item.u_1 - item.l_1;
                        }),
                        lineStyle: {
                        opacity: 0
                        },
                        areaStyle: {
                        color: '#E8E8E8'
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'grey_line',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_1 + base1;
                        }),
                        itemStyle: {
                            color: '#9C9C9C'
                        },
                        showSymbol: false
                    },
                    {
                        name: 'observation',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_5 + base1;
                        }),
                        itemStyle: {
                            color: "#FFFAF0"
                        },
                        showSymbol: false
                    }
                ]
            }), true);
        } else if (selectedLine === 'line2') {
            myChart_gmst.setOption(Object.assign({}, commonOptions, {
                tooltip: {
                    trigger: 'axis',
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
                    formatter: function (params) {
                        return (
                            params[2].name +
                            '<br />' +
                            (params[2].value).toFixed(3) +
                            '°C'
                        );
                        }
                },
                yAxis: {
                axisLabel: {
                    formatter: function (val) {
                    return val - base2 + '°C';
                    },
                    color: '#D3D3D3'
                },
                axisPointer: {
                    label: {
                    formatter: function (params) {
                        return (params.value - base2).toFixed(1) + '°C';
                    }
                    }
                },
                splitNumber: 3
                },
                series: [
                    {
                        name: 'red_L1',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.l_2 + base2; 
                        }),
                        lineStyle: {
                            opacity: 0
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'red_U1',
                        type: 'line',
                        data: data.map(function (item) {
                        return item.u_2 - item.l_2;
                        }),
                        lineStyle: {
                        opacity: 0
                        },
                        areaStyle: {
                        color: '#FFC1C1'
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'red_line',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_2 + base2;
                        }),
                        itemStyle: {
                            color: '#FF6A6A'
                        },
                        showSymbol: false
                    },
                    {
                        name: 'observation',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_5 + base2;
                        }),
                        itemStyle: {
                            color: "#FFFAF0"
                        },
                        showSymbol: false
                    }
                ]
            }), true);
        } else if (selectedLine === 'line3') {
            myChart_gmst.setOption(Object.assign({}, commonOptions, {
                tooltip: {
                    trigger: 'axis',
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
                    formatter: function (params) {
                        return (
                            params[2].name +
                            '<br />' +
                            (params[2].value).toFixed(3) +
                            '°C'
                        );
                        }
                },
                yAxis: {
                axisLabel: {
                    formatter: function (val) {
                    return val - base3 + '°C';
                    },
                    color: '#D3D3D3'
                },
                axisPointer: {
                    label: {
                    formatter: function (params) {
                        return (params.value - base3).toFixed(1) + '°C';
                    }
                    }
                },
                splitNumber: 3
                },
                series: [
                    {
                        name: 'blue_L',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.l_3 + base3; 
                        }),
                        lineStyle: {
                            opacity: 0
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'blue_U',
                        type: 'line',
                        data: data.map(function (item) {
                        return item.u_3 - item.l_3;
                        }),
                        lineStyle: {
                        opacity: 0
                        },
                        areaStyle: {
                        color: '#D1EEEE'
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'blue_line',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_3 + base3;
                        }),
                        itemStyle: {
                            color: '#00F5FF'
                        },
                        showSymbol: false
                    },
                    {
                        name: 'observation',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_5 + base3;
                        }),
                        itemStyle: {
                            color: "#FFFAF0"
                        },
                        showSymbol: false
                    }
                ]
            }), true);
        } else if (selectedLine === 'line4') {
            myChart_gmst.setOption(Object.assign({}, commonOptions, {
                tooltip: {
                    trigger: 'axis',
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
                    formatter: function (params) {
                        return (
                            params[2].name +
                            '<br />' +
                            (params[2].value).toFixed(3) +
                            '°C'
                        );
                        }
                },
                yAxis: {
                axisLabel: {
                    formatter: function (val) {
                    return val - base4 + '°C';
                    },
                    color: '#D3D3D3'
                },
                axisPointer: {
                    label: {
                    formatter: function (params) {
                        return (params.value - base4).toFixed(1) + '°C';
                    }
                    }
                },
                splitNumber: 3
                },
                series: [
                    {
                        name: 'green_L',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.l_4 + base4; 
                        }),
                        lineStyle: {
                            opacity: 0
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'green_U',
                        type: 'line',
                        data: data.map(function (item) {
                        return item.u_4 - item.l_4;
                        }),
                        lineStyle: {
                        opacity: 0
                        },
                        areaStyle: {
                        color: '#90EE90'
                        },
                        stack: 'confidence-band',
                        symbol: 'none'
                    },
                    {
                        name: 'green_line',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_4 + base4;
                        }),
                        itemStyle: {
                            color: '#2E8B57'
                        },
                        showSymbol: false
                    },
                    {
                        name: 'observation',
                        type: 'line',
                        data: data.map(function (item) {
                            return item.value_5 + base4;
                        }),
                        itemStyle: {
                            color: "#FFFAF0"
                        },
                        showSymbol: false
                    }
                ]
            }), true);
        }
    });
});
// option && myChart.setOption(option);

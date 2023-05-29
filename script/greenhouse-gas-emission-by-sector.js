var chartDomd = document.getElementById('greenhouse-gas-emission');
var myChartd = echarts.init(chartDomd);
var optiond;

var data = [
  {
    name: 'Energy',
    value: 73.2,
    itemStyle: {
      color: 'rgba(70, 140, 112, 0.7)',
    },
    children: [
      {
        name: 'Energy use \n in Industry',
        value: 24.2,
        itemStyle: {
          color: 'rgba(15, 85, 57, 0.7)'
        },
        children: [
          {
            name: 'Iron and steel',
            value: 7.2,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
          {
            name: 'Non-ferrous\nmetais',
            value: 0.7,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },          
          {
            name: 'Chemical & \n petrochemical',
            value: 3.6,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
          {
            name: 'Food & tobacco',
            value: 1,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
          {
            name: 'Paper & pulp',
            value: 0.6,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
          {
            name: 'Machinery',
            value: 0.5,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
          {
            name: 'Other \n Industry',
            value: 10.6,
            itemStyle: {
              color: 'rgba(15, 85, 57, 0.7)'
            }
          },
        ]
      },
      {
        name: 'Transport',
        itemStyle: {
          color: 'rgba(40, 113, 84, 0.7)'
        },
        children: [
          {
            name: 'Road \n Transport',
            value: 11.9,
            itemStyle: {
              color: 'rgba(40, 113, 84, 0.7)'
            }
          },
          {
            name: 'Aviation',
            value: 1.9,
            itemStyle: {
              color: '#287154'
            }
          },
          {
            name: 'Shipping',
            value: 1.7,
            itemStyle: {
              color: 'rgba(40, 113, 84, 0.7)'
            }
          },
          {
            name: 'Rail',
            value: 0.4,
            itemStyle: {
              color: 'rgba(40, 113, 84, 0.7)'
            }
          },
          {
            name: 'Pipeline',
            value: 0.3,
            itemStyle: {
              color: 'rgba(40, 113, 84, 0.7)'
            }
          },          
        ]
      },
      {
        name: 'Energy use \n in buildings',
        itemStyle: {
          color: 'rgba(110, 167, 144, 0.7)'
        },
        children: [
          {
            name: 'Residential buildings',
            value: 10.9,
            itemStyle: {
              color: 'rgba(110, 167, 144, 0.7)'
            }
          },
          {
            name: 'Commercial',
            value: 6.6,
            itemStyle: {
              color: 'rgba(110, 167, 144, 0.7)'
            }
          }
        ]
      },
      {
        name: 'Unallocated fuel \n combustion',
        value: 7.8,
        itemStyle:{
          color: 'rgba(110, 167, 144, 0.7)',
        },
      },
      {
        name: 'Fugitive emissions \n from energy production',
        value: 5.8,
        itemStyle:{
          color: 'rgba(161, 201, 185, 0.65)',
        }  
      },
      {
        name: 'Energy in Agriculture \n & Fishing',
        value: 1.7,
        itemStyle:{
          color: 'rgba(161, 201, 185, 0.65)',
        }  
      }
    ]
  },
  {
    name: 'Industry',
    value: 5.2,
    itemStyle: {
      color: 'rgba(205, 182, 103, 0.7)'
    },
    children: [
      {
        name: 'Cement',
        value: 3,
        itemStyle: {
          color: 'rgba(166, 142, 58, 0.7)'
        }
      },
      {
        name: 'Chemicals',
        value: 2.2,
        itemStyle: {
          color: 'rgba(245, 227, 161, 0.55)'
        },
          }
        ]
      },
  {
    name: 'Waste',
    value: 3.2,
    itemStyle: {
      color: 'rgba(252, 138, 86, 0.7)'
    },
    children: [
      {
        name: ' Wastewater',
        value: 1.3,
        itemStyle: {
          color: 'rgba(230, 105, 48, 0.7)'
        }
      },
      {
        name: 'Landfills',
        value: 1.9,
        itemStyle: {
          color: 'rgba(255, 163, 122, 0.65)'
        }
      }
    ]
  },
  {
    name: 'Agriculture, \nForestry & \n Land Use',
    value: 18.4,
    itemStyle: {
      color: 'rgba(177, 197, 99, 0.7)'
    },
    children: [
      {
        name: 'grassland',
        value: 0.1,
        itemStyle: {
          color: 'rgba(100, 119, 22, 0.7)'
        }
      },
      {
        name: 'Cropland',
        value: 1.4,
        itemStyle: {
          color: 'rgba(100, 119, 22, 0.7)'
        }
      },
      {
        name: 'Deforestation',
        value: 2.2,
        itemStyle: {
          color: 'rgba(118, 154, 54, 0.7)'
        }
      },
      {
        name: 'Crop burning',
        value: 3.5,
        itemStyle: {
          color: 'rgba(138, 159, 56, 0.7)'
        }  
      },
      {
        name: 'Rice cultivation',
        value: 1.3,
        itemStyle: {
          color: 'rgba(200, 237, 132, 0.58)'
        }  
      },
      {
        name: 'Agricultural \n soils',
        value: 4.1,
        itemStyle: {
          color: 'rgba(219, 236, 155, 0.57)'
        }  
      }, 
      {
        name: 'Livestock \n manure',
        value: 5.8,
        itemStyle: {
          color: 'rgba(238, 248, 199, 0.53)'
        }  
      },
    ]
  },
];
optiond = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}%'
  },
  title: {
    text: 'Global greenhouse gas emissions by sector',
    subtext: 'This is for the year 2016 - global greenhouse emissions were 49.4 billion tonnes CO2eq.',
    textStyle: {
      fontSize: 18,
      align: 'center',
      color: '#D3D3D3'
    },
    subtextStyle: {
      align: 'center',
      color: '#D3D3D3'
    }
    // sublink: ''
  },
  series: {
    name: 'Proportion',
    type: 'sunburst',
    data: data,
    radius: [0, '98%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    levels: [
      {},
      {
        r0: '0%',
        r: '30%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          // rotate: 'tangential'
          align: 'center',
          color: '#FFFFFF'
        }
      },
      {
        r0: '35%',
        r: '73%',
        label: {
          align: 'center',
          color: '#FFFFFF'
        }
      },
      {
        r0: '78%',
        r: '80%',
        label: {
          position: 'outside',
          padding: 2,
          silent: false,
          color: '#FFFFFF'
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ]
  }
};

if (optiond && typeof optiond === 'object') {
  myChartd.setOption(optiond);
}

window.addEventListener('resize', myChartd.resize);
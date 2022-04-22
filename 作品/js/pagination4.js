// 热度排行
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    
    var year =["2021年12月","2021年11月","2021年10月","2021年9月","2021年8月","2021年7月","2021年6月","2021年5月","2021年4月","2021年3月","2021年2月","2021年1月","2020年12月","2020年11月","2020年10月","2020年9月","2020年8月","2020年7月","2020年6月","2020年5月","2020年4月","2020年3月","2020年2月","2020年1月","2019年12月","2019年11月","2019年10月","2019年9月","2019年8月","2019年7月","2019年6月","2019年5月","2019年4月","2019年3月","2019年2月","2019年1月","2018年12月","2018年11月","2018年10月","2018年9月","2018年8月","2018年7月","2018年6月","2018年5月","2018年4月","2018年3月","2018年2月","2018年1月","2017年12月","2017年11月","2017年10月","2017年9月","2017年8月","2017年7月","2017年6月","2017年5月","2017年4月","2017年3月","2017年2月","2017年1月","2016年12月","2016年11月","2016年10月","2016年9月","2016年8月","2016年7月","2016年6月","2016年5月","2016年4月","2016年3月","2016年2月","2016年1月","2015年12月","2015年11月","2015年10月","2015年9月","2015年8月","2015年7月","2015年6月","2015年5月","2015年4月","2015年3月","2015年2月","2015年1月","2014年12月","2014年11月","2014年10月","2014年9月","2014年8月","2014年7月","2014年6月","2014年5月","2014年4月","2014年3月","2014年2月","2014年1月","2013年12月","2013年11月","2013年10月","2013年9月","2013年8月","2013年7月","2013年6月","2013年5月","2013年4月","2013年3月","2013年2月","2013年1月","2012年12月","2012年11月","2012年10月","2012年9月","2012年8月","2012年7月","2012年6月","2012年5月","2012年4月","2012年3月","2012年2月","2012年1月"]
    var data = [
[	10.12	,	11.8	,	12.9,1.50,1.79	],
[	10.72	,	10.72	,	11.77,1.81,2.11	],
[	10.46	,	11.16	,	11.27,2.10,2.17	],
[	11.12	,	11.83	,	11.67,1.85,1.80],
[	10.43	,	12.57	,	11.86,2.19,1.47	],
[	11.17	,	11.62	,	10.95,2.58,1.53	],
[	11.54	,	12.54	,	11.84,2.21,1.88	],
[	11.74	,	13.38	,	11.87,1.86,1.71	],
[	11.23	,	14.32	,	11.03,1.84,1.83	],
[	10.45	,	15.33	,	10.31,2.07,1.87	],
[	11.29	,	16.34	,	10.86,1.75,1.72	],
[	11.96	,	17.38	,	11.72,1.99,1.61	],
[	12.53	,	16.48	,	12.21,2.12,1.53	],
[	11.68	,	16.21	,	12.12,2.09,1.57	],
[	12.56	,	16.95	,	11.28,2.09,1.57	],
[	13.48	,	15.95	,	10.47,2.49,1.76	],
[	14.43	,	16.98	,	9.69,2.24,1.46	],
[	15.1	,	16.45	,	9.09,1.90,0.68	],
[	16.1	,	17.19	,	8.36,2.26,1.73	],
[	16.28	,	17.07	,	9.12,2.37,1.91	],
[	16.73	,	16.72	,	9.31,2.42,2.14	],
[	17.78	,	16.33	,	10.11,2.22,2	],
[	17.36	,	16.77	,	9.35,2.02,1.63	],
[	11.96	,	17.38	,	11.72,2.25,1.51	],//2020
[	17.25	,	16.09	,	10.31,2.17,1.72	],
[	16.27	,	16.04	,	9.84,1.84,1.75	],
[	16.89	,	16.18	,	9.09,1.83,1.82	],
[	16.66	,	15.2	,	9.87,1.88,1.94	],
[	16.02	,	15.15	,	10.02,2.04,1.69	],
[	15.06	,	14.21	,	9.26,2.21,1.8	],
[	15.01	,	13.3	,	8.53,2.43,2.14	],
[	16.01	,	14.24	,	8.1,2.52,2.41	],
[	15.03	,	14.07	,	8.17,2.39,2.45	],
[	14.88	,	13.3	,	8.26,2.37,2.03	],
[	15.87	,	12.42	,	7.58,2.31,1.91	],
[	16.9	,	13.33	,	8.3,2.61,2.21	],//2019
[	16.29	,	13.93	,	8.35,2.52,2.28	],
[	16.54	,	14.37	,	7.86,2.4,2.28	],
[	17.35	,	14.96	,	7.38,2.62,2.28	],
[	17.61	,	15.42	,	7.42,2.78,2.28	],
[	17.09	,	15.12	,	7.2,2.89,2.28	],
[	16.57	,	14.84	,	6.72,2.86,2.29	],
[	15.59	,	14.88	,	5.93,2.87,2.27	],
[	15.97	,	14.38	,	5.42,3.17,2.27	],
[	16.17	,	13.85	,	5.41,3.98,2.32	],
[	15.63	,	13.44	,	5.81,4.04,2.31	],
[	14.97	,	12.24	,	5.47,3.6,2.26	],
[	14.59	,	11.43	,	4.91,2.95,2.27	],//2018
[	13.67	,	10.53	,	4.15,1.85,2.27	],
[	13.25	,	9.68	,	4.16,1.76,2.27	],
[	12.85	,	8.85	,	4.15,2.42,2.27	],
[	12.54	,	7.97	,	3.47,2.41,2.27	],
[	12.79	,	7.06	,	3.23,2.26,2.27	],
[	13.47	,	7	,	3.64,2.79,2.27	],
[	14.18	,	7.05	,	3.99,2.91,2.26	],
[	14.58	,	6.93	,	3.97,2.72,2.26	],
[	14.88	,	6.99	,	3.53,3.15,2.27	],
[	16.15	,	7.52	,	3.79,3.36,2.26	],
[	16.58	,	8.15	,	3.99,3.02,2.3	],
[	17.17	,	9.16	,	3.57,2.59,2.31	],//2017
[	17.68	,	8.94	,	3.97,2.59,2.26	],
[	18.36	,	8.02	,	3.88,2.97,2.26	],
[	18.77	,	9.5	,	3.66,2.95,2.26	],
[	18.64	,	10.16	,	3.92,2.74,2.26	],
[	18.44	,	11.04	,	4.33,3.2,2.26	],
[	19.4	,	11.76	,	4.29,2.87,2.26	],
[	20.4	,	12.32	,	4.01,3.24,2.25	],
[	20.9	,	12.92	,	3.89,3.09,2.25	],
[	20.89	,	13.69	,	3.48,2.99,2.25	],
[	20.65	,	14.34	,	3.91,2.85,2.22	],
[	20.89	,	15.19	,	4.21,2.77,2.25	],
[	21.33	,	15.85	,	3.99,2.74,2.25	],//2016
[	21.29	,	16.24	,	4.13,2.76,2.25	],
[	20.46	,	17.09	,	3.83,3.03,2.25	],
[	19.95	,	16.69	,	4.16,2.89,2.25	],
[	19.55	,	15.86	,	4.02,2.53,2.25	],
[	19.39	,	15.09	,	3.92,2.62,2.25	],
[	18.37	,	15.56	,	4.18,2.87,2.25	],
[	17.78	,	16.48	,	4.13,2.88,2.24	],
[	17.46	,	46.81	,	3.89,2.77,2.24	],
[	16.63	,	16.54	,	3.43,2.91,2.24	],
[	15.84	,	16.13	,	2.66,3.66,2.23	],
[	15.47	,	16.57	,	2.73,3.62,2.24	],
[	15.44	,	16.6	,	2.74,3.54,2.24	],//2015
[	15.17	,	17.26	,	2.41,3.08,2.25	],
[	14.58	,	17.51	,	2.49,2.94,2.25	],
[	13.75	,	17.61	,	2.4,2.98,2.24	],
[	13.77	,	17.26	,	2.52,3.04,2.24	],
[	14.5	,	16.56	,	2.93,2.91,2.24	],
[	15.25	,	16.68	,	2.94,2.9,2.24	],
[	15.77	,	16.96	,	2.67,2.88,2.43	],
[	16.17	,	16.24	,	2.74,3.13,2.23	],
[	17.14	,	17.3	,	2.49,2.94,2.23	],
[	16.96	,	17.59	,	2.08,3.71,2.23	],
[	16.78	,	17.86	,	2.25,4.38,2.23	],
[	16.83	,	18.09	,	2.27,4.74,2.23	],//201401
[	16.8	,	17.92	,	2.52,5.33,2.23	],
[	17.04	,	17.95	,	3.11,5.75,2.23	],
[	16.43	,	17.97	,	3.12,6.29,2.23	],
[	16.12	,	17.2	,	3.25,6.58,2.23	],
[	16.04	,	16.34	,	3.87,9.02,2.23	],
[	15.97	,	16.34	,	4.03,7.19,2.23	],
[	16.09	,	17.67	,	4.07,6.45,2.22	],
[	16.76	,	18.18	,	4.24,5.87,2.22	],
[	17.39	,	18.19	,	4.39,5.56,2.22	],
[	17.89	,	17.65	,	4.42,5.02,2.22	],
[	18.2	,	17.13	,	4.49,4.96,2.22	],
[	18.24	,	17.2	,	4.85,5.36,2.22	],
[	17.51	,	18.37	,	3.97,5.54,2.22	],
[	17.51	,	18.97	,	3.96,5.63,2.22	],
[	17.26	,	19.63	,	3.95,5.69,2.22	],
[	16.55	,	19.46	,	3.87,5.63,2.22	],
[	16.32	,	19.07	,	3.95,5.56,2.22	],
[	16.21	,	18.61	,	3.92,5.22,2.22	],
[	16.13	,	18.2	,	3.84,5.17,2.22	],
[	16.41	,	17.55	,	3.75,5.48,2.21	],
[	16.91	,	17.49	,	3.39,5.65,2.21	],
[	17.09	,	17.24	,	3.2	,5.35,2.21],
[	17.08	,	16.78	,	3.18,5.6,2.21	],
[	17.17	,	16.64	,	3.29,5.67,2.21	],

]
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例',
        },
        tooltip: {
            trigger: 'axis',
            extraCssText:"width:100px;height:60px",
            axisPointer: {
                type: 'shadow'
            },
        },
        grid: {
            right:'0%',
            left: '10%',
            right: '5%',
            bottom: '10%',
        },
        yAxis: {
            data: ['Java', 'C', 'Python', 'Php','SQL'],
            inverse: true,
        },
        xAxis: {
            splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
        },
        series: [{
            realtimeSort: true,
            name: '热度 ',
            showBackground: true,
            label: {
                fontsize:20,
                show: true,
                position: 'right',
                valueAnimation: true
            },
            stack: {},
            type: 'bar',
            data: [120, 206, 392, 150],
            barWidth: 30,
            itemStyle: {
                normal:{  
                  barBorderRadius: 8,//圆角
                color: function (params){
                    var colorList = ["#E9B959","#295494","#92DED2","#B7AE8F","#B7AE8F"];
                    return colorList[params.dataIndex];
                }
            },
          },
        }],
        animationDuration: 0,
        animationDurationUpdate: 500,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    for (let i = 0; i < data.length; i++) {
        setTimeout(function() {
            var option1 = {
                title: {
                    text: year[data.length - i - 1].toString()
                },
                series: [{
                    data: data[data.length - i - 1]
                }]
            }
            console.log(option1)
            myChart.setOption(option1)
        }, 500 * i)
    }

    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();





// Python开发方向
(function(){
    var myChart = echarts.init(document.querySelector(".tree1 .chart"));
    const themeColor = '#00ffff';
  const fontColor = '#040624'
  const childrenColor = '#39fdc0';
  let cityList = ['软件开发', '人工智能', '科学计算', '数据分析', ' Web开发', '网络爬虫'];
  const seriesTree = () => {
      return cityList.map((item, index) => {
          return {
              name: item,
              value: index,
              symbolSize: 50,
              label: {
                  position: 'inside',
              },
              lineStyle: {
                  color: childrenColor
              },
              itemStyle: {
                  borderColor: childrenColor,
                  color: childrenColor,
              },
          };
      });
  };
  
  option = {

      // 工具栏
      toolbox: {
          show: true,
          feature: {
              borderColor: fontColor
          },
      },
      
      series: [
          {
              type: 'tree',
              layout: 'radial',   // 径向布局
              symbol: 'circle',   // 设置样式
              hoverAnimation: true,           // hover样式
              animationDurationUpdate: 1000, // 数据更新动画时长
              expandAndCollapse: true,       // 子树折叠和展开的交互
              roam: true,                    // 开始鼠标缩放和平移漫游
              symbolSize: 20,
              label: {
                  color: fontColor,
                  rotate: 0,
              },
              data: [
                  {
                      name: 'Python应用方向',
                      value: 0,
                      symbolSize: 80,
                      color: '#f40',
                      itemStyle: {
                          borderColor: themeColor,
                          color: themeColor,
                      },
                      label: {
                          position: 'inside',
                      },
                      children: seriesTree()
                  },
              ],
          },
      ],
  };
  
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();


//   C语言应用方向
(function(){
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
        tooltip : {
            trigger : 'item',
            formatter : "{b}:{c} ({d}%)"
        },
        series: [
            {
                type: 'pie',
                zlevel: 5,
                radius: ['14%', '60%'],
                center: ['50%', '50%'],
                roseType: 'area',
                data : [
                    {
                        name : 'Windows',
                        value : '33',
                        itemStyle : {
                            normal : {
                                color: "rgba(40, 242, 230, 1)",
                                borderWidth: 0
                            }
                        }
                    },
                    {
                        name : 'Linux/UNIC',
                        value : '33',
                        itemStyle : {
                            normal : {
                                color: "rgba(36, 180, 255, 0.5)",
                                borderWidth: 0
                            }
                        }
                    },
                    {
                        name : 'Embedded',
                        value : '33',
                        itemStyle : {
                            normal : {
                                color: "rgba(255, 201, 92, 0.5)",
                                borderWidth: 0
                            }
                        }
                    },
                ],
                label: {
                    normal: {
                        color: '#88A8D6'
                    },
                },
                labelLine: {
                    normal: {
                        length2 : 60,
                        lineStyle : {
                            color: '#88A8D6'
                        }
                    }
                }
            }, 
         
            {
                type: 'pie',
                zlevel: 7,
                silent: true,
                radius: ['61%', '60%'],
                hoverAnimation: false,
                color: 'red',
                label: {
                    normal: {
                        show: false
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [1,1,1]
            },
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();


// Java
(function(){
    var myChart = echarts.init(document.querySelector(".tree .chart"));
    let points = [
        {
            name: 'Java开发',
            symbolSize: 80,
            category: 0,
        },
        {
            name: 'Spring',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'Servlet',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'EJB',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'JMS',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'JSF',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'JDBC/JPA',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'JAXB',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'JAX-WS',
            symbolSize: 80,
            category: 1,
        },
        {
            name: 'Java EE',
            symbolSize: 80,
            category: 2,
        },
        {
            name: 'Spring Framework',
            symbolSize: 80,
            category: 2,
        },
        {
            name: 'Spring MVC',
            symbolSize: 80,
            category: 2,
        },
        {
            name: 'Spring Data',
            symbolSize: 80,
            category: 2,
        },
        {
            name: 'Spring Security',
            symbolSize: 80,
            category: 2,
        },
    ];
    let links = [
        {
            source: 'Java开发',
            target: 'Spring',
        },
        {
            source: 'Java开发',
            target: 'Java EE',
        },
        {
            source: 'Spring',
            target: 'Servlet',
        },
        {
            source: 'Spring',
            target: 'EJB',
        },
        {
            source: 'Spring',
            target: 'JMS',
        },
        {
            source: 'Spring',
            target: 'JSF',
        },
        {
            source: 'Spring',
            target: 'JDBC/JPA',
        },
        {
            source: 'Spring',
            target: 'JAXB',
        },
        {
            source: 'Spring',
            target: 'JAX-WS',
        },
        {
            source: 'Java开发',
            target: 'Java EE',
        },
        {
            source: 'Java EE',
            target: 'Spring Security',
        },
        {
            source: 'Java EE',
            target: 'Spring Framework',
        },
        {
            source: 'Java EE',
            target: 'Spring MVC',
            value: 'DNA',
        },
        {
            source: 'Java EE',
            target: 'Spring Data',
        },
    ];
    option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        series: [
            {
                type: 'graph',
                layout: 'force',
                force: {
                    repulsion: 1500,
                    edgeLength: 30,
                },
                roam: true,
                label: {
                    normal: {
                        show: true,
                    },
                },
                data: points,
                links: links,
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 5,
                        curveness: 0,
                    },
                },
                categories: [{ name: '0' }, { name: '1' }, { name: '2' }],
            },
        ],
    };
    
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();

// 水球图企业性质分布图
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    let normal = 123124;
    let loseC = 23205;
    let lateE = 19808;
    let checkL = 15133;
    let checkB = 11841;
    let differentD = 7287;
    let A = 2353;
    let B = 450;
    let C = 28;
    let sum = normal + loseC + lateE + checkL + checkB + differentD+A+B+C;
    let norP = sum ? ((normal * 100) / sum).toFixed(2) : 0;
    let loginPer = sum ? ((normal * 100) / sum).toFixed(2) : 0;
    let chartData = [
        { value: normal, name: '民营公司' },
        { value: loseC, name: '上市公司' },
        { value: lateE, name: '外资' },
        { value: checkL, name: '国企' },
        { value: checkB, name: '合资' },
        { value: differentD, name: '事业单位' },
        { value: A, name: '创业公司' },
        { value: B, name: '非营利组织' },
        { value: C, name: '政府机关' },
    ];

    var option = {
        
    legend: {
        textStyle: {
            color: '#4c9bfd' // 图例文字颜色

        },
        right: '10%',
        orient: 'vertical',
        left: '5%',
        top: '10%',
        formatter(params) {
            let str = '';

            console.log('params', params);
            chartData.forEach((key) => {
                let per = key.value ? ((key.value * 100) / sum).toFixed(2) + '%' : 0;
                if (key.name === params) {
                    str = key.name + ' ' + per;
                } else if (params === '民营公司') {
                    str = params;
                }
            });
            return str;
        },
    },
    title: {
        top: '45%',
        left: '73%',
        text:'民营公司',
        textStyle: {
            color: 'rgb(173, 157, 205)',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
        },
        subtext: loginPer + '%',
        subtextStyle: {
            color: 'rgb(173, 157, 205)',
            fontSize: 20,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '企业类型<br/>{b}  {c} ({d}%)',
    },
    toolbox: {
        show: true,
        feature: {
          restore: { show: true },
        }
    },
    series: [
        {
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue',
                },
            },
            name: chartData,
            data: [
                {
                    value: loginPer / 100,
                    itemStyle: {
                        normal: {
                            color: '#53d5ff',
                            opacity: 0.6,
                        },
                    },
                },
            ],
            color: ['#53d5ff'],
            center: ['80%', '50%'],
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 0,
                },
                borderDistance: 0,
            },
        },
        {
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['80%', '50%'],
            color: ['orange', '#dfd0e6', '#49dff0', '#034079', '#6f81da', '#00ffb4',"#25BCFC","#FCCC3C","#FF4C28","#85E822"],
            hoverAnimation: false, ////设置饼图默认的展开样式
            label: {
                show: false,
                // normal: {
                //   formatter: "{b}\n{d}%",
                //   show: true,
                //   position: "",
                // },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },

            itemStyle: {
                // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            data: chartData,
        },
    ],
};
  //3.把配置项给到实例对象
myChart.setOption(option);
  // 4.图表自适应
window.addEventListener("resize", function() {
    myChart.resize();
});
})();

// 漏斗图 公司规模分布图
(function(){
    var myChart = echarts.init(document.querySelector(".pie1 .chart"));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}  {c} ({d}%)'
        },
        
        calculable: true,
        series: [
            {
                name:'漏斗图',
                type:'funnel',
                left: '10%',
                top: 20,
                //x2: 80,
                bottom: 20,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 5000,
                max: 45000,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [
                    { name: '50-150人', value: 42288 },
        { name: '150-500人', value: 41128 },
        { name: '1000-5000人', value: 30015 },
        { name: '少于50人', value: 25032 },
        { name: '500-1000人', value: 22098 },
        { name: '10000人以上', value: 14795 },
        { name: '5000-10000人', value: 8855 },
                ]
            }
        ]
    };
    
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 条转饼 行业——规模图
(function(){
    var myChart = echarts.init(document.querySelector(".randar .chart"));
    let option1 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
    
            },
        },
        series: [
            {
                name: '规模',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 25032, name: '少于50人'},
                    {value: 42288, name: '50-150人'},
                    {value: 41128, name: '150-500人'},
                    {value: 22098, name: '500-1000人'},
                    {value: 30015, name: '1000-5000人'},
                    {value: 5655, name: '5000-10000人'},
                    {value: 14795, name: '10000人以上'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
            toolbox: {
            feature: {
                restore: { show: true },
                myTool1: {
                    show: true,
                    title: '返回',
                    icon: 'image://http://jun.one/img/return.png',
                    onclick: function (){
                        setOption2()
                    }
                }
            }
        }
    };
    
    var option = {
        xAxis: {
            type: 'category',
            data: ["互联网","制造业","金融","通信","汽车行业","房地产","传媒","服务","公共事业","医药"]
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
        },
        grid: {
            left: '11%',
            top: '8%',
            right: '5%',
            bottom: '10%',
        },
        series: [{
            data: [92568,26078,12762,38361,8659,2587,9072,941,2895,9421],
            itemStyle: {
                normal:{  
                  barBorderRadius: 8,//圆角
                color: function (params){
                    var colorList = ['#2b73af','#f33b1f','#ffc408','#806d9e',"#8E981F","#8E981F","#321D58","#321D58","#DB7631","#354561"];
                    return colorList[params.dataIndex];
                }
            },
          },
            type: 'bar'
        }],
    };
    
    myChart.on('click',(params)=>{
        myChart.clear();
        option && myChart.setOption(option1);
     })
    
    option && myChart.setOption(option);
    
    const setOption2 = () => {
        myChart.clear();
        console.log(option);
        option && myChart.setOption(option);
    }
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 桑基图 行业分布图
(function(){
    var myChart = echarts.init(document.querySelector(".pie3 .chart"));
    let datalist = [{
        name: "互联网"
    },
    {
        name: "服务"
    },
    {
        name: "房地产"
    },
    {
        name: "医药"
    },
    {
        name: "汽车"
    },
    {
        name: "行业"
    },
    {
        name: "通信"
    },
    {
        name: "传媒"
    },
    {
        name: "制造业"
    },
    {
        name: "金融"
    },
    {
        name: "公共事业"
    }
];
let linksData = [{
        source: "互联网",
        target: "行业",
        value: 92568
    },
    {
        source: "服务",
        target: "行业",
        value: 941
    },
    {
        source: "房地产",
        target: "行业",
        value: 1587
    },
    {
        source: "医药",
        target: "行业",
        value: 9421
    },
    {
        source: "汽车",
        target: "行业",
        value: 8659
    },
    {
        source: "行业",
        target: "通信",
        value: 38361
    },
    {
        source: "行业",
        target: "传媒",
        value: 9072
    },
    {
        source: "行业",
        target: "制造业",
        value: 26078
    },
    {
        source: "行业",
        target: "金融",
        value: 12762
    },
    {
        source: "行业",
        target: "公共事业",
        value: 2895
    }
];
let Color = [
    "#4E70F0",
    "#2cb8cf",
    "#54c189",
    "#f5d523",
    "#2cb8cf",
    "#f5b823",
    "#8f23f5",
    "#0576ea",
    "#2cb8cf",
    "#8A7EE0",
    "#2cb8cf",
    "#4e70f0",
    "#1fa3de",
    "#bbc951",
    "#FFC14B",
    "#b785a6",

];
let sourceLabel = [
    "right",
    "right",
    "right",
    "right",
    "right",
    "left",
    "left",
    "left",
    "left",
    "left"
];
let itemStyleColor = [];
let labelSource = [];
for (let i = 0; i < datalist.length; i++) {
    datalist[i].label = {
        normal: {
            position: sourceLabel[i]
        }
    };
    labelSource.push(sourceLabel[i]);
}
for (let d = 0; d < datalist.length; d++) {
    datalist[d].itemStyle = {
        normal: {
            color: Color[d]
        }
    };
    itemStyleColor.push(datalist[d]);
}
option = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
        formatter: function(params) {
            if (params.name == "行业") {
                return " 行业 "
            } else {
                let value = params.data.value;
                if (!value && value !== 0) return 0;
                let str = value.toString();
                let reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
                if (params.data.source == "行业") {
                    return params.data.target + " : " + str.replace(reg, "$1,");
                } else {
                    return params.data.source + " : " + str.replace(reg, "$1,");
                }
            }
        }
    },
    series: [{
        type: "sankey",
        layout: "none",
        top: "4%",
        bottom: "12%",
        left: "20",
        right: "20",
        nodeGap: 15,
        nodeWidth: 25,
        focusNodeAdjacency: "allEdges",
        data: itemStyleColor,
        links: linksData,
        label: {
            normal: {
                color: "#fff",
                fontSize: 14,
                formatter: function(params) {
                    if (params.data.name == '行业') {
                        let strs = params.data.name.split(''); //字符串数组
                        let str = ''
                        for (let i = 0, s; s = strs[i++];) { //遍历字符串数组
                            str += s;
                            if (!(i % 1)) str += '\n'; //按需要求余
                        }
                        return "{white|" + str + "}"
                    } else {
                        return params.data.name
                    }
                },
                rich: {
                    white: {
                        fontSize: 16,
                        lineHeight: 30,
                        padding: [0, 0, 0, -26]
                    }
                }
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.4,
                color: "source",
                curveness: 0.5
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: "transparent"
            }
        }
    }]
};
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//时间轴 企业类型——规模分布图
(function(){
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    
var databeast = {
    1: [{name: '少于50人',value: 98},
                        {name: '50-150人',value: 92},
                        {name: '150-500人',value: 183},
                        {name: '500-1000人',value: 141},
                        {name: '1000-5000人',value: 111},
                        {name: '5000-10000人',value: 40},
                        {name: '10000人以上',value: 242},],
    2: [
            {name: '少于50人',value: 3639},
            {name: '50-150人',value: 7506},
            {name: '150-500人',value: 8250},
            {name: '500-1000人',value: 4396},
            {name: '1000-5000人',value: 6245},
            {name: '5000-10000人',value: 1225},
            {name: '10000人以上',value: 2723},],
    3: [{name: '少于50人',value: 2954},
                        {name: '50-150人',value: 5316},
                        {name: '150-500人',value: 5731},
                        {name: '500-1000人',value: 3234},
                        {name: '1000-5000人',value: 4603},
                        {name: '5000-10000人',value: 912},
                        {name: '10000人以上',value: 1037},],
    4: [{name: '少于50人',value: 1582},
                        {name: '50-150人',value: 2425},
                        {name: '150-500人',value: 1899},
                        {name: '500-1000人',value: 2056},
                        {name: '1000-5000人',value: 2020},
                        {name: '5000-10000人',value: 550},
                        {name: '10000人以上',value: 991},],
    5: [{name: '少于50人',value: 1483},
                        {name: '50-150人',value: 2458},
                        {name: '150-500人',value: 2422},
                        {name: '500-1000人',value: 877},
                        {name: '1000-5000人',value: 1175},
                        {name: '5000-10000人',value: 231},
                        {name: '10000人以上',value: 309},],
    6: [{name: '少于50人',value: 758},
                        {name: '50-150人',value: 1047},
                        {name: '150-500人',value: 1164},
                        {name: '500-1000人',value:494},
                        {name: '1000-5000人',value: 780},
                        {name: '5000-10000人',value: 126},
                        {name: '10000人以上',value: 232},],
    7: [{name: '少于50人',value: 590},
                        {name: '50-150人',value: 1177},
                        {name: '150-500人',value: 1723},
                        {name: '500-1000人',value: 1074},
                        {name: '1000-5000人',value: 1669},
                        {name: '5000-10000人',value: 452},
                        {name: '10000人以上',value: 1022},],
    8: [                        {name: '少于50人',value: 217},
                        {name: '50-150人',value: 753},
                        {name: '150-500人',value: 675},
                        {name: '500-1000人',value: 395},
                        {name: '1000-5000人',value: 375},
                        {name: '5000-10000人',value: 82},
                        {name: '10000人以上',value: 155},],
    9: [{name: '少于50人',value: 195},
                        {name: '50-150人',value: 474},
                        {name: '150-500人',value: 462},
                        {name: '500-1000人',value: 410},
                        {name: '1000-5000人',value: 569},
                        {name: '5000-10000人',value: 110},
                        {name: '10000人以上',value: 116},],
    0: [
                        {name: '少于50人',value: 13516},
            {name: '50-150人',value: 21040},
            {name: '150-500人',value: 18619},
            {name: '500-1000人',value: 9021},
            {name: '1000-5000人',value: 12468},
            {name: '5000-10000人',value: 1927},
            {name: '10000人以上',value: 7968},]
   
};

var timeLineData = ['互联网','服务业','通信','制造业','金融','医药','传媒','汽车','公共事业','房地产',];

function optiontitle(value) {
    if (value > 9) {
        return {
            text: value + '行业规模分布情况',
            x: 'center',
            top: 15,
        }
    } else return {
        text: value + '行业规模分布情况',
        x: 'center',
        top: 15
    }


}
option = {
    baseOption: {

        timeline: {
            show: true,
            bottom: -5,
            left:8,
            width:450,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: function(value) {
                       return  value
                    }
                },
            },
            data: [],
        },
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        title: optiontitle(timeLineData[i]),
        
        series: [{
            name: '规模',
            type: 'pie',
           color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#659F83','#08C7AE'],
            radius:['30%','45%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{b}: {c} ({d}%)"
                },
            },
            data: databeast[i],
        }]
    });
}
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });  
})();

// 企业规模——平均薪资图雷达图
(function(){
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        tooltip: {
            //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
            confine: true,
            enterable: true, //鼠标是否可以移动到tooltip区域内
        },
        radar: {
            name: {
                textStyle: {
                    color: '#05D5FF',
                    fontSize: 14,
                },
            },
            shape: 'polygon',
            center: ['50%', '50%'],
            radius: '80%',
            startAngle: 120,
            scale: true,
            axisLine: {
                lineStyle: {
                    color: 'rgba(5, 213, 255, .8)',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: 'rgba(5, 213, 255, .8)', // 设置网格的颜色
                },
            },
            indicator: [
                {
                    name: '少于50人',
                    max: 30,
                },
                {
                    name: '50-150人',
                    max: 30,
                },
                {
                    name: '150-500人',
                    max: 30,
                },
                {
                    name: '500-1000人',
                    max: 30,
                },
                {
                    name: '1000-5000人',
                    max: 30,
                },
                {
                    name: '5000-10000人',
                    max: 30,
                },
                {
                    name: '10000人以上',
                    max: 30,
                },
            ],
            splitArea: {
                show: false,
            },
        },
        grid: {
            position: 'center',
        },
        polar: {
            center: ['50%', '50%'], // 默认全局居中
            radius: '0%',
            
        },
        angleAxis: {
            min: 0,
            interval: 5,
            clockwise: false,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        radiusAxis: {
            min: 0,
            interval: 20,
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                name: '个人雷达图',
                type: 'radar',
                symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
                symbolSize: 10, // 拐点的大小
                itemStyle: {
                    normal: {
                        color: '#05D5FF',
                    },
                },
                areaStyle: {
                    normal: {
                        color: '#05D5FF',
                        opacity: 0.5,
                    },
                },
                lineStyle: {
                    width: 2,
                    color: '#05D5FF',
                },
                label: {
                    normal: {
                        show: true,
                        formatter: (params) => {
                            return params.value;
                        },
                        color: '#fff',
                    },
                },
                data: [
                    {
                        value: [15.58,16.6,17.63,18.5,18.7,17.73,26.34],
                    },
                ],
            },
        ],
    };
    

  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });  
})();

// 公司规模——平均薪资图
(function(){
    var myChart = echarts.init(document.querySelector(".line .chart"));
    option = {
        grid: {
            left: '12%',
            top: '27%',
            right: '7%',
            bottom: '10%',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [ '少于50人','50-150人','150-500人','500-1000人','1000-5000人','5000-10000人','10000人以上',],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '招聘人数(人)',
            min: 5000,
            max: 48000,
            interval: 5000,
            splitLine: {
                      show: false
                    },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '平均薪资(K)',
            min: 10,
            max: 28,
            interval: 2,
            splitLine: {
                      show: false
                    },
            axisLabel: {
              formatter: '{value} '
            }
          }
        ],
        series: [
          {
            name: '招聘人数：',
            type: 'line',
            smooth:true,
            data: [28032,45488,44328,25098,33015,8855,17995],
          },
          {
            name: '平均薪资：',
            type: 'line',
            smooth:true,
            yAxisIndex: 1,
            data: [15.58,16.6,17.63,18.5,18.7,17.73,26.34]
          }
        ]
      };
  //3.把配置项给到实例对象
  myChart.setOption(option);
  // 4.图表自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
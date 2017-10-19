    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        radar: {
             
             startAngle: 0,
             
                    name: {
                    show: true,
                   
                    textStyle: {
                    color: '#333',
                    fontSize: 16,
                    }},
                    splitArea: {
show:false},
               
            indicator: [

                { name: '', max: 5},//空间
                { name: '', max: 5},//动力
                { name: '', max: 5},//客服-性价比
                { name: '', max: 5},//研发
                { name: '', max: 5},//市场
                { name: '', max: 5}//你好
            ]
        },
        series: [{
            type: 'radar',
            symbolRotate:30,
            data : [
                { value : [4.3, 3.6, 3, 4.5, 4.7,3.5]}
            ],
            
             itemStyle: {
                normal: {
                    color: 'rgba(38, 162, 255,0.4)'
                }
            },
            label: {

            normal: {
                formatter: '{c}分',
                position:'inside',
            show: false,
            textStyle: {
            color: '#f00',
            fontStyle: 'normal',
            fontSize:18,
            },
        }},
            areaStyle: {
            normal: {
                color: 'rgba(38, 162, 255,0.4)',
            
            opacity: 0.5
           
            },
            emphasis: {


            },
            },
        }
        ]

    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    
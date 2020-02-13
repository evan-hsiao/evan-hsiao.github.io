//參數設定
var options = {
    chart: {
        height: 450,
        width: "50%",
        type: 'line',
        foreColor: "#333"
    },
    // 數據定義
    series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    // 定義軸向
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    // 定義線性
    stroke: {
        curve: 'straight',
    },
    // 定義節點
    markers: {
        size: 1,
    }
}
// 圖表內容
var chart = new ApexCharts(document.querySelector("#chart"), options);
// 讀取圖表
chart.render();
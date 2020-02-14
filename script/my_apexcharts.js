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
        name: '武漢肺炎',
        data: [18, 34, 58, 33, 28, 19, 16, 16, 15,15,11,9,8,7,3,3,3,2,63848]
    }],
    // 定義軸向
    xaxis: {
        categories: ['台灣', '日本', '新加坡', '泰國', '南韓', '馬來西亞', '德國', '越南', '澳洲','美國','法國','英國','阿拉伯','加拿大','菲律賓','印度','義大利','西班牙','中國']
    },
    // 定義線性
    stroke: {
        curve: 'straight',
    },
    // 定義節點
    markers: {
        size: 0.5,
    }
}
// 圖表內容
var chart = new ApexCharts(document.querySelector("#chart"), options);
// 讀取圖表
chart.render();
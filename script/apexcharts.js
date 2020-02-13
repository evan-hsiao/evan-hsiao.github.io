const options = {
    chart: {
        height: 450 ,
        width: "100%",
        type: "line",
        background: "#f4f4f4",
        foreColor: "#333"
    },
    // 數據定義(serise可自己定義名稱)
    serise: [{
        name: "testchart",
        // 數據(官方描述數據不需使用"引號)
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    // 定義軸向
    xaxis: {
        // 類別陣列時須使用"引號
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
   
};

// 圖表內容
// 載入ApexCharts套件，選擇物件id:chart，參數使用options
var chart = new ApexCharts(document.querySelector("#chart"), options);

// 讀取圖表
chart.render();

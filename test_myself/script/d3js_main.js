//設定好 svg 的大小
const svgWidth = 500,
    svgHeight = 500;
---
// svg 對圖表的留白
const padding = {
    top: 20,
    bottom: 20,
    left: 60,
    right: 20
}
---
//呼叫 select() ，取得 id = "chart" 這個圖表容器的元素物件
const svg = d3.select('#chart')
    //在目前元素的最後一個子元素後面新增元素
    .append('svg')
    //設定 svg 元素的寬跟高屬性
    .attr('width', svgWidth)
    .attr('height', svgHeight);

// 圖表group的大小
const width = svgWidth - padding.left - padding.right,
    height = svgHeight - padding.top - padding.bottom;
---
// 在 svg 放入一個 group
const group = svg.append('g')
    // 讓圖表區位移
    // translate − It takes two options, tx refers translation along the x-axis and ty refers to the translation along the y-axis. For Example− translate(30 30).
    .attr('transform', `translate(${padding.left},${padding.top})`)

// 讀取 csv 檔，用 d3.csv 函式，會把原本的 csv 檔轉成 JSON 檔格式
const csv = d3
    .csv('d3js.csv')
///可以先試試看得到的資料會是什麼
const csv = d3.csv('d3js.csv', function (d) {
    console.log(d); // 得到的結果會是一個一個 object 被 load 出來
})
    //這時候需要用到 promise ，就不用一個一個等待，檔案成功讀取後
    .then(function (data) {
        //把每個 sale 的值轉為數字
        data.forEach(function (d) {
            d.sale = parseFloat(d.sale);
        });
    }

    // 計算平均 sale（使用 reduce）
    const avgSale = data.reduce(function (num, d) {
        return num + d.sale;
    }, 0) / data.length


// 計算出最高的 sale
const maxSale = d3.max(data, function (d) {
    return d.sale;
});

// 整理 Labels， 放置銷售員名字

const labels = data.map(function (d) {
    return d.name;
});
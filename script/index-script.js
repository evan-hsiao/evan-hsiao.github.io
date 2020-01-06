
// 預設使用者資訊
var passUserInfo = [
    {
        name: "evan",
        password: "123456789"
    },
    {
        name: "test",
        password: "987654321"
    }
]

function getInfo() {
    // 設定變數，取用id送出的值
    var username = document.getElementById("name").value
    var password = document.getElementById("password").value
    var keyInfo = document.getElementById("key_info")
    // console.log(username + "welcome!!" + password);

    // 建立迴圈
    for (i = 0; i < passUserInfo.length; i++) {
        if (username == passUserInfo[i].name && password == passUserInfo[i].password) {
            alert(username + " welcome歡迎光臨!!");
            // console.log(username + " welcome歡迎光臨!!");
            return
        }
        else {
            alert("Hi " + username + " 輸入錯誤!!");
            // console.log("Hi " + username + " 輸入錯誤!!");
            return
        }
    }
}

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
    var keyInfo = document.querySelector(".key_info")
    // console.log(username + password);

    // 建立迴圈
    for (i = 0; i < passUserInfo.length; i++) {
        if (username == passUserInfo[i].name && password == passUserInfo[i].password) {
            keyInfo.innerText = username + "歡迎光臨!!";
            // console.log(username);
            return
        }
        else if (username != passUserInfo[i].name) {
            keyInfo.innerText = "姓名輸入錯誤";
            return
            
        }
        else if
            (password != passUserInfo[i].password) {
            keyInfo.innerText = "密碼輸入錯誤";
            return
        }
        else {
            keyInfo.innerText = "輸入錯誤";            
            return
        }
    }
}
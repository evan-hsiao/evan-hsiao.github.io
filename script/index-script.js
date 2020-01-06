const form = document.getElementById("form")
const name = document.getElementById("name")
const password = document.getElementById("password")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let messages = []
    // 定義送出的訊息           

    if (name.length <= 6) {
        messages.push('it is not longer')
    }
    if (password.length >= 15) {
        messages.push('it is too longer')
    }
    if (messages.length > 0) {
        e.preventDefault()
        // 停止事件
        errorElement.innerText = messages.join(', ')
    }
})  
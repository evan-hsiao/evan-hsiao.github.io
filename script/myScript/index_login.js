function login() {
    var userEmail = document.getElementById('emailInput').value;
    var userPassword = document.getElementById('passwordInput').value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('登入錯誤!請確認帳號或密碼是否正確');
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('loginUser').style.display = 'none';
        document.getElementById('logoutUser').style.display = 'flex';
        var user = firebase.auth().currentUser;
       
        if (user != null) {
            var email_id = user.email;
            document.getElementById("userConnect").innerHTML = "歡迎光臨" + email_id;
        }

    } else {
        document.getElementById('loginUser').style.display = 'flex';
        document.getElementById('logoutUser').style.display = 'none';
    }
});
function logout() {
    firebase.auth().signOut();
    alert('歡迎下次回來!');
}
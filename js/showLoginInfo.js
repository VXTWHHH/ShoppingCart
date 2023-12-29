// 获取 Cookie
let username = $.cookie('username');
let password = $.cookie('password');
// 检查 Cookie 是否存在

$(document).ready(function () {
    if (username) {
        getUserInfo(
            (e, d) => {
                d.forEach(element => {
                    if (element.username == username && element.password == password) {
                        $("#login-info").text(element.username);
                        $("#login-info").attr("href", "#");
                    }
                });
            }
        );

    }else if ( localStorage.getItem('username') != null) {
        let localUsername = localStorage.getItem('username')
        $("#login-info").text('临时用户 ' + localUsername);
        $("#login-info").attr("href", "#");
    }
});
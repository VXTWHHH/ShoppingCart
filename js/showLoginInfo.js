// 获取 Cookie
let username = $.cookie('username');
let password = $.cookie('password');

// 检查 Cookie 是否存在
if (username) {
    $(document).ready(function () {
        if (username) {
            getUserInfo(
                (e, d) => {
                    d.forEach(element => {
                        if (element.username == username && element.password == password) {
                            console.log(element);
                            $("#login-info").text(element.username);
                            $("#login-info").attr("href","#");
                        }
                    });
                }
            );

        }
    });
}
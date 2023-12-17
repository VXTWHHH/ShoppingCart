//获取前端模拟的数据
function getUserInfo(callback) {
    // 模拟是否出现错误
    var hasError = false;
    // 引用 JSON 文件
    fetch('../mockData/user.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('模拟一个错误');
            }
            return response.json();
        })
        .then(mockData => {
            // 模拟异步请求，使用 setTimeout 模拟网络延迟
            setTimeout(function () {
                try {
                    if (hasError) {
                        // 模拟抛出一个错误
                        throw new Error('模拟一个错误');
                    } else {
                        // 如果没有错误，传递模拟的前端数据作为回调的第二个参数
                        callback(null, mockData);
                    }
                } catch (error) {
                    // 捕获同步错误并通过回调传递错误信息
                    callback(error, null);
                }
            }, 200); // 模拟延迟
        })
        .catch(error => {
            // 处理加载 JSON 文件时的错误
            callback(error, null);
        });
}
function request(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/ProductShow/productList");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("请求成功");
                var data = JSON.parse(xhr.responseText);
                callback(null, data); 
            } else {
                callback(xhr.statusText, null); 
            }
        }
    };
}
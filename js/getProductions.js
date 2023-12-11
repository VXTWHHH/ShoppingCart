function getProductions(pageNum,callback) {
    return request("get",`http://localhost:8080/ProductShow/productList?page=${pageNum}`,callback);
}
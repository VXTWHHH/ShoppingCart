
// 模糊查询函数
function getSearchData(queryStr, data) {
    // 将查询字符串转换为正则表达式
    const regex = new RegExp(queryStr, "i"); // "i" 表示不区分大小写

    // 使用正则表达式测试每个数据项
    return data.filter(
        (item) => {
           return regex.test(item.name)||regex.test(item.type);
        }
    );
}
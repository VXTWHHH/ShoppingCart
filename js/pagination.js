
var pageInfo = {
    pageData:[],
    currentPageData:[],
    pageSize:1,
}

function pagination(data,pageNum) {
    paginationHelper(data);
    pageInfo.pageSize = pageInfo.pageData.length;
    pageInfo.currentPageData = pageInfo.pageData[pageNum-1];
    return pageInfo;
}

function paginationHelper(data) {
    if (data.length < 10) {
        pageInfo.pageData.push(data);
        return;
    }
    pageInfo.pageData.push(data.slice(0, 10));
    paginationHelper(data.slice(10));

}

var pageInfo = {
    pageData:[],
    currentPageData:[],
    pageNum:1,
    pageSize:1
}

function pagination(data,pageNum) {
    paginationHelper(data);

    pageInfo.pageSize = pageInfo.pageData.length;
    if (pageNum < 1) this.pageInfo.pageNum = 1;
    if (pageNum > pageInfo.pageSize) this.pageInfo.pageNum = pageInfo.pageSize;
    pageInfo.currentPageData = pageInfo.pageData[pageInfo.pageNum-1];
    return pageInfo;
}

function paginationHelper(data) {
    if (data.length < 10) {
        if(data.length!=0){
            pageInfo.pageData.push(data);
        }
        return;
    }
    pageInfo.pageData.push(data.slice(0, 10));
    paginationHelper(data.slice(10));

}
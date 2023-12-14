function priceFilter(data) {
    var priceData = [];
    startPrice = document.querySelectorAll(".txt")[0].value;
    endPrice = document.querySelectorAll(".txt")[1].value;
    data.forEach(
        (item) => {
            if (item.nowPrice >= startPrice && item.nowPrice <= endPrice) {
                priceData.push(item);
            }
        }
    )
    return priceData;
}
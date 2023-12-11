function getPriceData() {
    this.priceData = [];
    startPrice = document.querySelectorAll(".txt")[0].value;
    endPrice = document.querySelectorAll(".txt")[1].value;
    getProductions(
        1,
        (e, d) => {
            d.forEach(
                (item) => {
                    if (item.nowPrice >= startPrice && item.nowPrice <= endPrice) {
                        this.priceData.push(item);
                    }
                }
            )
            getList(this.priceData);
        }
    )
}
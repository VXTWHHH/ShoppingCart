let model =
    `
                        <div class="item">
                            <img src="./images/01.webp" alt="" width="100%" style="margin-top: 10px;">
                            <div class="title">
                                <span>半墨大码男装胖人短袖t恤男冰丝宽松大号200-300斤男士夏天衣服潮</span>
                            </div>
                            <div class="price">
                                <span>￥86.90</span>
                                <span>￥99.00</span>
                            </div>
                            <div class="store">
                                <img src="./images/store_icon.PNG" alt="">
                                <span>半墨旗舰店</span>
                            </div>
                            <div class="sales">
                                <div>月销200</div>
                            </div>
                        </div>
                    `

function getList(data) {

        document.getElementById('mainContain').innerHTML = "";
        data.forEach(() => {
            document.getElementById('mainContain').innerHTML += model
        })

        items = document.querySelectorAll(".item");
        titleElement = document.querySelectorAll(".title");
        price = document.querySelectorAll(".price");
        store = document.querySelectorAll(".store");
        sales = document.querySelectorAll(".sales");

        for (let index = 0; index < items.length; index++) {
            items[index].querySelector("img").src = data[index].imageUrl;
        }
        for (let index = 0; index < titleElement.length; index++) {
            titleElement[index].querySelector("span").innerHTML = data[index].name;
        }
        for (let index = 0; index < price.length; index++) {
            price[index].querySelectorAll("span")[0].innerHTML = "￥" + data[index].nowPrice;
            price[index].querySelectorAll("span")[1].innerHTML = "￥" + data[index].oldPrice;
        }
        for (let index = 0; index < store.length; index++) {
            store[index].querySelector("span").innerHTML = data[index].storeName;
        }
        for (let index = 0; index < sales.length; index++) {
            sales[index].querySelector("div").innerHTML = "月销" + data[index].sales;
        }

}
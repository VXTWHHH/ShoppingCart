let model = `
<ul class="item-content clearfix">
<li class="td-chk"><input type="checkbox" name="items"></li>
<li class="td-item"><img src="../images/11.webp" /><span>长远无尘粉笔水溶性无尘粉笔20支儿童</span></li>
<li class="td-info">颜色分类：彩色替换笔芯6支装</li>
<li class="td-price">￥<span>8.50</span></li>
<li class="td-amount"><i class="fa fa-minus"></i><input value="1" type="text" name="number">
<i class="fa fa-plus"></i></li>
<li class="td-sum price">￥<span>8.50</span></li>
<li class="td-ope"><a>删除</a></li>
</ul>
            `;

 async function getCartList(data) {

    await getProductionByIds(data.pid).then(d => {
        data = d;
    });



    $(document).ready(function () {
        $(".orderContent").empty();
        data.forEach(() => {
            $(".orderContent").append(model);
        })

        let items = $(".td-item");
        let info = $(".td-info");
        let price = $(".td-price");

        for (let index = 0; index < items.length; index++) {
            $(".td-item").find("img").attr("src", data[index].imageUrl);
        }
        for (let index = 0; index < info.length; index++) {
            $(".td-info").text(data[index].name);
        }
        for (let index = 0; index < price.length; index++) {
            $(".td-price").html("￥<span>" + data[index].price + "<span>");
            $(".td-sum").html("￥<span>" + data[index].price + "<span>");
        }

    });

}
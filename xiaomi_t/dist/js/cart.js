"use strict";function asyncGeneratorStep(t,n,e,c,a,i,r){try{var l=t[i](r),o=l.value}catch(t){return void e(t)}l.done?n(o):Promise.resolve(o).then(c,a)}function _asyncToGenerator(l){return function(){var t=this,r=arguments;return new Promise(function(n,e){var c=l.apply(t,r);function a(t){asyncGeneratorStep(c,n,e,a,i,"next",t)}function i(t){asyncGeneratorStep(c,n,e,a,i,"throw",t)}a(void 0)})}}$(function(){var t=cookie.get("username");function n(){return(n=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.ajax({url:"./sign/showlist.php",dataType:"json"});case 2:n=t.sent,e=0,1==n.code?($(".shopcart table tbody").empty(),$.each(n.data,function(t,n){e+=Number(n.product_price),$('\n                <tr>\n                <td><input type="checkbox" class="checked" checked></td>\n                <td>'.concat(n.product_id,'</td>\n                <td><img src="').concat(n.product_img,'" alt="">').concat(n.product_name,"</td>\n                <td><i>").concat(n.product_price,'</i>元</td>\n                <td><div><a class="les">-</a><input type="text"  value="').concat(n.product_num,'"><a class="add">+</a></div></td>\n                <td><i class="small">').concat(n.product_price,'</i>元</td>\n                <td class="deletemsg"><a>x</a></td>\n            </tr>\n                ')).appendTo($(".shopcart table tbody"))}),$("tbody tr td:nth-child(5) div input").on("input propertychange",function(){console.log("1111"),0<$(this).val()?$(this).val():$(this).val(1)})):$(".shopcart").empty().html('\n                <div class="shopcartbox">\n                <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png" alt="">\n                <div>\n                    <h3>你的购物车还是空的!</h3>\n                    <button>马上去购物</button>\n                </div>\n            </div>\n                '),$(".shopcartbox div:nth-child(2) button:nth-child(2)").click(function(){location.href="./index.html"}),$(".deletemsg").click(function(){var e=$(this).siblings().eq(1).text();confirm("你确定将此商品移除购物车？")?($(this).parent().remove(),function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.ajax({url:"./sign/removeshop.php",data:{shopid:"".concat(e)},dataType:"json"});case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),location.reload()):console.log("111")}),$(".checkall").click(function(){$(".checkall").prop("checked")?($(".checked").prop("checked",!0),$("tbody tr td:nth-child(6) i").addClass("small")):($(".checked").prop("checked",!1),$("tbody tr td:nth-child(6) i").removeClass("small")),$(".allprice div:nth-child(2) i").html("\n                ".concat(c(),"\n                ")),$(".allprice span:nth-child(1)").html("\n                共 <i>".concat(n.data.length,"</i> 件商品，已选择<i>").concat(a(),"</i>件\n                "))}),$(".checked").click(function(){$(".checkall").prop("checked",!0),$.each($(".checked"),function(t,n){$(n).prop("checked")?$(n).parent().siblings().eq(4).children().addClass("small"):($(".checkall").prop("checked",!1),$(n).parent().siblings().eq(4).children().removeClass("small"))}),$(".allprice div:nth-child(2) i").html("\n                ".concat(c(),"\n                ")),$(".allprice span:nth-child(1)").html("\n                共 <i>".concat(n.data.length,"</i> 件商品，已选择<i>").concat(a(),"</i>件\n                "))}),$(".allprice").html("\n            <span>共 <i>".concat(n.data.length,"</i> 件商品，已选择<i>").concat(n.data.length,"</i>件</span>\n            <div>\n                <strong>合计:<i> ").concat(e,"</i>元</strong><button>去结算</button>\n            </div>\n           \n            ")),$(".allprice div:nth-child(2)>button").click(function(){$(".canve").css({display:"block"}),$(".apply").css({display:"block"})});case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function c(){var e=0;return $.each($(".small"),function(t,n){e+=Number($(n).html())}),e}function a(){var e=0;return $.each($(".small"),function(t,n){e+=1}),e}!1!==t?($(".right").empty().html('\n            <a href="./index.html"><img src="https://s02.mifile.cn/assets/static/image/logo-footer.png" alt=""></a>\n            <span>我的购物车</span>\n            '),$(".left").empty().html('\n            <a href="#">'.concat(t,'</a>|\n            <a href="#">我的订单</a>\n            '))):0==t&&(alert("请您先进行用户登录"),setTimeout(function(){location.href="./index.html"},3e3)),function(){n.apply(this,arguments)}(),$("tbody").on("click",".les",function(){if($(this).siblings().eq(0).val()<=1)return alert("请重新输入购买数量"),void $(this).siblings().eq(0).val(1);var t=parseInt($(this).siblings().eq(0).val());t-=1,$(this).siblings().eq(0).val(t),$(this).parent().parent().siblings().eq(4).children().html("\n            ".concat($(this).parent().parent().siblings().eq(3).children().html()*t,"\n            ")),$(".allprice div:nth-child(2) i").html("\n            ".concat(c(),"\n            "))}),$("tbody").on("click",".add",function(){var t=parseInt($(this).siblings().eq(1).val());t+=1,$(this).siblings().eq(1).val(t),$(this).parent().parent().siblings().eq(4).children().html("\n            ".concat($(this).parent().parent().siblings().eq(3).children().html()*t,"\n            ")),$(".allprice div:nth-child(2) i").html("\n            ".concat(c(),"\n            "))}),$(".apply .top button").click(function(){console.log($(this).parent().parent()),$(this).parent().parent().css({display:"none"}),$(".canve").css({display:"none"})})});
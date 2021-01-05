$(function(){
    let value=cookie.get('username');
    if(value!==false){
        $('.right').empty().html(
            `
            <a href="./index.html"><img src="https://s02.mifile.cn/assets/static/image/logo-footer.png" alt=""></a>
            <span>我的购物车</span>
            `
        )
        $('.left').empty().html(
            `
            <a href="#">${value}</a>|
            <a href="#">我的订单</a>
            `
        )
    }else if(value ==false){
        // console.log("1111")
        alert("请您先进行用户登录")
        setTimeout(function(){
            location.href="./index.html";
        },3000)
       
    }
    showData();
    async function showData(){
        let data=await $.ajax({
            url:'./sign/showlist.php',
            dataType:'json'
        })
        let allprice=0;
        // console.log(data.data.length)
        if(data.code==1){
            $('.shopcart table tbody').empty()
            $.each(data.data,function(index,item){
                allprice+=Number(item.product_price);
                $(`
                <tr>
                <td><input type="checkbox" class="checked" checked></td>
                <td>${item.product_id}</td>
                <td><img src="${item.product_img}" alt="">${item.product_name}</td>
                <td><i>${item.product_price}</i>元</td>
                <td><div><a class="les">-</a><input type="text"  value="${item.product_num}"><a class="add">+</a></div></td>
                <td><i class="small">${item.product_price}</i>元</td>
                <td class="deletemsg"><a>x</a></td>
            </tr>
                `).appendTo( $('.shopcart table tbody'))
            })
            $('tbody tr td:nth-child(5) div input').on('input propertychange',function(){
               console.log("1111")
               if($(this).val()>0){
                $(this).val();
               }else{
                $(this).val(1);
               }
            })
           
        }else{
            $('.shopcart').empty().html(
                `
                <div class="shopcartbox">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png" alt="">
                <div>
                    <h3>你的购物车还是空的!</h3>
                    <button>马上去购物</button>
                </div>
            </div>
                `
            )
        }
        $('.shopcartbox div:nth-child(2) button:nth-child(2)').click(function(){
            location.href="./index.html"
        })
        $('.deletemsg').click(function(){
             let shopid=$(this).siblings().eq(1).text();
            if(confirm("你确定将此商品移除购物车？")){
             
                $(this).parent().remove();
                let rshop=async function(){
                    let data=await $.ajax({
                        url:"./sign/removeshop.php",
                        data:{
                            "shopid":`${shopid}`
                        },
                        dataType:'json',
                        
                    })
                    console.log(data);
                }
                rshop()
                location.reload();
            }else{
                console.log('111')
            }
        })
        $('.checkall').click(function(){
            if($('.checkall').prop('checked')){
                $('.checked').prop('checked',true)
                $('tbody tr td:nth-child(6) i').addClass('small')
               
            }else{
                $('.checked').prop('checked',false)
                // console.log($('tbody tr td:nth-child(5) i'))
                $('tbody tr td:nth-child(6) i').removeClass('small')
            }
            $('.allprice div:nth-child(2) i').html(
                `
                ${getPrice()}
                `
            )
            $('.allprice span:nth-child(1)').html(
                `
                共 <i>${data.data.length}</i> 件商品，已选择<i>${getNum()}</i>件
                `
            )   
            
        })
        $('.checked').click(function(){
            // console.log( $('.checked'))
            $('.checkall').prop('checked',true)
            $.each($('.checked'),function(index,item){
                if(!$(item).prop('checked')){
                    $('.checkall').prop('checked',false)
                    $(item).parent().siblings().eq(4).children().removeClass('small')
                }else{
                    $(item).parent().siblings().eq(4).children().addClass('small')
                }

            })
            $('.allprice div:nth-child(2) i').html(
                `
                ${getPrice()}
                `
            )
            $('.allprice span:nth-child(1)').html(
                `
                共 <i>${data.data.length}</i> 件商品，已选择<i>${getNum()}</i>件
                `
            )   
           
        })
       
        // console.log(data.data.length)
        // console.log(allprice)
        $('.allprice').html(
            
            `
            <span>共 <i>${data.data.length}</i> 件商品，已选择<i>${data.data.length}</i>件</span>
            <div>
                <strong>合计:<i> ${allprice}</i>元</strong><button>去结算</button>
            </div>
           
            `
        )   
        $('.allprice div:nth-child(2)>button').click(function(){
            // console.log("1111")
            $('.canve').css({
                display:'block',
            })
            $('.apply').css({
                display:'block',
            })
        })
    };
   /*  $('.les').click(function(){
        console.log('1111')
    }) */
    $('tbody').on('click','.les',function(){
        // console.log(this)
        // console.log($(this))
        // console.log("111")
        if($(this).siblings().eq(0).val()<=1){
            alert("请重新输入购买数量")
            $(this).siblings().eq(0).val(1)
            return
        }
        let num=parseInt($(this).siblings().eq(0).val());
        num-=1;
        // console.log(num)
        $(this).siblings().eq(0).val(num)
        // $(this).siblings().eq(0).val()=num;
        // console.log($(this).parent().parent().siblings().eq(2).children().html())

        $(this).parent().parent().siblings().eq(4).children().html(
            `
            ${$(this).parent().parent().siblings().eq(3).children().html()*num}
            `
        )
        $('.allprice div:nth-child(2) i').html(
            `
            ${getPrice()}
            `
        )
       
    })
    $('tbody').on('click','.add',function(){
        // console.log(this)
        // console.log("111")
        let num=parseInt($(this).siblings().eq(1).val());
        num+=1;
        // console.log(num)
        $(this).siblings().eq(1).val(num)
        // $(this).siblings().eq(0).val()=num;
        // console.log($(this).parent().parent().siblings().eq(2).children().html())
        $(this).parent().parent().siblings().eq(4).children().html(
            `
            ${$(this).parent().parent().siblings().eq(3).children().html()*num}
            `
        )
    //    console.log( getPrice())
            // console.log($('.small'))
       /*  $('.allprice div:nth-child(2) i').html(
            `
            `
        ) */
        $('.allprice div:nth-child(2) i').html(
            `
            ${getPrice()}
            `
        )
    })
    function getPrice(){
       let price=0;
       $.each( $('.small'),function(index,item){
            // console.log(index)
            price+=Number($(item).html())
            
            // console.log($(item).html())
       })
       return price;

    }
    function getNum(){
       let shopNum=0;
        $.each( $('.small'),function(index,item){
             // console.log(index)
            //  price+=Number($(item).html())
             
             // console.log($(item).html())
            shopNum+=1;
        })
       return shopNum
 
     }
   
     $('.apply .top button').click(function(){
         console.log( $(this).parent().parent())
         $(this).parent().parent().css({
             display:'none',
         })
         $('.canve').css({
            display:'none',
        })
       
     })
    
})
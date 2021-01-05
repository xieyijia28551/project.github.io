$(function(){
    // console.log(cookie.get('price'))
    // console.log(cookie.get('name'))
   
    if((cookie.get('username'))!=false){
        $('.taggle').empty().html(
            `<span style="color:#ffffff">欢迎您，${cookie.get('username')}用户！</span>
            <button class="signout">退出</button>
            <a href="#">消息通知</a>
            <a href="./cart.html"><i class="iconfont icon-gouwuchekong"></i>购物车</a>
            `
        )
    }
    $('.signout').click(function(){
         cookie.remove('username')
         location.href="./index.html"
     })
    console.log(cookie.get('username'))
    async function getData(){
        let data=await $.ajax({
            url:"./data/index.json"
        })
        $.each(data,function(index,item){
            $.each(item,function(index,item){
                if(cookie.get('name')==item.shop_name){
                    console.log( Object.keys(item.shop_iscoll.src).length);
                    // console.log(item.shop_iscoll.src )
                    $.each(item.shop_iscoll.src,function(index,item){
                        $(`
                        <div class="swiper-slide">
                        <img src="${item}" alt="">
                    </div>
                        `).appendTo($('.swiper-wrapper'))
                    })
                    $('.constructor').html(
                        `
                        ${item.shop_iscoll.iscolltext}
                        `
                    )
                    /* $.each(item.shop_iscoll,function(index,item){
                        console.log(index)
                        console.log(item)
                    }) */
                    if( Object.keys(item.shop_iscoll.src).length<=1){
                        var mySwiper = new Swiper ('.swiper-container', {
                            direction: 'horizontal', // 垂直切换选项
                            loop: false, // 循环模式选项
                            autoplay:false,
                            // 如果需要分页器
                            // 如果需要前进后退按钮
                            
                            // 如果需要滚动条
                          })   
                          $('.swiper-button-prev').remove();
                          $('.swiper-button-next').remove();

                    }else{
                        var mySwiper = new Swiper ('.swiper-container', {
                            direction: 'horizontal', // 垂直切换选项
                            loop: true, // 循环模式选项
                            autoplay:true,
                            // 如果需要分页器
                            pagination: {
                              el: '.swiper-pagination',
                              clickable: true,
                            },
                            
                            // 如果需要前进后退按钮
                            navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                            },
                            
                            // 如果需要滚动条
                            scrollbar: {
                              el: '.swiper-scrollbar',
                              hide:false,
                            },
                          })   

                    }
                    
                }
            })
        })
        // console.log(data)
    }
    getData()
    $('.signr').html(
        `
        ${cookie.get('name')}
        `
    )
    $('.info_right > div:nth-child(4) span').html(
        `
        ${cookie.get('price')}元
        `
    )
    $('.price_msg').html(
        `
        <div><span> ${cookie.get('name')}</span> <i>${cookie.get('price')}元</i></div>
        <strong>总计：${cookie.get('price')}元</strong>
        `
    )
    function getRandid(){
        return Math.floor(Math.random()*(999999-100000+1)+100000);
    }
    $('.gcart>div:nth-child(1)>button:nth-child(1)').click(async function(){
        // console.log('1111')
        let data=await $.ajax({
            url:"./sign/addcart.php",
            type:'get',
            data:{
                id:getRandid(),
                name:cookie.get('name'),
                price:cookie.get('price'),
                img:cookie.get('src'),
                


            },
            dataType:'json',
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest, textStatus, errorThrown)
            }
        })
        console.log(data)
        if(data.code===1){
            alert('商品添加成功')
        }else{
            alert('商品添加失败')
        }
        // console.log(data)
    })
})
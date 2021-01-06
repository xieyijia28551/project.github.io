$(function(){
    async function creatBase(){
        let data=await $.ajax({
            url:"./sign/createdatabase.php",
        })
    }
    creatBase();
    //轮播图左侧边栏,显示
    $('.asider li').mouseenter(function(){
        let liindex=$(this).index()+1;
        // console.log(liindex);
        let getData=async function(){
            let data=await $.ajax({
                url:"./data/aside.json",


            })
            // console.log(data.one)
            createli(data)
        }
        let createli=function(data){
            // console.log(data)
            $.each(data,function(index,item){
                // console.log(index)
                // console.log(item)       
               
                //    console.log(item.length)
               if(liindex==index){
                $.each(item,function(index,item){
                    // console.log(index)
                    // console.log(item)
                    $(`<li>
                    <img src="${item.url}"><span>${item.phone}</span>
                    </li>`).css({
                    'position':'relative',
                    'width':250,
                    'height':70,
                    'line-height':'70px',
                    // 'display':'flex',
                    // 'align-content':'center',
                    // 'flex':1,
                   
                }).appendTo($('.ul_li'));
                })
               }
              
               
            })
        }
        getData();
        $(`<ul class="ul_li"></ul>
        `).css({
            'opacity': '1',
            'width':991,
            'background': '#ffffff',
            'display':'flex',
            'flex-direction': 'column',
            'flex-wrap':'wrap',
            'padding':'15',
            'justify-content':' space-evenly',
            'border': '1px solid #e0e0e0',
            'box-shadow': '0 8px 16px rgba(0,0,0,.18)',
            'box-sizing': 'border-box'
        }).appendTo($(this))
        }) .mouseleave(function(){
             $(".ul_li").remove()
        })
    //读取cookie,根据cookie状态判断是否进行登录状态展示
    // class="signout"
    let valname=cookie.get('username') ;
    if(valname!=false){
        $('.taggle').empty().html(
            `
            <a >欢迎您，${valname}用户！</a><span>|</span>
            <a class="signout">退出</a><span>|</span>
            <a href="#">消息通知</a><span>|</span>
            <a href="./cart.html">
             <i class="iconfont icon-gouwuchekong"></i>购物车(0)
            </a>
            `
        )
    }
    $('.signout').click(function(){
        cookie.remove('username')
        $('.taggle').empty().html(
            `
            <a href="./sign.html">登录</a><span>|</span>
            <a href="#">注册</a><span>|</span>
            <a href="#">消息通知</a><span>|</span>
            <a href="./cart.html">
             <i class="iconfont icon-gouwuchekong"></i>购物车(0)
            </a>
            `
        )
    })

    //返回顶部按钮显隐
    $(window).scroll(function(){
        // console.log(111)
      if( $(window).scrollTop()>600){
          $('.asider_left_box a:nth-child(6)').css({
              'display':'flex',
          })
      }else{
        $('.asider_left_box a:nth-child(6)').css({
            'display':'none',
        })
      }
    })
    $('.asider_left_box a:nth-child(6)').click(function(){
        $('body,html').animate({scrollTop:0},1000); 
    //    console.log( screenTop)
    })
    // if( $('.asider_left_box').scrollTop(100)){
    //     $('.asider_left_box a:nth-child(6)').css({
    //         'display':'block',
    //     })
    // }
    $('.taggle a:nth-child(2)').click(function(){
        // console.log("11111")
        location.href='./regsiter.html' 
    })
    /*  秒杀功能实现 */
    setInterval(function(){
        let now=new Date()
        // console.log(now.getTime())
        let aimtime=new Date(now.getTime() + 24*60*60*1000).setHours(0, 0, 0, 0);
        // console.log(aimtime)
        let hours=parseInt((aimtime-now)/(3600*1000));
        // console.log(hours)
        let minute=parseInt((aimtime-now)%(3600*1000)/(60*1000));
        // console.log(minute)
        let second=parseInt(((aimtime-now)%(3600*1000)%(60*1000))/1000)
        // console.log(second)
        if(hours<10){
            $('.montent_l>div:nth-child(2) span:nth-child(1)').html(
                `0${hours}`
            )
        }else{
            $('.montent_l>div:nth-child(2) span:nth-child(1)').html(
                `${hours}`
            )
        }
       if(minute<10){
            $('.montent_l>div:nth-child(2) span:nth-child(2)').html(
                `0${minute}`
            )
       }else{
            $('.montent_l>div:nth-child(2) span:nth-child(2)').html(
                `${minute}`
            )
       }
      
        if(second<10){
            $('.montent_l>div:nth-child(2) span:nth-child(3)').html(
                `0${second}`
            )
        }else{
            $('.montent_l>div:nth-child(2) span:nth-child(3)').html(
                `${second}`
            )
        }
       
    },1000)
/* 渲染数据请求 */
    async function getShopmsg(){
        let data=await $.ajax({
            url:"./data/index.json"
        })
       // console.log(Object.keys(data).length)//遍历次数
       $.each(data,function(index,item){
        $('.montentbox').after(` <div class="shop_c">
        <div class="step_one cantainer">
        <h2 class="step_title">${index}</h2>
        <div class="step_content">
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=257&h=675&f=webp&q=90" alt="">
           <ul class="${index}">
               
           </ul>
        </div>
      </div>
      <div class="tips cantainer">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3b86ede4dd31d7c126d56fbdde4f855.jpg?thumb=1&w=1349&h=132&f=webp&q=90" alt="">
     </div>
     </div>
        `)
        // console.log($('.step_content ul').attr("class"))
    //   console.log(item)
        // console.log(index)
    if($('.step_content ul').attr("class")==index)
      $.each(item,function(indexn,itemn){
        $(`
        <li><a href="#" price="${itemn.shop_price}">
                     <img src="${itemn.shop_img}" alt="">
                     <h3>${itemn.shop_name}</h3>
                     <p>${itemn.shop_text}</p>
                     <p>${itemn.shop_price}元起</p>
                 </a></li>
                 `).appendTo($(`.step_content ul.${index}`))
      })
       
           })
           $('.step_content>ul>li').click(function(){
            let price=$(this).children().attr('price');
            let name=$(this).children().children('h3').html();
            let pic=$(this).children().children('img').attr('src')
            // console.log(name)
            // console.log($(this).children().attr('price'))
            cookie.set('price', `${price}`, 7)
            cookie.set('name', `${name}`, 7)
            cookie.set('src', `${pic}`, 7)
            location.href='./messagepage.html';
           
        
        })
       
         
    }
    getShopmsg()

})
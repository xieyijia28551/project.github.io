$(function(){
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
        // $('.asider li').mouseenter(function(){
        //     $(` <ul class="ul_li"></ul>`).css({
        //         'width':991,
        //         'background': 'skyblue',
        //     }).appendTo($(this))
        // })
    //读取cookie,根据cookie状态判断是否进行登录状态展示
    let valname=cookie.get('username') ;
    if(valname!=false){
        $('.taggle').empty().html(
            `<span style="color:#ffffff">欢迎您，${valname}用户！</span>
            <button class="signout">退出</button>
            <a href="#">消息通知</a>
            <a href="./cart.html"><i class="iconfont icon-gouwuchekong"></i>购物车</a>
            `
        )
    }
    $('.signout').click(function(){
       /*  var time = new Date();
        time.setTime(time.getTime()-8*60*60*1000*2);
        document.cookie = `name; expires=${time}; path="/";`; */
    //    removeCookie('name');
        cookie.remove('name')
        $('.taggle').empty().html(
            `   <a href="./sign.html">登录</a>
            <a href="#">注册</a>
            <a href="#">消息通知</a>
            <a href="./cart.html"><i class="iconfont icon-gouwuchekong"></i>购物车</a>
            `
        )
    })
    $('.step_content>ul>li').click(function(){
        let price=$(this).children().attr('price');
        let name=$(this).children().children('h3').html();
        // console.log(name)
        // console.log($(this).children().attr('price'))
        cookie.set('price', `${price}`, 7)
        cookie.set('name', `${name}`, 7)
        location.href='./messagepage.html';
       
    
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

})
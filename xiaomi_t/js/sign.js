$(function(){
    $(':submit').click(function(){
    });
    $('.logo>img').click(function(){
        location.href='./index.html' 
    })
    $("button:submit").attr({"disabled":"disabled"})
    //正则判定
    let reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    let preg=/^[a-zA-Z0-9]{4,10}$/;
    $('.form input:nth-child(1)').on('blur',function(){
        if(!reg.test($(this).val())){
            $('.utips').remove()
            $(this).css({
                border:'1px solid red',
            })
            $("button:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="utips" style="color:red">用户名由英文字母和数字组成的4-16位字符，以字母开头</span>
                `
            )
        }else{
            $('.utips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            })
            $("button:submit").removeAttr("disabled");
        }
    })
    $('.form input:nth-child(2)').on('blur',function(){
        if(!preg.test($(this).val())){
            $('.ptips').remove()
            $(this).css({
                border:'1px solid red',
            })
            $("button:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="ptips" style="color:red">密码由英文字母和数字组成的4-10位字符  </span>
                `
            )
        }else{
            $('.ptips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            })
            $("button:submit").removeAttr("disabled");
        }
    })
    
})
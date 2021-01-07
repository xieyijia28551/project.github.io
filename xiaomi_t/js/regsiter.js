$(function(){
    let ureg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;//用户名由英文字母和数字组成的4-16位字符，以字母开头
    let preg=/^[a-zA-Z0-9]{4,10}$/;//密码由英文字母和数字组成的4-10位字符
    let ereg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;//Email格式不正确，例如web@sohu.com
    let treg=/^1\d{10}$/;//手机号码不正确，请重新输入
    $("input:submit").attr({"disabled":"disabled"})
    $('form input:nth-child(1)').on('blur',function(){
        if(!ureg.test($(this).val())){
            $('.utips').remove()
            $(this).css({
                border:'1px solid red',
            }).attr("door","off")
            // $("input:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="utips" style="color:red">用户名由英文字母和数字组成的4-16位字符，以字母开头</span>
                `
            )
        }else{
            $('.utips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            }).attr("door","on")
            // $("input:submit").removeAttr("disabled");
        }
    })
    $('form input:nth-child(2)').on('blur',function(){
         if(!preg.test($(this).val())){
            $('.ptips').remove()
            $(this).css({
                border:'1px solid red',
            }).attr("door","off")
            // $("input:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="ptips" style="color:red">密码由英文字母和数字组成的4-10位字符</span>
                `
            )
        }else{
            $('.ptips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            }).attr("door","on")
            // $("input:submit").removeAttr("disabled");
        
        }
    })
    $('form input:nth-child(3)').attr("door","on")
    $('form input:nth-child(6)').attr("door","on")
    $('form input:nth-child(5)').on('blur',function(){
        if(!ereg.test($(this).val())){
            $('.etips').remove()
            $(this).css({
                border:'1px solid red',
            }).attr("door","off")
            // $("input:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="etips" style="color:red">Email格式不正确，例如web@sohu.com</span>
                `
            )
        }else{
            $('.etips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            }).attr("door","on")
            // $("input:submit").removeAttr("disabled");
        
        }
    })
    $('form input:nth-child(4)').on('blur',function(){
        if(!treg.test($(this).val())){
            $('.ttips').remove()
            $(this).css({
                border:'1px solid red',
            }).attr("door","off")
            // $("input:submit").attr({"disabled":"disabled"})
            $(this).after(
                `
                <span class="ttips" style="color:red">手机号码不正确，请重新输入</span>
                `
            )
        }else{
            $('.ttips').remove()
            $(this).css({
                border:'1px solid rgb(118, 118, 118)',
            }).attr("door","on")
            // $("input:submit").removeAttr("disabled");
        
        }
    })
 /*    $('form input:nth-child(5)').on('blur',function(){
        if(!treg.test($(this).val())){
            
        }
    }) */
    // console.log( $('form input'))
    $(":submit").click(function(){
        $.each($('form input'),function(index,item){
            $("input:submit").removeAttr("disabled");
            if(!$(item).attr("door")==on){
                $("input:submit").attr({"disabled":"disabled"})
            }
            
        })
       
    })
   

})
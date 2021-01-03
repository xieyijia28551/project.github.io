$(function(){
    // console.log(cookie.get('price'))
    // console.log(cookie.get('name'))
    $('.signr').html(
        `
        ${cookie.get('name')}
        `
    )
    $('.price_msg').html(
        `
        <div><span>Redmi 9A 6GB+128GB 晴空蓝</span> <i>${cookie.get('price')}元</i></div>
        <strong>总计：${cookie.get('price')}元</strong>
        `
    )
    function getRandid(){
        return Math.floor(Math.random()*(999999-100000+1)+100000);
    }
    $('.gcart>div:nth-child(1)>button:nth-child(1)').click(async function(){
        // console.log('1111')
        let data=await $.ajax({
            url:"http://localhost/xiaomi_t/sign/addcart.php",
            type:'get',
            data:{
                id:getRandid(),
                name:cookie.get('name'),
                price:cookie.get('price'),
                img:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591669005.22126176.jpg?thumb=1&w=80&h=80',
                


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
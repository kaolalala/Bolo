let userName = $('#login-name');
let userPassword = $('#login-password');
let regName = $('#reg-name');
let regPassword = $('#reg-password')
$('.login').on('click', () => {//登录
    $(function () {
        $.ajax({
            //请求方式
            type: "GET",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url: "/user",
            //数据，json字符串JSON.stringify(list)
            data: { act: 'login', user: '(' + userName.val() + ')', pass: '(' + userPassword.val() + ')' },
            //请求成功
            success: function (str) {
                let json = eval('('+str+')');
                if (json.ok) {
                    alert('登录成功');
                    //跳转到个人页面
                    $('#login').css('display', 'none');
                    $('#personal-show').css('display','block');
                } else {
                    alert('登录失败' + `${json.msg}`);
                }
            },
            //请求失败，包含具体的错误信息
            error: function (e) {
                console.log(e.status);
                console.log(e.responseText);
            }
        })
    })
})
$('.register').on('click',() => {//注册
    $(function(){
        // var list = {
        //     name: `${userName}`,
        //     password: `${userPassword}`
        // };
        $.ajax({
            //请求方式
            type: "GET",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url: "/user",
            //数据，json字符串JSON.stringify(list)
            data: { act: 'reg', user: '('+regName.val()+')', pass: '('+regPassword.val()+')'},
            //请求成功
            success: function (str) {
                let json = eval('('+str+')');
                if(json.ok){
                    alert('注册成功');
                    //跳转到登录
                    $(".main_login").removeClass("none");
                    $(".main_register").addClass("none");
                }else{
                    alert('注册失败'+`${json.msg}`);
                }
            },
            //请求失败，包含具体的错误信息
            error: function (e) {
                console.log(e.status);
                console.log(e.responseText);
            }
        })
    })
})
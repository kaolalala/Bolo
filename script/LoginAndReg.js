let userName = $('#login_account');
let userPassword = $('#login_password');
let regName = $('#register_phone');
let regPassword = $('#register_password')
var onlyUser = "当前用户";
$('.login').on('click', () => {//登录
    if(userName.val() != ""){
        // $(function () {
            $.ajax({
                //请求方式
                type: "GET",
                //请求的媒体类型
                contentType: "application/json;charset=UTF-8",
                //请求地址
                url: 'http://localhost:3000/login',
                //数据，json字符串JSON.stringify(list)
                data: { act: 'login', user: `${userName.val()}`, pass: `${userPassword.val()}`},
                //请求成功
                success: function (str) {
                    let json = eval('('+str+')');
                    console.log("json : ",json);
                    // 123456789
                    if (json.ok) {
                        // alert('登录成功');
                        //跳转到个人页面
                        onlyUser = json.data.user;
                        console.log(onlyUser);
                        window.location.href = 'http://localhost:3000/BoloPersonal.html';
                        // $('#login').css('display', 'none');
                        // $('#personal-show').css('display','block');
                        // // alert(json.data);
                        // $("#personal-name-text").text(`${json.data.name}`);
                        // $("#personal-intro span").text(`${json.data.intro}`);
                        // $("#personal-school span").text(`${json.data.school}`);
                        //定个全局变量搞事情
                    
                        
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
        // })
    }
    
})
$('.register').on('click',() => {//注册
    $(function(){
        $.ajax({
            //请求方式
            type: "GET",
            //请求的媒体类型
            contentType: "application/json;charset=UTF-8",
            //请求地址
            url: "http://localhost:8080/register",
            //数据，json字符串JSON.stringify(list)
            data: { user: `${regName.val()}`, pass: `${regPassword.val()}`},
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
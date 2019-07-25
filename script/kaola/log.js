/**
 * 函数名:loginOrRegister
 * 功能:切换登陆注册界面
 */
function loginOrRegister(){
    $(".swapToResigter").click(
        function(){
            $(".main_login").addClass("none");
            $(".main_register").removeClass("none");
        }
    );
    $(".swapToLogin").click(
        function(){
            $(".main_login").removeClass("none");
            $(".main_register").addClass("none");
        }
    );
}
$(document).ready(
    function(){
        loginOrRegister();
    }
);
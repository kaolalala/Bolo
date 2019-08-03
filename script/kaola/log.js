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
/**
* 功能：验证输入
*/
function regTest() {
    let phoneReg = /^[1]([3-9])[0-9]{9}$/;
    let passwordReg = /^[a-zA-Z0-9]{8,16}$/;
    $(".login").click(
        function loginTest() {
            let login_account = $("#login_account").val();
            let login_password = $("#login_password").val();
            //验证手机号
            if (!phoneReg.test(login_account)) {
                $(".tip").text("请输入正确的手机号");
                $(".tip").removeClass("none");
            } else { //如果手机号通过了验证密码
                if (!passwordReg.test(login_password)) {
                    $(".tip").text("请输入8-16位数字或字母的密码");
                    $(".tip").removeClass("none");
                } else { //如果通过了密码和手机号的验证则隐藏提示框
                    $(".tip").addClass("none");
                    //ajax
                }
            }
        }
    )
    $(".register").click(
        function registerTest() {
            let register_phone = $("#register_phone").val();
            let register_password = $("#register_password").val();
            //验证手机号
            if (!phoneReg.test(register_phone)) {
                $(".tip").text("请输入正确的手机号");
                $(".tip").removeClass("none");
            } else {
                if (!passwordReg.test(register_password)) {
                    $(".tip").text("请输入8-16位数字或字母的密码");
                    $(".tip").removeClass("none");
                } else {
                    $(".tip").addClass("none");
                    //发送验证码
                }
            }
        }
    )
}
$(document).ready(
    function () {
        regTest();
    }
)
$(document).ready(() => {
    // 主页进入设置
    let setting = $('#setting');
    setting.on("touchend",(e) => {
        $('#personal-show').css("display","none");
        $('#personal-setting').css("display","block");
    })
    // 设置返回主页
    $('#setting-return').on("touchend",(e) => {
        $('#personal-show').css("display","block");
        $('#personal-setting').css("display","none");
    })
    // 主页进入编辑
    $('#check-button').on("touchend", (e) => {
        $('#personal-show').css("display", "none");
        $('#personal-editor').css("display", "block");
    })
    //编辑返回主页
    $('#editor-return-button').on("touchend",(e) => {
        $('#personal-show').css("display", "block");
        $('#personal-editor').css("display", "none");
    })
    // 编辑页面
    //设置开始编辑按钮
    let flag = 0;//判断当前是编辑还是保存
    $('#editor-button').on("touchend",(e) => {
        if(flag == 0){
            $('#editor-button').text("保存");
            flag = 1;
            $('.editor-content-text').removeAttr("unselectable");
            
        }else {
            $('#editor-button').text("编辑");
            flag = 0;
            $('.editor-content-text').attr("unselectable", "unselectable");
            if ($('#editor-content-name').val() == '') {
                $('#personal-name').text('无')
            }
            else {
               $('#personal-name').text($('#editor-content-name').val());
            }
            $('#personal-intro span').text($('#editor-content-intro').val());
            if ($('#editor-content-school').val() == ''){
                $('#personal-school span').text('暂无介绍');
            }
            else {
                $('#personal-school span').text($('#editor-content-school').val());
            }
        }
    })
})
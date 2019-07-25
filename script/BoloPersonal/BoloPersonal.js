$(document).ready(() => {
    let setting = $('#setting');//主页的设置按钮
    let homepage = $('#personal-show');//主页
    let setPage = $('#personal-setting');//设置的页面
    let editorPage = $('#personal-editor');//编辑页面
    let editorBtn = $('#editor-button');//编辑与保存切换按钮
    let sexSelect = $('.sex-select');//性别选择按钮
    let sexContent = $('.sex-content');//性别内容
    // 主页进入设置
    setting.on("touchend",(e) => {
        homepage.css("display","none");
        setPage.css("display","block");
    })
    // 设置返回主页
    $('#setting-return').on("touchend",(e) => {
        homepage.css("display","block");
        setPage.css("display","none");
    })
    // 主页进入编辑
    $('#check-button').on("touchend", (e) => {
        homepage.css("display", "none");
        editorPage.css("display", "block");
    })
    //编辑返回主页
    $('#editor-return-button').on("touchend",(e) => {
        homepage.css("display", "block");
        editorPage.css("display", "none");
    })
    // 编辑页面
    //设置开始编辑按钮
    let flag = 0;//判断当前是编辑还是保存
    let sex = 0;//判断男女0男1女
    editorBtn.on("click",(e) => {//编辑与保存按钮点击
        if(flag == 0){
            editorBtn.text("保存");
            flag = 1;
            $('.editor-content-cover').css("display","none");//去掉遮盖可以编辑了
            //编辑内容字体变黑
            $('.editor-content p').css("color","black");
            $('.editor-content-text').css("color","black");
            //性别的选择
            $(sexContent[0]).text("男");//初始化选择项
            $(sexContent[1]).text("女");
            sexSelect.css("opacity","1");
            for(let i=0;i<sexSelect.length;i++)
            {
                $(sexSelect[i]).on("touchend",() => {
                    sexSelect.css("background","transparent");
                    $(sexSelect[i]).css("background","yellow");
                    sex = i;
                })
            }
            for (let i = 0; i < sexContent.length; i++) {
                $(sexContent[i]).on("touchend", () => {
                    sexSelect.css("background", "transparent");
                    $(sexSelect[i]).css("background", "yellow");
                    sex = i;
                })
            }
        }else {
            editorBtn.text("编辑");
            flag = 0;
            //性别保存
            sexSelect.css("opacity", "0");//性别选择框
            $(sexContent[1]).text("");//第二个清空先
            if(sex == 0){//判断性别0男
                $(sexContent[0]).text("男");
                console.log($("#sign-sex").attr("src"));                
                $("#sign-sex").attr("src", "images/personal/sign-boy.png");
                console.log($("#sign-sex").attr("src"));
            }
            else {
                $(sexContent[0]).text("女");
                $("#sign-sex").attr("src", "images/personal/sign-girl.png");
            }
            //编辑内容字体变灰
            $('.editor-content p').css("color", "#818181");
            $('.editor-content-text').css("color", "#818181");
            $('.editor-content-cover').css("display", "block");//遮盖盖回去
            //下面三个编辑反映到个人主页
            //编辑昵称
            if ($('#editor-content-name').val() == '') {
                $('#personal-name-text').text('无')
            }
            else {
                $('#personal-name-text').text($('#editor-content-name').val());
            }
            //编辑简介
            $('#personal-intro span').text($('#editor-content-intro').val());
            //编辑学校
            if ($('#editor-content-school').val() == ''){
                $('#personal-school span').text('暂无介绍');
            }
            else {
                $('#personal-school span').text($('#editor-content-school').val());
            }
        }
    })
    //功能区的切换
    let functionZone = $('.function');
    for (let i = 0; i < functionZone.length;i++)
    {
        $(functionZone[i]).on('click',() => {
            $('.function-bottom-line').css("opacity","0");
            $($('.function-bottom-line')[i]).css("opacity", "1");
        })
    }
})
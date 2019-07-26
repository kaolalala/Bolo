$(document).ready(() => {
    let setting = $('#setting');//主页的设置按钮
    let homepage = $('#personal-show');//主页
    let setPage = $('#personal-setting');//设置的页面
    let editorPage = $('#personal-editor');//编辑页面
    let editorBtn = $('#editor-button');//编辑与保存切换按钮
    let sexSelect = $('.sex-select');//性别选择按钮
    let sexContent = $('.sex-content');//性别内容
    let file = document.getElementById('editor-img-file');//文件传输头像
    let headPortraitEditor = document.getElementById('head-portrait-editor');//编辑区的头像
    let headPortrait = document.getElementById('head-portrait');//头像
    // 主页进入设置
    PageChange(setting, setPage,homepage);
    // 设置返回主页
    PageChange($('#setting-return'),homepage,setPage);
    // 主页进入编辑
    PageChange($('#check-button'), editorPage, homepage);
    //编辑返回主页
    PageChange($('#editor-return-button'), homepage, editorPage);
    
    // 编辑页面
    //设置开始编辑按钮
    let flag = 0;//判断当前是编辑还是保存
    let sex = 2;//判断男女0男1女现在2是不男不女
    editorBtn.on("click",(e) => {//编辑与保存按钮点击
        if(flag == 0){
            editorBtn.text("保存");
            flag = 1;
            $('.editor-content-cover').css("display","none");//去掉遮盖可以编辑了
            //编辑内容字体变黑
            $('.editor-content p').css("color","black");
            $('.editor-content-text').css("color","black");
            //性别的选择
            $('#sex-last-select').text("")//初始化选择项
            $(sexContent[0]).text("男");
            $(sexContent[1]).text("女");
            sexSelect.css("opacity","1");
            // for(let i=0;i<sexSelect.length;i++)
            // {
            //     $(sexSelect[i]).on("touchend",() => {
            //         sexSelect.css("background","transparent");
            //         $(sexSelect[i]).css("background","yellow");
            //         sex = i;
            //     })
            // }
            // for (let i = 0; i < sexContent.length; i++) {
            //     $(sexContent[i]).on("touchend", () => {
            //         sexSelect.css("background", "transparent");
            //         $(sexSelect[i]).css("background", "yellow");
            //         sex = i;
            //     })
            // }
            $('#select-boy').on("touchend", () => {
                sexSelect.css("background", "transparent");
                $(sexSelect[0]).css("background", "yellow");
                sex = 0;
            })
            $('#select-girl').on("touchend", () => {
                sexSelect.css("background", "transparent");
                $(sexSelect[1]).css("background", "yellow");
                sex = 1;
            })
        }else {
            editorBtn.text("编辑");
            flag = 0;
            //性别保存
            sexSelect.css("opacity", "0");//性别选择框
            $(sexContent).text("");//第二个清空先
            if(sex == 0){//判断性别0男
                $('#sex-last-select').text("男");              
                $("#sign-sex").attr("src", "images/personal/sign-boy.png");
            }
            else if(sex == 1){
                $('#sex-last-select').text("女");
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
    //换头像
    file.onchange = () => {
        let readFile = new FileReader();
        readFile.readAsDataURL(file.files[0]);
        readFile.onloadend = function () {
            headPortraitEditor.style.background = `url(${readFile.result}) no-repeat center`;
            headPortraitEditor.style.backgroundSize = "cover";
            headPortrait.style.background = `url(${readFile.result}) no-repeat center`;
            headPortrait.style.backgroundSize = "cover";
        }
    }
//编辑区的简介变宽
    // let editorContentIntro = $('#editor-content-intro');//简介的文本框
    // editorContentIntro.on("focus",() => {
    //     if (editorContentIntro.val().substring(0, 38).length > 19) {
    //     $('#editor-intro').css("height", "14vw");
    //     console.log($('#editor-intro').css("height"));
    // }
    // })
    let editorContentIntro = document.getElementById('editor-content-intro');
    console.log(editorContentIntro.innerText);
    function changeHeight() {
        if (editorContentIntro.innerText.length > 19) {
            document.getElementById('editor-intro').style.height = "14vw";
            console.log(document.getElementById('editor-intro').style.height);
        }
        }
    editorContentIntro.onclick = changeHeight();
})
//函数进入设置
/* 
* name: PageChange
* description: 页面切换
* peram: 
* return: none
*/
let PageChange = (btn,pageShow,pageHide) => {
    btn.on("touchend",() => {
        pageShow.css("display", "block");
        pageHide.css("display", "none");
    })
}

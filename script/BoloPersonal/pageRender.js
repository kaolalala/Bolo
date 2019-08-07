$(function(){
    $.ajax({
    //请求方式
    type: "GET",
    //请求的媒体类型
    contentType: "application/json;charset=UTF-8",
    //请求地址
        url: 'http://localhost:3000/Personal',
    //数据，json字符串JSON.stringify(list)
    // data: { act: 'Personal' },
    //请求成功
    success: function (str) {
        let json = eval('(' + str + ')');
        console.log("json : ", json);
        //个人主页
        $('#personal-name-text').text(json.data.name);
        $('#personal-intro span').text(`${json.data.intro}`);
        $('#sex-last-select').text(`${json.data.sex}`);
        $('#personal-school span').text(`${json.data.school}`);
        $('#head-portrait').css("backgroundImage", `${json.data.src}`);//头像
        //编辑区的
        $('#head-portrait-editor').css("backgroundImage", `${json.data.src}`);//头像
        $('#editor-content-name').val(`${json.data.name}`);
        $('#editor-content-intro').val(`${json.data.intro}`);
        $('#sex-last-select').text(`${json.data.sex}`);
        if (`${json.data.sex}` == `男`){
            $("#sign-sex").attr("src", "images/personal/sign-boy.png");
        }else if(`${json.data.sex}` == `女`){
            $("#sign-sex").attr("src", "images/personal/sign-girl.png");
        }
        $('#editor-content-school').val(`${json.data.school}`);
        console.log('ojbk');
    },
    //请求失败，包含具体的错误信息
    error: function (e) {
        console.log(e.status);
        console.log(e.responseText);
    }
});
});


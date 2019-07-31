let login = $('.login');//获取login按钮
const http = require('http');
const fs = require('fs');
let urlLib = require('url');
//创建服务器
let server = http.createServer(function(req,res){
    //解析数据
    var str = '';
    req.on('data',function(data){
        str += data;
    });
    req.on('end',function(){
        var obj = urlLib.parse(req.url,true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        //区分--接口,文件
        if(url == '/user'){//接口
            switch(GET.act){
                case 'reg':
                    //1检查用户是否已经有了
                    if(users[GET.users]){
                        res.write("{'ok': false,'msg': '此用户已经注册了'}");
                    }else{//2插入users
                        users[GET.user] = GET.pass;
                        res.write("{'ok': true,'msg': '注册成功'}");
                    }
                    break;
                case 'login':
                    if(users[GET.user] == null){
                        res.write("{'ok':false,'msg':'此用户不存在'");
                    }else{
                        if(users[GET.user] != GET.pass){
                            res.write("{'ok':false,'msg':'此用户或密码有误'");
                        }else{
                            res.write("{'ok':true,'msg':'登录成功'");
                        }
                    }
                    break;
                default:
                    res.write("{'ok': false,'msg': '未知的act'}");
            }
            res.end();
        }else{//文件
            //读取文件
            var file_name = './data' + url;
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
    });
});
server.listen(8080);
let users = {};
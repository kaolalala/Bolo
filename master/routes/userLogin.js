const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
let mysql = require('mysql');
let server = express();
let db = mysql.createConnection({ host: 'localhost', port: 3306, user: 'root', password: '123456', database: 'bolo' });
db.connect();
let users = [];
server.use(bodyParser.urlencoded({
    extended: false,
    limit: 5 * 1024 * 1024
}));
server.use(express.static('../'));
//登录
router.get('/login', (req, res) => {
    let GET = req.query;
    db.query("SELECT * FROM `user_message` WHERE user=?", GET.user, (err, data) => {
        if (err) {
            res.send('出错了', err);
        }
        else {
            users = data;
            console.log(users[0]);
            //判断注册没
            if (users.length == 0) {
                console.log('此用户不存在');
                res.send(`{'ok': false,'msg': '此用户不存在' }`);
            } else {
                if (users[0].password == GET.pass) {
                    console.log('登录成功');
                    res.send(`{'ok': true,'msg': '登录成功', 'data': ${JSON.stringify(users[0])} }`);
                    onlyUser = users[0].user;
                } else {
                    console.log('密码错误');
                    res.send("{'ok': false,'msg': '密码错误'}");
                }
            }
        }
        // res.end();
    })
});


module.exports = router;

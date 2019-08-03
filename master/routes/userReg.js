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
//注册
router.get('/register', (req, res) => {
    let GET = req.query;
    db.query("SELECT * FROM `user_message` WHERE user=?", GET.user, (err, data) => {
        if (err) {
            // res.send('出错了', err);
            res.json({
                code: 400,
                msg: err
            })
        }
        else {
            users = data;
            console.log(users);
            //判断注册没
            if (users.length == 0) {
                db.query("INSERT INTO `user_message`  (`ID`,`user`,`password`,`name`,`intro`,`sex`,`school`)  VALUES(0,?,?,?,?,?,?)", [GET.user, GET.pass, '', '', '', '', ''], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('注册成功');
                    }
                });
                res.send("{'ok': true,'msg': '注册成功'}");
            } else {
                res.send("{'ok': false,'msg': '此用户已经注册了'}");
                console.log('此用户已经注册了');
            }
        }
        // res.end();
    })
});


module.exports = router;

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
    limit: 2 * 1024 * 1024
}));
server.use(express.static('../'));
//登录
router.get('/Personal', (req, res) => {
    let GET = req.query;
    db.query("SELECT * FROM `user_message` WHERE user=?", '123456789', (err, data) => {
        if (err) {
            res.send('出错了', err);
        }
        else {
            users = data;
            console.log(users[0]);
            //返回一个东东
            res.send(`{'ok': true,'msg': '登录成功', 'data': ${JSON.stringify(users[0])} }`);
        }
    })
});


module.exports = router;

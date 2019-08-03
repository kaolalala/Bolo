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
router.get('/editor', (req, res) => {
    let GET = req.query;
    // db.query("SELECT * FROM `user_message` WHERE user=?", GET.user, (err, data) => {
    //     if (err) {
    //         res.send('出错了', err);
    //     }
    //     else {
    //         users = data;
    //     }
    //     // res.end();
    // });
    db.query("UPDATE `user_message` SET name=?,intro=?,sex=?,school=? WHERE user=?",[GET.name,GET.intro,GET.sex,GET.school,GET.user],(err,data)=>{
        if(err){
            res.send('出错了', err);
        }else{
            console.log("存入数据库");
            res.send("{ok: true}");
            console.log(onlyUser);
        }
    }) ;
});


module.exports = router;

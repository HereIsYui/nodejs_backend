var express = require('express');
var app = express();
var http = require('http').Server(app);
let LOGGER = require('../utils/logger.js');
const CONFIG = require('../config/config.js'); // 引入配置文件
const UTILS = require('../utils/utils.js');
const bodyParser = require("body-parser");

// 使用 body-parser 中间
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public')) // 搭建静态目录

// 初始化
function init() {
    // 设置跨域
    app.all('*', function(req, res, next) {
        //设为指定的域
        res.header('Access-Control-Allow-Origin', "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header('Access-Control-Allow-Credentials', true);
        res.header("X-Powered-By", ' 3.2.1');
        next();
    });
}

init() // 初始化接口

http.listen(CONFIG.SERVER_PORT, function() {
    LOGGER.Success('Yui-Server Start at:' + CONFIG.SERVER_PORT)
});
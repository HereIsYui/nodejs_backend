var express = require('express');
var app = express();
var http = require('http').Server(app);
let LOGGER = require('../utils/logger.js');
const CONFIG = require('../config/config.js'); // 引入配置文件
const UTILS = require('../utils/utils.js');
const bodyParser = require("body-parser");

// 引入定时器程序
require('../batch/schedule_manager');
// 使用 body-parser 中间
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// 搭建静态目录
app.use(express.static('public'))

// 初始化
function init() {
    // 设置跨域
    app.all('*', function (req, res, next) {
        //设为指定的域
        res.header('Access-Control-Allow-Origin', "*");
        // 这里设置允许跨域的域名，*代表所有↑↑↑↑↑↑↑↑↑↑↑↑ 
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header('Access-Control-Allow-Credentials', true);
        res.header("X-Powered-By", ' 3.2.1');
        next();
    });
    // API接口模板
    app.get('/apiTest', function (req, res) {
        require('./router/api_template.js')(req, res);
    })
}

init() // 初始化服务

http.listen(CONFIG.SERVER_PORT, function () {
    LOGGER.Success('Server Start at:' + CONFIG.SERVER_PORT)
});
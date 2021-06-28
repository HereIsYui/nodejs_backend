/**
 * 后台配置文件
 * 修改时间： 2021年6月28日10:05
 * 创建时间： 2021年6月28日08:30
 */

// 日志存储开关
var LOG_PRINT = true;

// 日志存储位置
var LOG_PATH = "/Log/";

// 日志格式
var LOG_PATH_FORMAT = ".txt";

// 服务器连接配置
var SERVER_HOST = "https://xxx.xxxx.xxx/API/";

// 项目启动端口
var SERVER_PORT = 3000;

//数据库配置
//数据库连接属性
var MYSQL_CONFIG = {
    host: 'www.lingmx.com',
    user: 'yui_server',
    password: 'wcHaSyxwJiejHnD3',
    database: 'yui_server',
    timezone: '+8:00'
};

//数据库字符编码配置
var MYSQL_UTF = "SET character_set_client=utf8,character_set_connection=utf8";

//断线消息
var MYSQL_CONNECT_ERROR = 'error';

//定时任务启动开关
var SCHEDULE_START = 'ON';

module.exports = {
    LOG_PRINT,
    LOG_PATH,
    LOG_PATH_FORMAT,
    SERVER_HOST,
    SERVER_PORT,
    MYSQL_CONFIG,
    MYSQL_UTF,
    MYSQL_CONNECT_ERROR,
    SCHEDULE_START
}
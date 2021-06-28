//控制台日志工具类
var fs = require('fs');
var colors = require('colors');
var sd = require('silly-datetime');
var CONFIG = require('../config/config.js');

var DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var DATE_FORMAT = 'YYYY-MM-DD';
var LINE_CODE = "\n";
var COLON = " : ";
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

function SaveLog(log) {
    var fileName = CONFIG.LOG_PATH + "log-" + sd.format(new Date(), DATE_FORMAT) + CONFIG.LOG_PATH_FORMAT;
    fs.appendFile(fileName, log + LINE_CODE, function(err) {
        if (err) {
            return console.log(err.silly)
        }
    })
}

function Err(log) {
    log = sd.format(new Date(), DATE_TIME_FORMAT) + COLON + log;
    console.log(log.error)
    if (CONFIG.LOG_PRINT) {
        SaveLog(log);
    }
}

function Success(log) {
    log = sd.format(new Date(), DATE_TIME_FORMAT) + COLON + log;
    console.log(log.info)
    if (CONFIG.LOG_PRINT) {
        SaveLog(log);
    }
}

function warn(log) {
    log = sd.format(new Date(), DATE_TIME_FORMAT) + COLON + log;
    console.log(log.warn)
    if (CONFIG.LOG_PRINT) {
        SaveLog(log);
    }
}

function help(log) {
    log = sd.format(new Date(), DATE_TIME_FORMAT) + COLON + log;
    console.log(log.help)
    if (CONFIG.LOG_PRINT) {
        SaveLog(log);
    }
}

function Log(log) {
    log = sd.format(new Date(), DATE_TIME_FORMAT) + COLON + log;
    console.log(log.verbose)
    if (CONFIG.LOG_PRINT) {
        SaveLog(log);
    }
}

module.exports = {
    Err,
    Success,
    warn,
    help,
    Log
}
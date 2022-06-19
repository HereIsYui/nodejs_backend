var schedule = require('node-schedule');
var query = require('../db/mysql.js');
var LOGGER = require('../utils/logger');

function scheduleMySQLHeartBeat() {

    var rule2 = new schedule.RecurrenceRule();
    var times2 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
    rule2.minute = times2;
    // 每5分钟心跳连接一次
    schedule.scheduleJob(rule2, function () {
        query("SELECT 1", [], function (e, r) {
            if (e) {
                LOGGER.Err("schedule_remote_db_heartbeat:" + JSON.stringify(e));
            } else {
                LOGGER.Log("schedule_remote_db_heartbeat:" + JSON.stringify(r));
            }
        });
    });
}

scheduleMySQLHeartBeat();
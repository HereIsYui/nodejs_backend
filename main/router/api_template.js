/**
 * API接口模板
 */
let query = require('../../db/mysql');
let LOGGER = require('../../utils/logger');
module.exports = function (req, res) {
    var resStr = {
        code: 0,
        msg: 'success'
    }
    try {
        res.send(resStr);
        // 简单的查询API
        // let sql = "SELECT * FROM xxxx WHERE delete_flag = 0;";
        // query(sql, function (err, result) {
        //     if (err) {
        //         resStr.code = -1;
        //         resStr.msg = "数据查询失败！";
        //         LOGGER.Err("服务器连接异常：" + JSON.stringify(err))
        //         res.send(resStr);
        //     } else {
        //         resStr.data = result;
        //         res.send(resStr);
        //     }
        // })
    } catch (error) {
        resStr.code = -1;
        resStr.msg = '服务器异常！';
        LOGGER.Err("服务器异常：" + JSON.stringify(error))
        res.send(resStr);
    }
}
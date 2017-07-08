const db = require("../models/db");

exports.insert = function(req, res) {
    // console.log(res, res);
    //console.log(req.query);

    // 获取了学生的信息
    var studentInfo = req.query;

    db.insertOne("student", studentInfo, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": 20, "data": "插入数据库错误" })
            return;
        }
        res.json({ "status": 10, "data": 1 })
    })
}

exports.all = function(req, res) {
    var studentInfo = req.query;
    console.log(studentInfo);
    db.findAll('student', studentInfo, { xuehao: 1 }, function(err, data) {
        if (err) {
            console.log(err);
            res.json({ "status": 30, "data": "查询数据库错误" })
            return;
        }
        res.json({ "status": 10, "data": data })
    })
}
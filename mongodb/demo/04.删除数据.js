const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/manage";
let objectId = require('mongodb').ObjectID;

//链接数据库
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('数据库连接失败');
        return;
    }
    console.log('数据库链接成功');

    var data = { 'name': 'zhaoyun' };
    db.collection('student').deleteMany(data, function(err, result) {
        if (err) {
            console.log('数据删除失败');
            return;
        }
        console.log('数据删除成功');
        db.close();
    })
})
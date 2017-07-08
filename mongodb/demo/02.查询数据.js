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

    var cursor = db.collection('student').find({});
    cursor.each(function(err, doc) {
        console.log(doc);
        if (doc != null) {
            console.log('数据查询成功');
            console.log(doc.name, doc.age);
            db.close();
        }
    })

})
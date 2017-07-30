/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://weblesson8:weblesson8@ds117913.mlab.com:17913/aplwebdemo';// change it with your db credentials

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = [
        {Id: '4af31b30f964a520b3ea21e3', Name: 'English Premier League'},
        {Id: '4b019e70f964a520ff4322e3', Name: 'La Liga'},
        {Id: '4b944769f964a520a37234e3', Name: 'Bundesliga'},
        {Id: '4bbcc68fa0a0c9b696c61a0f', Name: 'French League 1'},
        {Id: '55008ea0498ef17172c53198', Name: 'MLS'},
    ];
    db.collection("Restaurants").insertMany(myobj, function (err, res) {
        if (err) throw err;
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("Restaurants").find({}).toArray(function (err, result) {
        if (err) throw err;
        db.close();
        var fs = require('fs');
        var data = []
        for (i = 0; i < 10; i++) {
            var obj = {
                name: result[i].Name,
                id: result[i].Id

            }
            data.push(obj)
        }
        var newdata = [{
            "name": "Soccer",
            "parent": "US",
            "children": data
        }
        ]
        fs.writeFile("Restaurants.json", JSON.stringify(newdata), function (err) {
                if (err) throw err;
            }
        );
    });
});
var express = require ('express');
var router = express.Router();
var mongodb.js = require('mongodb.js');
var db = mongojs('mongodb://<jcc89b>:<jermaine1>@ds157712.mlab.com:57712/ice6', ['student info'])

router.get('student info', function(req, res, next){
   db.info.find(function(err, info){
       if(err){
           res.send(err);
       }
       res.json(tasks);
   });
});


router.get('/student info /id', function(req, res, next){
   db.info.findOne({_id: mongojs.Object(req.params.id)}, function(err, info){
       if(err){
           res.send(err);
       }
       res.json(info);
   });
});

router.get('/student info', function(req, res, next){
   var info = req.body;
    if(!info.title || (info.isDOne +'')){
        res.status(400);
        res.json({
            "error": "Bad Data"
       });
    }else {
        db.info.save(info, function(err, info){
            if(err){
                res.json(info);
        }):
    }
});
        
router.delete('/info/:id', function(req, res, next){
   db.info.remove({_id: mongojs.ObjectId(req.params.id){, function(err, info){
       if(err){
           res.send(err);
       }
       res.json(info);
        }):
});
    
router.put('/info/:id', function(req, res, next){ 
    var info = req.body;
    var updInfo = {};
       if(info.isDone){
         updInfo.isDone = info.isDone;
       }
      if(info.title){
         updInfo.title = info.title;
       mongojs.ObjectId(req.params.id){, function(err, info){
         if(err){
           res.send(err);
       }
       res.json(info);
        }):
   });
});
    
module.exports = router;
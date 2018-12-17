var express = require('express');
var router = express.Router();
var fs=require('fs');
var jsonPath = __dirname+"/localTestData.json";
/**
 * 读取json
 */
var ReadJson =function(){
    var jsonObject=JSON.parse(fs.readFileSync(jsonPath));
    return jsonObject;
 }

var readJson =  ReadJson();
 for(var key in readJson){
     
     var jsonItem = readJson[key];
     if(jsonItem.type==="post"){
      
        router.post("/"+key,function (req,res,next) {
            var path = req.path;
            var localKey = path.substring(1,path.length);
            res.send(ReadJson()[localKey].data);
       });
     }else if(jsonItem.type==="get"){
        router.get("/"+key,function (req,res,next) {
            var path = req.path;
            var localKey = path.substring(1,path.length);
            res.send(ReadJson()[localKey].data);
       });
     }else{
        router.get("/"+key,function (req,res,next) {
            var path = req.path;
            var localKey = path.substring(1,path.length);
            res.send(ReadJson()[localKey].data);
       });
     }
    
 }

 //模拟请求开始
// router.get("/test",function (req,res,next) {
    
//     res.send(ReadJson().test);
    
// });
// router.post("/aaa",function (req,res,next) {
    
//     res.send(ReadJson().aaa);
    
// });

module.exports = router;
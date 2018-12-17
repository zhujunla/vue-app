var express = require('express');
var proxyPath = "http://113.204.96.35:3351";//目标后端服务地址测试分支
// var proxyPath = "http://192.168.0.187:8080/donghuanapi"; //目标后端服务地址
var multipart = require('connect-multiparty');
var SecurityUtil =require("./SecurityUtil")
var localTest =require("./localTest")
var bodyParser = require('body-parser');
var request = require("request");

var multer  = require('multer')
var fs = require('fs');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/nodeserver/uploads');
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
var upload = multer({storage: storage})
var app = express();
var multipartMiddleware = multipart();
const PORT=3002;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req,res,next){
  next();
});
// app.use(upload.single('file'));
app.use(express.static("../public"));
app.use(localTest)

app.post('/imageUpload', upload.single('file'), function (req, res) {
    var requestURL = proxyPath + '/com/file/imageUpload';
    var files = req.file;
    var headers = req.headers
    // if(req.body.session_id){
    //     headers.session_id = req.body.session_id;
    // }

    headers["access_token"] = "06332fff92be4fae9765923877a86f91";
    delete headers["content-length"];
    // console.info(__dirname + '/' + files.path)
    var options = {
        method: req.method,
        url: requestURL,
        headers: headers,
        formData: {
            file: {
                value: fs.createReadStream(files.path),
                options: {
                    filename: files.filename,
                    contentType: files.mimetype
                }
            }
        }
    };
    request(options, function (error, response, body) {
        // var uploads = './uploads'
        // fs.unlink('./' + files.path, function (err) {
        //     if (err) {
        //         console.error(err);
        //     }
        //     console.log("文件删除成功！");
        // })
        if (error) {
            console.log(error)
            res.send({
                data:{
                    
                    code:-5,
                    msg:'链接断开'
                    
                }
            });
        }else{
            res.send(body);
        };
    });
})
app.use("/pcWaste",multipartMiddleware,function(req,res,next){
var requestURL  = proxyPath+req.originalUrl;

        // var params = SecurityUtil(req)
        // console.info(req)
        var headers = req.headers;
        // headers["'Content-Type"]="multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW";
        // headers["cache-control"]="no-cache" ;
        // delete headers["content-length"];
        var options = { 
            method: req.method,
            url: requestURL,
            headers:{
                "x-htwl-waste":headers["x-htwl-waste"]||"",
                "x-htwl-waste-token":headers["x-htwl-waste-token"]||"",
            },
            formData:req.body
        };
        request(options, function (error, response, body) {
            if (error) {
                console.log(error)
                res.send({
                    data:{                        
                        code:-5,
                        msg:'链接断开'                        
                    }
                });
            }else{
                res.send(body);
            };
        });

})


console.log("代理服务器启动!端口占用:"+PORT)
app.listen(PORT);


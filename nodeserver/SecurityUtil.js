/**
 * Created by Administrator on 2017/8/1 0001.
 */
var UUID = require('node-uuid');
const Key ="123";
var crypto = require('crypto');

var SecurityUtil=function(req){

    var body =req.body;

    var paramArray=[];

    var sign_body={};
   
    for(var paramName in body){
        if(!body[paramName]){
            continue;
        }else{
            paramArray.push(paramName);
            sign_body[paramName]=body[paramName];
        }
    }
    var time_str=new Date().getTime()
    var nonce_str= UUID.v1();
    paramArray.push("time_str");
    paramArray.push("nonce_str");
    sign_body.time_str=time_str;
    sign_body.nonce_str=nonce_str;
    //处理参数名称排序
    // Arrays.sort(paramArray, String.CASE_INSENSITIVE_ORDER);
    paramArray.sort(function (s,t) {
        var a = s.toLowerCase();
        var b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });


    var result_array=[];
    for(var i=0;i<paramArray.length;i++){
        var paramName = paramArray[i];

        var paramValue=sign_body[paramName];
        result_array.push(paramName+"="+paramValue)
    }
    result_array.push("key="+Key);
   var sign_string= result_array.join('&');
  
   var md5_sign_string = md5(sign_string).toUpperCase();

    sign_body.sign=md5_sign_string;
   
    return sign_body;
};

var md5 = function(str) {
    str = (new Buffer(str)).toString();
    var ret = crypto.createHash('md5').update(str,"utf8").digest("hex");
    return ret;
};

module.exports=SecurityUtil;
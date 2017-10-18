var gulp = require("gulp");
var server = require("gulp-webserver");

var url = require("url");
var path = require("path");
var fs = require("fs");
gulp.task("server", function () {
      gulp.src('./')//得到根路径
        .pipe(server({
             //实时刷新
              port: 3000,
              host: 'localhost',
              livereload: true,
              //open: true, // 服务器启动时自动打开网页
             //访问的路径是否显示
              directoryListing: {
                 path: './', //从哪个目录下开始启动
                 enable: true
              },
              middleware:function(req,res,next){
                  var urlobj = url.parse(req.url).query;  // 获取地址栏参数
                  var mockfileName = path.join(__dirname,"Data",urlobj+".json"); //拼接路径
                  console.log(mockfileName); //找到json存放的位置


                  //用fs读取文件在返回给web浏览器
                  fs.exists(mockfileName, function (exist) {
                      if(!exist){
                          var data = {
                            "title":"对不起,你没有请求到数据",
                              "beau":"因为他不存在",
                              "arc":"哈哈,骗你的下面就可以得到数据了"
                          };
                          res.writeHead(200,{
                              'content-type':"utf-8",
                              'Access-Control-Allow-Origin':'localhost:63342'
                          });
                          res.end(JSON.stringify(data));
                      }else{
                          fs.readFile(mockfileName, function (err,result) {
                              if(err) throw err;
                              res.writeHead(200,{
                                  'content-type':"utf-8",
                                  'Access-Control-Allow-Origin':'http://localhost:63342'
                              });

                              res.end(result.toString());
                          })

                      }
                  })

              }
         }))

        });
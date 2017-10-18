var gulp = require("gulp");
var server = require("gulp-webserver");

var url = require("url");
var path = require("path");
var fs = require("fs");
gulp.task("server", function () {
      gulp.src('./')//�õ���·��
        .pipe(server({
             //ʵʱˢ��
              port: 3000,
              host: 'localhost',
              livereload: true,
              //open: true, // ����������ʱ�Զ�����ҳ
             //���ʵ�·���Ƿ���ʾ
              directoryListing: {
                 path: './', //���ĸ�Ŀ¼�¿�ʼ����
                 enable: true
              },
              middleware:function(req,res,next){
                  var urlobj = url.parse(req.url).query;  // ��ȡ��ַ������
                  var mockfileName = path.join(__dirname,"Data",urlobj+".json"); //ƴ��·��
                  console.log(mockfileName); //�ҵ�json��ŵ�λ��


                  //��fs��ȡ�ļ��ڷ��ظ�web�����
                  fs.exists(mockfileName, function (exist) {
                      if(!exist){
                          var data = {
                            "title":"�Բ���,��û����������",
                              "beau":"��Ϊ��������",
                              "arc":"����,ƭ�������Ϳ��Եõ�������"
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
var express = require('express');
var router = express.Router();
var favicon = require('serve-favicon');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var log4js = require("log4js");
log4js.configure('./utils/log4j.json');
var history = require('connect-history-api-fallback'); // 引入history模块
var app = express();

// 引入history模式让浏览器进行前端路由页面跳转
app.use(history());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(log4js.connectLogger(log4js.getLogger("http"), {level: 'trace', format: ':method :url'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// 首页请求
//app.get('*', require('./routes/index'));
app.get("/",function (req,res,next) {
  res.sendFile('index.html')
})


app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})


app.use('/health', function (req, res) {
  res.send('200');
});

// api 请求处理
app.use("/api", require('./routes/api'))

// 如果是下载页面，则直接跳转到应用宝，由应用宝负责不同平台的app下载
app.get('*', function (req, res, next) {
  if ('/app/download' === req.path) {
    res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.ezijing');
  } else {
    next();
  }
});




app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500);
  res.send({message: err.message});
});

// 设置监听端口
const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => {
  console.info(`服务已经启动，监听端口${SERVER_PORT}`)
});

module.exports = app;

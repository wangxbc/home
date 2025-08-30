// Vercel的API入口文件
const app = require('../app');

// Vercel需要导出一个默认的请求处理函数
module.exports = app;

// 注意：Vercel会自动处理监听端口，不需要在这个文件中调用app.listen()
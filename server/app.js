var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let { expressjwt } = require("express-jwt");
var cors = require("cors");

// 导入数据库配置
require("./config/db.config");

var articlesRouter = require("./routes/articles");
var usersRouter = require("./routes/users");
var uploadRouter = require("./routes/upload");
const commentsRouter = require("./routes/comments");

var app = express();

app.use(
  cors({
    origin: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, 
  })
);

app.options("*", cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 从环境变量读取JWT密钥，如果没有则使用默认值
const jwtSecret = process.env.JWT_SECRET || "test12345";

app.use(
  expressjwt({
    secret: jwtSecret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      // 登录和注册接口不需要认证
      { url: "/api/users/login", methods: ["POST"] },
      { url: "/api/users/register", methods: ["POST"] },
      
      // 上传接口不需要认证
      "/api/upload",
      
      // 所有文章相关的GET请求都不需要认证
      /^\/api\/articles\/users\/\w+/,
      {
        url: /^\/api\/articles\/\w+/,
        methods: ["GET"],
      },
      { url: "/api/articles", methods: ["GET"] },
      
      // 所有评论相关的GET请求都不需要认证
      { url: /^\/api\/comments\/\w+/, methods: ["GET"] },
      { url: "/api/comments", methods: ["GET"] },
    ],
  })
);


app.use("/api/users", usersRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/comments", commentsRouter);

app.use(function (err, req, res, next) {
  console.error("Error:", err);

  res.status(err.status || 500);

  if (err.name === "UnauthorizedError") {
    return res.json({
      code: 0,
      msg: "无效的token或者没有传递token-请重新登录",
    });
  }

  if (err.status === 404) {
    return res.json({
      code: 0,
      msg: "请求的资源不存在",
    });
  }

  res.json({
    code: 0,
    msg: err.message || "服务器错误",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

// 从环境变量读取端口号，如果没有则使用默认值
const PORT = process.env.PORT || 5000;

// 只有在非Vercel环境中才调用app.listen()
// Vercel会自动处理端口监听
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

module.exports = app;

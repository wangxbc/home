var express = require("express");
var router = express.Router();
/* GET users listing. */
let { User } = require("../models/index");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/register",
  upload.single("avatar"),
  async function (req, res, next) {
    try {
      console.log("注册请求 body:", req.body);
      console.log("注册请求 file:", req.file);

      const { username, password, nickname } = req.body;
      const headImgUrl = req.file ? req.file.buffer.toString("base64") : null;

      if (!username || !password || !nickname) {
        return res.json({
          code: 0,
          msg: "注册失败-缺少参数",
        });
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.json({
          code: 0,
          msg: "注册失败-用户名已存在",
        });
      }

      const newUser = new User({
        username,
        password,
        nickname,
        headImgUrl,
      });

      const savedUser = await newUser.save();
      console.log("用户创建成功:", savedUser);

      return res.json({
        code: 1,
        msg: "注册成功",
        user: {
          id: savedUser._id,
          username: savedUser.username,
          nickname: savedUser.nickname,
          avatar: savedUser.headImgUrl,
        },
      });
    } catch (error) {
      console.error("注册错误:", error);
      return res.json({
        code: 0,
        msg: "注册失败-服务器错误",
        error: error.message,
      });
    }
  }
);


let jwt = require("jsonwebtoken");
router.post("/login", async function (req, res, next) {
  try {
    console.log("登录请求:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.json({
        code: 0,
        msg: "登录失败-缺少用户名或密码",
      });
    }

    const user = await User.findOne({ username, password });
    if (!user) {
      return res.json({
        code: 0,
        msg: "登录失败-用户名或密码错误",
      });
    }

    const token = jwt.sign(
      {
        username: user.username,
        uid: user._id,
      },
      "test12345",
      {
        expiresIn: "1h",
        algorithm: "HS256",
      }
    );

    console.log("登录成功:", { username: user.username });
    return res.json({
      code: 1,
      msg: "登录成功",
      token,
      user: {
        id: user._id,
        username: user.username,
        nickname: user.nickname,
        avatar: user.headImgUrl,
      },
    });
  } catch (error) {
    console.error("登录错误:", error);
    return res.json({
      code: 0,
      msg: "登录失败-服务器错误",
      error: error.message,
    });
  }
});

module.exports = router;

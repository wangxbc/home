const mongoose = require("mongoose")

// 从环境变量读取MongoDB连接字符串，如果没有则使用默认值
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/conpany-system"

// 连接MongoDB数据库
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully')
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
  })

// 导出mongoose实例，供其他文件使用
module.exports = mongoose
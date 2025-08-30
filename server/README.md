# Node.js Express Server

这是一个基于Node.js和Express的后端服务，提供用户认证、文章管理、评论和文件上传功能。

## 项目结构

```
├── app.js            # Express应用主文件
├── bin/              # 启动脚本
├── config/           # 配置文件
│   └── db.config.js  # 数据库配置
├── controllers/      # 控制器
├── models/           # 数据模型
├── routes/           # 路由定义
│   ├── articles.js   # 文章相关路由
│   ├── comments.js   # 评论相关路由
│   ├── upload.js     # 文件上传路由
│   └── users.js      # 用户相关路由
├── services/         # 业务逻辑
├── public/           # 静态资源
└── views/            # 视图模板
```

## 技术栈

- Node.js
- Express
- MongoDB (通过Mongoose连接)
- JWT认证
- CORS支持
- 文件上传(Multer)

## 部署指南

### 1. 准备工作

确保已安装以下软件：
- Node.js
- MongoDB

### 2. 环境配置

1. 在项目根目录创建`.env`文件，添加以下环境变量：

```
# MongoDB连接字符串
MONGODB_URI=mongodb://localhost:27017/conpany-system

# JWT密钥
JWT_SECRET=your_secret_key_here

# 服务器端口
PORT=5000
```

2. 打开`config/db.config.js`文件，取消注释并更新数据库连接代码：

```javascript
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/conpany-system")
```

### 3. 安装依赖

```bash
npm install
```

### 4. 启动服务

开发环境：
```bash
npm run dev
```

生产环境：
```bash
npm start
```

## 部署选项

### 选项1：使用云服务平台部署（推荐）

- **Vercel**：支持一键部署Node.js应用
- **Heroku**：成熟的PaaS平台，支持Node.js和MongoDB
- **Railway**：现代化的应用部署平台，支持数据库
- **Render**：简单易用的全栈应用部署平台

### 选项2：使用云服务器部署

1. 在云服务商（如阿里云、腾讯云、AWS等）购买一台服务器
2. 安装Node.js和MongoDB
3. 使用PM2管理Node.js进程
4. 配置Nginx作为反向代理
5. 设置SSL证书实现HTTPS

### 选项3：容器化部署

1. 创建Dockerfile和docker-compose.yml文件
2. 使用Docker构建镜像
3. 使用Docker Compose启动应用和MongoDB

## 注意事项

- 生产环境中请勿使用硬编码的JWT密钥，应使用环境变量
- 确保MongoDB服务正在运行且可访问
- 配置适当的CORS策略以确保前后端能够正常通信
- 考虑在生产环境中添加日志管理和监控
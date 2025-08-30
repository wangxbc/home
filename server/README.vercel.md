# Vercel部署指南

本指南将帮助您将Node.js Express服务器部署到Vercel平台。

## 准备工作

1. 确保您的代码已提交到GitHub/GitLab/Bitbucket仓库
2. 注册/登录Vercel账户：[https://vercel.com](https://vercel.com)
3. 准备MongoDB数据库连接字符串（可以使用MongoDB Atlas云数据库）

## 部署步骤

### 1. 将代码推送到GitHub

首先，您需要将服务端代码推送到GitHub仓库：

```bash
# 初始化git仓库（如果还没有）
# git init

# 添加远程仓库
# git remote add origin https://github.com/your-username/your-repo-name.git

# 提交更改
git add .
git commit -m "Prepare for Vercel deployment"

# 推送到远程仓库
git push -u origin master
```

### 2. 在Vercel上导入项目

1. 登录Vercel账户
2. 点击"New Project"按钮
3. 选择您的git仓库
4. 点击"Import"按钮

### 3. 配置环境变量

在Vercel项目的"Settings" > "Environment Variables"中添加以下环境变量：

| 环境变量名 | 值 | 说明 |
|-----------|-----|------|
| MONGODB_URI | mongodb://localhost:27017/conpany-system 或您的MongoDB Atlas连接字符串 | MongoDB数据库连接地址 |
| JWT_SECRET | 您的JWT密钥 | 用于JWT认证的密钥 |
| NODE_ENV | production | 运行环境 |

### 4. 部署项目

1. 点击"Deploy"按钮开始部署
2. 等待部署完成
3. 部署成功后，您将获得一个类似 `https://your-project-name.vercel.app` 的URL

## 注意事项

### MongoDB数据库

由于Vercel是无服务器平台，不提供内置的MongoDB数据库，您需要：

1. 使用云MongoDB服务，如：
   - [MongoDB Atlas](https://www.mongodb.com/atlas)（推荐，有免费计划）
   - [mLab](https://mlab.com/)
   - [ScaleGrid](https://scalegrid.io/)

2. 确保您的MongoDB允许来自Vercel的连接（在MongoDB Atlas中，需要将IP白名单设置为允许所有IP访问 `0.0.0.0/0`）

### API路由

部署到Vercel后，所有API路由将保持不变，您可以通过 `https://your-project-name.vercel.app/api/...` 访问它们。

### 静态文件

如果您需要提供静态文件，Vercel会自动处理`public`目录中的文件。

### 调试部署问题

如果部署失败，可以检查Vercel的日志：

1. 进入项目的"Deployments"标签页
2. 点击失败的部署
3. 查看"Logs"选项卡获取详细错误信息

## 本地开发

在本地开发时，您可以使用以下命令启动服务器：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 常见问题

### 1. 部署后无法连接到数据库

- 检查`MONGODB_URI`环境变量是否正确
- 确保MongoDB服务器允许来自Vercel的连接
- 检查数据库用户权限

### 2. API返回404错误

- 检查路由配置是否正确
- 确保vercel.json文件中的路由配置正确

### 3. 部署成功但API无法正常工作

- 查看Vercel日志获取详细错误信息
- 检查环境变量是否正确配置
- 确保所有依赖都已在package.json中声明

## 更多资源

- [Vercel Node.js文档](https://vercel.com/docs/runtimes#official-runtimes/node-js)
- [MongoDB Atlas设置指南](https://docs.atlas.mongodb.com/)
- [Express.js部署最佳实践](https://expressjs.com/en/advanced/best-practice-performance.html)
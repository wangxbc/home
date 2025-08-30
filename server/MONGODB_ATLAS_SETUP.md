# MongoDB Atlas配置指南

由于Vercel是无服务器平台，不提供内置的MongoDB数据库，本指南将帮助您设置MongoDB Atlas云数据库服务，以便与您的Vercel部署的应用程序配合使用。

## MongoDB Atlas注册与设置

### 1. 创建MongoDB Atlas账户

1. 访问 [MongoDB Atlas官网](https://www.mongodb.com/cloud/atlas)
2. 点击"Start Free"或"Try Free"按钮
3. 填写注册信息并创建账户
4. 完成邮件验证

### 2. 创建集群

1. 登录MongoDB Atlas账户
2. 在"Deploy a Cloud Database"部分，点击"Build a Database"
3. 选择免费的"M0 Sandbox"计划（适合开发和小型应用）
4. 选择云提供商和区域（选择离您目标用户最近的区域）
5. 为集群命名（如`my-express-server`）
6. 点击"Create Cluster"按钮
7. 等待集群创建完成（可能需要几分钟）

### 3. 创建数据库用户

1. 在集群页面，点击"Database Access"（位于左侧菜单）
2. 点击"Add New Database User"按钮
3. 选择"Password"认证方式
4. 输入用户名和密码（请记住这些凭据，稍后会用到）
5. 在"Database User Privileges"部分，选择"Read and write to any database"
6. 点击"Add User"按钮

### 4. 配置网络访问

1. 在左侧菜单，点击"Network Access"
2. 点击"Add IP Address"按钮
3. 选择"Allow Access from Anywhere"选项
4. 这将设置IP地址为`0.0.0.0/0`，允许来自任何IP的连接
5. 点击"Confirm"按钮

> **安全提示**：在生产环境中，您可能需要限制IP访问范围，但对于Vercel部署，由于Vercel使用动态IP，必须允许所有IP访问。

## 获取数据库连接字符串

1. 返回集群页面，点击"Connect"按钮
2. 选择"Connect your application"选项
3. 在"Driver"下拉菜单中选择"Node.js"
4. 选择最新的Node.js版本（或与您项目兼容的版本）
5. 复制提供的连接字符串，它看起来类似于：
   
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
   ```

6. 将`<username>`和`<password>`替换为您在步骤3中创建的数据库用户名和密码
7. 将`myFirstDatabase`替换为您想要使用的数据库名称（如`conpany-system`）

## 在Vercel中配置数据库连接

1. 登录Vercel账户并打开您的项目
2. 导航到"Settings" > "Environment Variables"
3. 添加一个新的环境变量：
   - **Name**: `MONGODB_URI`
   - **Value**: 您在上面步骤中获取并修改的MongoDB连接字符串
4. 点击"Save"按钮
5. 重新部署您的应用程序以应用新的环境变量

## 测试数据库连接

部署完成后，您可以通过以下方式验证数据库连接是否正常：

1. 访问您的Vercel应用URL
2. 尝试使用需要数据库访问的API端点
3. 检查Vercel的部署日志是否有任何数据库连接错误

## 常见问题排查

### 连接超时错误

- 确保您已正确配置网络访问规则（允许所有IP）
- 检查连接字符串中的用户名和密码是否正确
- 验证集群状态是否为"Available"（绿色状态）

### 认证失败错误

- 确认连接字符串中的用户名和密码正确
- 检查数据库用户是否具有适当的权限

### 数据库不存在错误

- 确保连接字符串中指定的数据库名称正确
- MongoDB Atlas会在首次访问时自动创建不存在的数据库

## MongoDB Atlas额外资源

- [MongoDB Atlas官方文档](https://docs.atlas.mongodb.com/)
- [MongoDB Node.js驱动程序文档](https://docs.mongodb.com/drivers/node/)
- [MongoDB Atlas免费计划限制](https://www.mongodb.com/pricing)

## 生产环境建议

对于生产环境，您可能需要考虑：

1. 使用更高级的MongoDB Atlas计划以获得更好的性能和可靠性
2. 实现数据库连接池以优化性能
3. 设置适当的数据库备份策略
4. 监控数据库性能和使用情况
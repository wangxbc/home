/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

module.exports = {
  // 配置 webpack
  webpack: {
    // 设置环境变量
    configure: (webpackConfig, { env, paths }) => {
      // 防止CI环境将警告视为错误
      process.env.DISABLE_ESLINT_PLUGIN = 'true';
      return webpackConfig;
    },
    // 调整 resolve（别名、模块解析等）
    resolve: {
      alias: {
        // 添加路径别名（根据项目结构调整）
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
    // 配置模块加载器（修改或添加 loader）
    module: {
      rules: [
        // 示例：修改 TypeScript loader 配置（如需）
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              // 如需开启类型检查（CRA 已默认开启，可按需调整）
              transpileOnly: false,
            },
          },
        },
        // 示例：添加 ESLint loader（CRA 已内置，但可额外配置）
        {
          test: /\.(ts|tsx|js|jsx)$/,
          enforce: 'pre', // 在编译前执行 ESLint
          use: 'eslint-loader',
          exclude: /node_modules/,
        },
        // 示例：处理其他文件类型（如 less/sass、图片等）
        // 如需添加 less 支持：
        // {
        //   test: /\.less$/,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     'less-loader',
        //   ],
        // },
      ],
    },
    // 配置插件（添加或修改 Webpack 插件）
    plugins: {
      // 示例：添加自定义插件
      // add: [
      //   new MyCustomPlugin(),
      // ],
      // 示例：修改已有插件（如调整 HtmlWebpackPlugin）
      // modify: (plugins) => {
      //   plugins.forEach((plugin) => {
      //     if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      //       plugin.options.title = 'My Custom Title';
      //     }
      //   });
      //   return plugins;
      // },
    },
  },
  // 配置 devServer（可选，如代理、HMR 等）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  // 配置 TypeScript（可选，覆盖 tsconfig.json 之外的设置）
  typescript: {
    // 如需关闭类型检查（不建议）
    // enableTypeChecking: false,
  },
  // 配置 ESLint（CRA 已集成，如需自定义）
  eslint: {
    // 如需关闭 eslint 在编译时的检查（不建议）
    // enable: false,
  },
};

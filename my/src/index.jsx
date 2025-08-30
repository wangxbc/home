import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
// src/index.js

import fundebug from 'fundebug-javascript';
fundebug.apikey = 'a683c35dbe30882d4d1d9b2c5fd0acb66164222e950a3af868ebe34b7167fdbc';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f2f5',
          color: '#333',
          fontSize: '16px',
          textAlign: 'center',
          padding: '20px'
        }}>
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>应用加载出错</h1>
            <p>请刷新页面或稍后再试</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
fundebug.test('myTest', 'React博客Fundebug测试');
// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ErrorBoundary>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </ErrorBoundary>,
  );
} else {
  // eslint-disable-next-line no-undef
  console.error('未找到 ID 为 "root" 的元素');
}

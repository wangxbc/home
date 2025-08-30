import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const MyFooter = () => (
  <Footer
    style={{
      width: '60%',
      height: '150%',
      backgroundColor: 'black',
      position: 'absolute',
      top: '81%',
      left: '35%',
    }}
  ></Footer>
);
export default MyFooter;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout } from 'antd';
import MyCard from './MyCard/MyCard';

const { Sider } = Layout;

const MySider = () => {
  return (
    <>
      <Sider
        style={{
          height: '100%',
          width: '40%',
        }}
      >
        <MyCard />
      </Sider>
    </>
  );
};

export default MySider;

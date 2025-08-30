/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import MyCard from './MyCard/MyCard';

const { Sider } = Layout;

interface MySiderProps {
  children?: ReactNode;
}

const MySider: React.FC<MySiderProps> = ({ children }) => {
  return (
    <>
      <Sider
        style={{
          height: '100%',
          width: '40%',
        }}
      >
        {children || <MyCard />}
      </Sider>
    </>
  );
};

export default MySider;

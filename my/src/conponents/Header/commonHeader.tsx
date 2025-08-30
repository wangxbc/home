/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  ReadOutlined,
  UserOutlined,
  SettingTwoTone,
  PlusOutlined,
  FileImageOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Menu, FloatButton, Layout, Avatar, Dropdown, Button, Divider, Space } from 'antd';
import { MenuTheme as AntdMenuTheme } from 'antd/es/menu/MenuContext';
import './commonHeader.css';
import { addTheme } from '../../store/modules/themeStore';
import { addWorldTheme } from '../../store/modules/worldStore';
import { addCardTheme } from '../../store/modules/cardStore';
import { addCardsTheme } from '../../store/modules/cardThemeStore';
import { addCardColor } from '../../store/modules/cardColorStore';
import { addBorderTheme } from '../../store/modules/borderTheme';
import { addContentColor } from '../../store/modules/contentStoe';
import { Link, To, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import path from 'path';
import { link } from 'fs';

const { Header } = Layout;

type ExtendedMenuTheme = AntdMenuTheme | '';

const itemTwo = [
  {
    label: '简历',
    key: 'mail',

    // icon: <UserOutlined />,
  },
];
const itemOne = [
  {
    label: 'Home',
    key: '/home',
    path: '/home',
    url: '/React/my/src/pages/home/home',
    icon: <UserOutlined />,
  },
  {
    label: '文章',
    key: '/texts',
    path: '/texts',
    url: '/React/my/src/pages/texts/text1',
    icon: <ReadOutlined />,
    children: [
      {
        label: '文章 1',
        key: '/texts/text1',
        path: '/text1',
        url: '/React/my/src/pages/texts/text1',
      },
      {
        key: '/texts/text2',
        path: '/text2',
        url: '/React/my/src/pages/texts/text2',
        label: '文章 2',
      },
    ],
  },
  {
    label: 'Photo',
    key: '/photo',
    path: '/photo',
    url: '/React/my/src/pages/photo',
    icon: <FileImageOutlined />,
  },
  {
    key: 'Home',
    path: '/home',
    url: '/React/my/src/pages/home/home',
    label: (
      <a href="https://github.com/wangxbc?tab=projects" target="_blank" rel="noopener noreferrer">
        与我一起
      </a>
    ),
    icon: <PlusOutlined style={{ fontSize: '18px' }} />,
  },
];
const items = [
  {
    key: '1',
    path: '/login',
    url: '/React/my/src/pages/login',
    label: (
      <Link to="/login">
        <span
          style={{
            display: 'block',
            marginBottom: '2px',
            fontSize: '15px',
            fontWeight: '500',
            marginLeft: '10px',
          }}
        >
          Welcome
        </span>
        <div style={{ display: 'flex' }}>
          <ArrowRightOutlined />
          <span style={{ fontSize: '15px', marginTop: '2px' }}>退出登录</span>
        </div>
      </Link>
    ),
  },
];
const CommonHeader: React.FC<Record<string, never>> = () => {
  const navigate = useNavigate();
  const { myTheme } = useSelector((state: RootState) => state.myThemes);
  useSelector((state: RootState) => state.worldThemes);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const dispatch = useDispatch();
  const selectMenu = (e: { key: To }) => {
    console.log(e);
    navigate(e.key);
  };
  const [current, setCurrent] = useState('mail');
  const onClick = (e: { key: React.SetStateAction<string> }) => {
    setCurrent(e.key);
  };
  const [userAvatar, setUserAvatar] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.avatar) {
        setUserAvatar(`data:image/jpeg;base64,${userData.avatar}`);
      }
    }
  }, []);

  return (
    <>
      <Header
        className={myTheme}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FloatButton.Group
          trigger="click"
          style={{
            paddingBottom: '400px',
            insetInlineEnd: '',
          }}
          icon={<SettingTwoTone spin style={{ fontSize: '55px', marginLeft: '-18px' }} />}
        >
          <FloatButton
            tooltip={
              <div
                style={{
                  width: '300px',
                  height: '280px',
                  textAlign: 'left',
                  paddingTop: '25px',
                  position: 'absolute',
                  top: '-500%',
                  left: '-1800%',
                  backgroundColor: 'black',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ paddingLeft: '20px' }}>
                  <p
                    style={{
                      fontSize: '20px',
                      textAlign: 'center',
                      position: 'relative',
                      left: '-14%',
                    }}
                  >
                    Choose You Color
                  </p>
                </div>
                <div style={{ width: '80px', paddingLeft: '45px' }}>
                  <Divider
                    style={{
                      marginTop: '10px',
                      marginBottom: '20px',
                      borderColor: '#7cb305',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', paddingLeft: '43px' }}>
                  <Space size={'middle'}>
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme('acheme')) &&
                        dispatch(addCardColor('acheme1')) &&
                        dispatch(addBorderTheme('achemeborder'))
                      }
                      style={{ backgroundColor: 'purple' }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme('scheme')) &&
                        dispatch(addCardColor('scheme1')) &&
                        dispatch(addBorderTheme('schemeborder'))
                      }
                      style={{ backgroundColor: '#038980' }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme('bcheme')) &&
                        dispatch(addCardColor('bcheme1')) &&
                        dispatch(addBorderTheme('bchemeborder'))
                      }
                      style={{ backgroundColor: '#ff7300' }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme('ccheme')) &&
                        dispatch(addCardColor('ccheme1')) &&
                        dispatch(addBorderTheme('cchemeborder'))
                      }
                      style={{ backgroundColor: '#a0ce4e' }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme('dcheme')) &&
                        dispatch(addCardColor('dcheme1')) &&
                        dispatch(addBorderTheme('dchemeborder'))
                      }
                      style={{ backgroundColor: '#f64243' }}
                    />
                  </Space>
                </div>
                <p
                  style={{
                    fontSize: '20px',
                    textAlign: 'center',
                    paddingTop: '30px',
                  }}
                >
                  Choose You Skin Model
                </p>
                <div style={{ width: '80px', paddingLeft: '48px' }}>
                  <Divider
                    style={{
                      marginTop: '10px',
                      marginBottom: '20px',
                      borderColor: '#7cb305',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', paddingLeft: '48px' }}>
                  <Space>
                    <Button
                      onClick={() =>
                        dispatch(addTheme('light')) &&
                        dispatch(addCardTheme('cardStyle1')) &&
                        dispatch(addCardsTheme('cardLight')) &&
                        dispatch(addContentColor('ant-anchor-link'))
                      }
                    >
                      light
                    </Button>
                    <Button
                      ghost
                      onClick={() =>
                        dispatch(addTheme('dark')) &&
                        dispatch(addCardTheme('cardStyle2')) &&
                        dispatch(addCardsTheme('cardDark')) &&
                        dispatch(addContentColor('.ant-anchor-link-title'))
                      }
                    >
                      dark
                    </Button>
                  </Space>
                </div>
              </div>
            }
          />
        </FloatButton.Group>

        <Menu
          style={{
            fontSize: 'large',
            fontWeight: '700',
            width: '150px',
            height: '50px',
            paddingLeft: '150px',
          }}
          className={cardTheme}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemTwo}
        />
        <Menu
          style={{
            fontSize: 'large',
            fontWeight: '700',
          }}
          className={cardTheme}
          onClick={selectMenu}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemOne}
        />
        <Dropdown menu={{ items }}>
          <Avatar size={50} src={userAvatar || require('../../assets/me.jpg')} />
        </Dropdown>
      </Header>
    </>
  );
};
export default CommonHeader;

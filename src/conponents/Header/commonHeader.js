
import React, { useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { ReadOutlined, UserOutlined , SearchOutlined ,SettingTwoTone ,PlusOutlined,FileImageOutlined } from '@ant-design/icons';
import { Menu,FloatButton,Layout,Avatar,Dropdown,Button,Divider, Space, Popover, } from 'antd';
import './commonHeader.css'
import { addTheme } from '../../store/modules/themeStore';
import { addWorldTheme } from '../../store/modules/worldStore';
import { addCardTheme } from '../../store/modules/cardStore';
import { addCardsTheme } from '../../store/modules/cardThemeStore';
import {addCardColor} from '../../store/modules/cardColorStore'
import { addBorderTheme } from '../../store/modules/borderTheme';
import { addContentColor } from '../../store/modules/contentStoe';
import { useNavigate } from 'react-router-dom';


const { Header } = Layout;





const itemTwo= [
  {
    
    label: "简历",
    key: "mail",
    
    // icon: <UserOutlined />,
  }
]
const itemOne = [
  {
    label: "Home",
    key: "/home",
    path:'/home',
    url:'/React/my/src/pages/home/home',
    icon: <UserOutlined />,
  },
  {
    label: "文章",
    key: "/texts",
    path:'/texts',
    url:'/React/my/src/pages/texts/text1',
    icon: <ReadOutlined />,
    children: [
      {
        label: '文章 1',
        key: "/texts/text1",
        path:'/text1',
        url:'/React/my/src/pages/texts/text1',
      },
      {
        key: "/texts/text2",
        path:'/text2',
        url:'/React/my/src/pages/texts/text2',
        label: '文章 2',
      },
    ]
  },
  {
    label: "Photo",
    key: "/photo",
    path:'/photo',
    url:'/React/my/src/pages/photo',
    icon: <FileImageOutlined />,

  },
  {
    key: "Home",
    path:'/home',
    url:'/React/my/src/pages/home/home',
    label: (
      <a href="https://github.com/wangxbc?tab=projects" target="_blank" rel="noopener noreferrer">
        与我一起 
      </a>
    ),
    icon: <PlusOutlined style={{fontSize:'18px'}} />,
  },
];
const CommonHeader = () => {
  const navigate = useNavigate()
  const {myTheme} = useSelector(state => state.myThemes)
  const {worldTheme} = useSelector(state => state.worldThemes)
  const {cardTheme} = useSelector(state =>state.cardThemes)
  const dispatch = useDispatch()
  const logout = () => {};
  const selectMenu = (e) => {
   console.log(e);
    navigate(e.key)
  }
  const items = [
    {
      key: "1",
      label: 
          'welcom'
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Header
        className={myTheme}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignitems: "center",
        }}
      >
       
        <FloatButton.Group
          trigger="click"

          style={{
            paddingBottom:'400px',
            insetInlineEnd:''
          }}
          icon={<SettingTwoTone spin style={{fontSize:'55px',marginLeft:'-18px',}}/>}
        >



          <FloatButton
            tooltip={
              <div
                style={{
                  width: "300px",
                  height: "280px",
                  textAlign: "left",
                  paddingTop: "25px",
                  position: "absolute",
                  top: "-500%",
                  left: "-1800%",
                  backgroundColor: "black",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ paddingLeft: "20px" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      position: "relative",
                      left: "-14%",
                    }}
                  >
                    Choose You Color
                  </p>
                </div>
                <div style={{ width: "80px", paddingLeft: "45px" }}>
                  <Divider
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      borderColor: "#7cb305",
                    }}
                  />
                </div>
                <div style={{ display: "flex", paddingLeft: "43px" }}>
                  <Space size={"middle"}>
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme("acheme")) &&
                        dispatch(addCardColor("acheme1")) &&
                        dispatch(addBorderTheme("achemeborder"))
                      }
                      style={{ backgroundColor: "purple" }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme("scheme")) &&
                        dispatch(addCardColor("scheme1"))&&
                        dispatch(addBorderTheme("schemeborder"))
                      }
                      style={{ backgroundColor: "#038980" }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme("bcheme")) &&
                        dispatch(addCardColor("bcheme1"))&&
                        dispatch(addBorderTheme("bchemeborder"))
                      }
                      style={{ backgroundColor: "#ff7300" }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme("ccheme")) &&
                        dispatch(addCardColor("ccheme1"))&&
                        dispatch(addBorderTheme("cchemeborder"))
                      }
                      style={{ backgroundColor: "#a0ce4e" }}
                    />
                    <Button
                      onClick={() =>
                        dispatch(addWorldTheme("dcheme")) &&
                        dispatch(addCardColor("dcheme1"))&&
                        dispatch(addBorderTheme("dchemeborder"))
                      }
                      style={{ backgroundColor: "#f64243" }}
                    />
                  </Space>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    paddingTop: "30px",
                  }}
                >
                  Choose You Skin Model
                </p>
                <div style={{ width: "80px", paddingLeft: "48px" }}>
                  <Divider
                    style={{
                      marginTop: "10px",
                      marginBottom: "20px",
                      borderColor: "#7cb305",
                    }}
                  />
                </div>
                <div style={{ display: "flex", paddingLeft: "48px" }}>
                  <Space>
                    <Button
                      onClick={() =>
                        dispatch(addTheme("light")) &&
                        dispatch(addCardTheme("cardStyle1")) &&
                        dispatch(addCardsTheme("cardLight"))&&
                        dispatch(addContentColor("ant-anchor-link"))
                      }
                    >
                      light
                    </Button>
                    <Button
                      ghost
                      onClick={() =>
                        dispatch(addTheme("dark")) &&
                        dispatch(addCardTheme("cardStyle2")) &&
                        dispatch(addCardsTheme("cardDark"))&&
                        dispatch(addContentColor(".ant-anchor-link-title"))
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
            fontSize: "large",
            fontWeight: "700",
            width: "150px",
            height: "50px",
            paddingLeft: "150px",
          }}
          className={cardTheme}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemTwo}
          theme=""
        />
        <Menu
          style={{
            fontSize: "large",
            fontWeight: "700",
          }}
          className={cardTheme}
          onClick={selectMenu}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemOne}
          theme=""
        
        />
        <Dropdown menu={{ items }}>
          <Avatar size={50} src={<img src={require("../../assets/me.jpg")} />} />
        </Dropdown>
      </Header>
    </>
  );
};
export default CommonHeader
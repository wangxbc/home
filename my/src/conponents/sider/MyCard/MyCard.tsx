/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Affix, Card, Space } from 'antd';
import { useSelector } from 'react-redux';
import { GithubOutlined, WechatOutlined } from '@ant-design/icons';
import { RootState } from '@/store';

const { Meta } = Card;

const MyCard = () => {
  const { worldTheme } = useSelector((state: RootState) => state.worldThemes);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const { cardsTheme } = useSelector((state: RootState) => state.cardsThemes);
  const { cardColor } = useSelector((state: RootState) => state.cardColors);
  const [top, setTop] = React.useState(0);
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
    <Affix offsetTop={top} style={{ position: 'absolute', top: '15%', left: '3%' }}>
      <Card
        className={cardsTheme}
        onClick={() => setTop(top + 5)}
        style={{
          width: '430px',
          height: '700px',
          borderRadius: '50px',
          boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
        }}
        hoverable
        cover={
          <img
            style={{
              width: '370px',
              height: '340px',
              marginTop: '30px',
              position: 'relative',
              top: '30%',
              left: '7%',
              borderRadius: '38px 38px',
            }}
            alt="example"
            src={userAvatar || require('../../../assets/me.jpg')}
          />
        }
      >
        <Meta
          description={
            <span
              className={worldTheme}
              style={{
                fontSize: '30px',
                fontWeight: '600',
                marginLeft: '20px',
              }}
            >
              About me
            </span>
          }
        />
        <Meta
          description={
            <span
              className={cardTheme}
              style={{
                fontSize: '20px',
                fontWeight: '600',
                marginLeft: '20px',
                marginTop: '20px',
                display: 'flex',
              }}
            >
              Html5 Css3 JavaScript TypeScript React Ajax node.js git Eslint Pretter Webpack
            </span>
          }
        />
        <div
          className={cardColor}
          style={{
            height: '140px',
            width: '430px',
            position: 'absolute',
            top: '85%',
            left: '-0.1%',
            borderRadius: '0 0 50% 50%',
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              fontWeight: '500',
              color: '#fff',
              marginTop: '50px',
              marginLeft: '60px',
            }}
          >
            Fllow me:
          </span>
          <Space size={'large'}>
            <a
              href="https://github.com/wangxbc?tab=projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined
                style={{
                  fontSize: '50px',
                  color: '#fff',
                  marginLeft: '50px',
                }}
              />
            </a>
            <WechatOutlined
              style={{
                fontSize: '40px',
                color: '#fff',
              }}
            />
          </Space>
        </div>
      </Card>
    </Affix>
  );
};
export default MyCard;

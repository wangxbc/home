/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import Typed from '/React/my/public/index.html'
const { Content, Footer } = Layout;
const { Paragraph } = Typography;
const MyText2 = () => {
  const { borderTheme } = useSelector((state: RootState) => state.borderThemes);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const { cardColor } = useSelector((state: RootState) => state.cardColors);
  const { myTheme } = useSelector((state: RootState) => state.myThemes);
  return (
    <div
      className={myTheme}
      style={{
        width: '100%',
        height: '152vh',
        margin: '0',
        padding: '0',
        border: '0',
        outline: '0',
        background: 'transparen',
      }}
    >
      <Content
        style={{
          width: '60%',
          height: '110vh',
          position: 'absolute',
          top: '20%',
          left: '35%',
        }}
        className={cardTheme}
      >
        <span
          className={borderTheme}
          style={{
            fontSize: '16px',
            fontWeight: '700',
            borderStyle: 'solid',
            borderWidth: '3px',
            borderRadius: '150px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '23px',
            paddingRight: '23px',
            fontFamily: 'sans-serif',
            boxShadow: '5px 5px 20px rgba(0,0,0,0.3)',
          }}
        >
          积极是一种态度
        </span>
        <div style={{ marginBottom: '50px', marginTop: '50px', display: 'block' }}>
          {/* <h1
            className={worldTheme}
            style={{
              fontSize: "30px",
              fontWeight: "700",
              textShadow: "5px 5px 20px rgba(0,0,0,0.2)",
              marginBottom: "5px",
            }}
          >
            题记
          </h1>
          <Text className={cardTheme} style={{ fontSize: "21px" }}>
            在每一个静谧的夜晚，月光轻洒，我的思念便如潮水般涌来，温柔的包裹着每一个无眠的瞬间。
          </Text> */}
        </div>
        <img
          style={{
            width: '350px',
            height: '350px',
            float: 'right',
            marginLeft: '30px',
            marginTop: '30px',
            marginBottom: '30px',
            borderRadius: '50%',
          }}
          src={require('../../assets/img1.jpg')}
        />
        <Paragraph className={cardTheme} style={{ fontSize: '21px', lineHeight: '1.8' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在人生的长河中，我们每个人都如同一位勇敢的航行者，怀揣着梦想，驶向未知的远方。尽管旅途充满了风浪与挑战，但只要心中有信念，前方就是一片光明。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一个充满机遇的时代，科技的飞速发展打破了旧有的藩篱，为我们开辟了无数崭新的道路。互联网的普及让信息传递变得瞬间可达，拉近了人与人、人与世界的距离，无数的创新想法在这张巨大的网络中碰撞、融合，孕育出前所未有的希望。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们站在时代的潮头，只要勇于探索，敢于尝试，无论出身与背景，都能找到属于自己的舞台。知识的力量前所未有的强大，只要我们愿意学习，不断充实自己，每一门新的知识、每一项新的技能，都可能成为开启成功之门的钥匙。
          <br />
          <img
            style={{
              width: '350px',
              height: '350px',
              float: 'left',
              marginRight: '30px',
              marginTop: '30px',
              marginBottom: '30px',
              borderRadius: '50%',
            }}
            src={require('../../assets/img3.jpg')}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那些曾经被视为困难的阻碍，如今正变成磨砺我们意志的基石。每一次的挫折都如同一场考验，让我们更加坚韧，更具智慧。每一次从失败中站起，我们就离成功更近一步。因为我们明白，失败并非终点，而是通往光明前途的阶梯。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这片广阔的天空下，我们的梦想如星辰闪烁。有人立志改变世界，有人渴望创造美好，有人执着于寻求真理。无论梦想大小，只要我们全心全意地去追求，去奋斗，就会发现未来的道路越来越清晰，前途的光芒越来越耀眼。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前途光明并非遥不可及的幻想，而是我们用汗水和努力铸就的现实。让我们怀揣着无限的热情和勇气，向着那充满希望的明天奋勇前行。因为我们深知，只要心中有光，前途必将一片光明。
          <br />
        </Paragraph>
      </Content>
      <Footer
        className={cardColor}
        style={{
          height: '150px',
          position: 'absolute',
          bottom: '-57.8%',
          width: '100%',
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            height: '95%',
            width: '100%',
            position: 'relative',
            left: '0%',
            top: '8%',
            border: '0px solid #ccc',
          }}
        >
          <div
            className={cardTheme}
            style={{
              display: 'inline-block',
              alignContent: 'center',
              paddingLeft: '100%',
              animation: 'scroll 30s linear infinite',
            }}
          >
            <ul style={{ fontSize: '80px', fontWeight: '700' }}>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
            </ul>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MyText2;

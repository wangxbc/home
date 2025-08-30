/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Layout, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import Typed from '/React/my/public/index.html'
const { Content, Footer } = Layout;
const { Paragraph, Text } = Typography;
const MyText1 = () => {
  const { borderTheme } = useSelector((state: RootState) => state.borderThemes);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const { worldTheme } = useSelector((state: RootState) => state.worldThemes);
  const { cardColor } = useSelector((state: RootState) => state.cardColors);
  const { myTheme } = useSelector((state: RootState) => state.myThemes);
  return (
    <div
      className={myTheme}
      style={{
        width: '100%',
        height: '188vh',
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
          height: '140vh',
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
          月下相思长
        </span>
        <div style={{ marginBottom: '50px', marginTop: '50px', display: 'block' }}>
          <h1
            className={worldTheme}
            style={{
              fontSize: '30px',
              fontWeight: '700',
              textShadow: '5px 5px 20px rgba(0,0,0,0.2)',
              marginBottom: '5px',
            }}
          >
            题记
          </h1>
          <Text italic={true} className={cardTheme} style={{ fontSize: '21px' }}>
            在每一个静谧的夜晚，月光轻洒，我的思念便如潮水般涌来，温柔的包裹着每一个无眠的瞬间。
          </Text>
        </div>
        <img
          style={{
            width: '400px',
            height: '400px',
            float: 'left',
            marginRight: '30px',
            marginTop: '30px',
            marginBottom: '30px',
            borderRadius: '20px',
          }}
          src={require('../../assets/img4.jpg')}
        />
        <Paragraph className={cardTheme} style={{ fontSize: '21px', lineHeight: '1.8' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜已深，一轮明月高悬天际，银白的月光如轻纱般洒满了大地。我独倚窗前，任那清冷的月色将我笼罩，思绪也随之飘荡，飘向那个遥远的地方，那个有你的城市。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们相识于一个春暖花开的季节，那是命运的一次美妙安排。你的笑容如同春日里最娇艳的花朵，瞬间点亮了我的世界。从那一刻起，我们的故事便开始书写，每一个瞬间都是那么美好，那么难忘。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然而，现实的无奈却让我们分隔两地。明明心与心紧紧相连，身体却被距离无情地拉扯。每当夜深人静，思念便如潮水般汹涌来袭。我闭上双眼，回忆着我们一起走过的点点滴滴。那漫步在街头巷尾的悠闲时光，那相互倾诉心事的温馨时刻，每一个画面都如同璀璨的星光，在我的心中闪耀。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;思念是一种无法言说的痛，它在我的心底生根发芽，蔓延至全身的每一个细胞。我曾在无数个夜晚，对着天空中的明月许愿，希望它能将我的思念传递给你。我想知道，此时此刻的你，是否也在仰望这片星空，是否也能感受到我深深的眷恋。
          <br />
          <img
            style={{
              width: '400px',
              height: '400px',
              float: 'right',
              marginLeft: '30px',
              marginTop: '0px',
              marginBottom: '30px',
              borderRadius: '20px',
            }}
            src={require('../../assets/img2.jpg')}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这寂静的夜晚，风轻轻吹过，带来了远方的气息。我仿佛能闻到你身上熟悉的味道，听到你温柔的低语。思念让时间变得无比漫长，每一分每一秒都是如此难熬。但也正是这份思念，让我们的爱情变得更加坚贞不渝。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我知道，距离只是暂时的考验，我们终会相聚在同一个港湾。待到重逢的那一天，我会紧紧地拥你入怀，再也不让你离开。在这漫长的等待中，思念将成为我前进的动力，让我更加坚强，更加勇敢地去面对生活的风雨。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月光依旧如水般流淌，我的思念也如这月光一般，绵延不绝，永不停息。愿远方的你，能在这温柔的月色中，感受到我深深的爱与思念。
        </Paragraph>
      </Content>
      <Footer
        className={cardColor}
        style={{
          height: '150px',
          position: 'absolute',
          bottom: '-92.8%',
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

export default MyText1;

/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useRef } from 'react';
import Typed from 'typed.js';
import { Layout, Anchor, Divider, Typography, Carousel, Avatar, Progress, Collapse } from 'antd';
import {
  Html5Outlined,
  SkypeOutlined,
  JavaScriptOutlined,
  TrademarkCircleOutlined,
  ExclamationOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import './Content.css';
// import Typed from '/React/my/public/index.html'
import { useEffect } from 'react';
import { RootState } from '@/store';
import { Footer } from 'antd/es/layout/layout';
const { Paragraph } = Typography;
const { Content } = Layout;
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};
type TextAlign = 'left' | 'right' | 'center' | 'justify';
const contentStyle: {
  height: string;
  width: string;
  color: string;
  lineHeight: string;
  textAlign: TextAlign | undefined;
  background: string;
  borderRadius: string;
} = {
  height: '300px',
  width: '100%',
  color: '#fff',
  lineHeight: '300px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '30px',
};
const MyContent = () => {
  const textElementRrf = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        '积极向上',
        '创新能力强',
        '喜欢宅',
        '注重细节',
        '喜欢团队合作',
        '持续学习',
        '但总有些小焦虑',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    };
    const typed = new Typed(textElementRrf.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const { borderTheme } = useSelector((state: RootState) => state.borderThemes);
  const { contentColor } = useSelector((state: RootState) => state.contentColors);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const { worldTheme } = useSelector((state: RootState) => state.worldThemes);
  const { cardColor } = useSelector((state: RootState) => state.cardColors);
  const { cardsTheme } = useSelector((state: RootState) => state.cardsThemes);
  return (
    <div style={{ width: '60%' }}>
      <Content
        style={{
          width: '60%',
          height: '300vh',
          // backgroundColor: 'black',
          position: 'absolute',
          top: '20%',
          left: '35%',
        }}
      >
        <div
          style={
            {
              // padding: "20px",
              // color:'blue'
            }
          }
        >
          <Anchor
            className={contentColor}
            direction="horizontal"
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: '自我介绍',
                // color: "blue",
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: '学习历程',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: '未来规划',
              },
            ]}
          />
        </div>
        <div>
          <div
            className={cardTheme}
            id="part-1"
            style={{
              display: 'block',
              width: '100%',
              height: '80vh',
            }}
          >
            <div
              style={{
                paddingTop: '50px',
                paddingLeft: '30px',
              }}
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
                Introduction
              </span>
            </div>
            <Paragraph className={cardTheme}>
              <div style={{ paddingLeft: '30px', fontWeight: '580' }}>
                <p
                  style={{
                    fontSize: '43px',
                    fontFamily: 'fantasy',
                    paddingTop: '50px',
                    fontWeight: '',
                  }}
                >
                  Hey!&nbsp;我叫
                </p>
                <p
                  style={{
                    fontSize: '43px',
                    marginTop: '-40px',
                  }}
                >
                  <span className={worldTheme}>王康勋，</span>来自 河南商丘，
                  <br />
                  一个<span className={worldTheme} ref={textElementRrf}></span>
                  的人
                  <br />
                </p>
                <p
                  style={{
                    //  marginTop: "-30px",
                    fontSize: '19px',
                    fontWeight: '400',
                  }}
                >
                  欢迎来到我的BLOG，对于一个热衷与前端开发的我，在这里将与您分享我的所学所悟。期待与您交流成长！初入前端这个奇妙的领域，我就像一个充满好奇的探索者，对每一行代码都充满了敬畏和渴望。虽然我还有很多需要学习和提高的地方，但我有一颗炽热的心和不屈的精神。
                  这段时间里，我已经初步掌握了 HTML、CSS 和 JavaScript
                  的基础知识，并学习了react前端框架，期望能为未来的项目贡献更多的力量！
                </p>
              </div>
            </Paragraph>
            <div
              style={{
                width: '96%',
                height: '120px',
                display: 'flex',
                position: 'relative',
                top: '8%',
                left: '30px',
                borderRadius: '20px',
                boxShadow: '20px 20px 20px rgba(0,0,0,0.3)',
              }}
              className={cardsTheme}
            >
              <div
                style={{
                  display: 'blok',
                  lineHeight: '45px',
                  paddingTop: '15px',
                  paddingLeft: '25px',
                  width: '30%',
                  borderStyle: 'solid',
                  borderRadius: '20px 0 0 20px',
                  borderWidth: '0.5px',
                }}
              >
                <p
                  className={worldTheme}
                  style={{
                    fontSize: '32px',
                    fontWeight: '530',
                  }}
                >
                  Bron
                </p>
                <p
                  style={{
                    fontSize: '30px',
                  }}
                >
                  2002-4-2
                </p>
              </div>
              <div
                style={{
                  display: 'blok',
                  lineHeight: '45px',
                  paddingTop: '15px',
                  paddingLeft: '25px',
                  width: '30%',
                  borderStyle: 'solid',
                  borderWidth: '0.5px 0px 0.5px 0',
                }}
              >
                <p
                  className={worldTheme}
                  style={{
                    fontSize: '32px',
                    fontWeight: '530',
                  }}
                >
                  Graduation
                </p>
                <p
                  style={{
                    fontSize: '30px',
                  }}
                >
                  2026
                </p>
              </div>
              <div
                style={{
                  display: 'blok',
                  lineHeight: '45px',
                  paddingTop: '15px',
                  paddingLeft: '25px',
                  width: '30%',
                  borderStyle: 'solid',
                  borderWidth: '0.5px 0 0.5px 0.5px',
                }}
              >
                <p
                  className={worldTheme}
                  style={{
                    fontSize: '32px',
                    fontWeight: '530',
                  }}
                >
                  Education
                </p>
                <p
                  style={{
                    fontSize: '30px',
                  }}
                >
                  Undergraduate
                </p>
              </div>
              <div
                style={{
                  display: 'blok',
                  lineHeight: '45px',
                  paddingTop: '15px',
                  paddingLeft: '25px',
                  width: '30%',
                  borderStyle: 'solid',
                  borderRadius: '0 20px 20px 0',
                  borderWidth: '0.5px',
                }}
              >
                <p
                  className={worldTheme}
                  style={{
                    fontSize: '32px',
                    fontWeight: '530',
                  }}
                >
                  Age
                </p>
                <p
                  style={{
                    fontSize: '30px',
                  }}
                >
                  22
                </p>
              </div>
            </div>
          </div>
          <div
            className={cardTheme}
            id="part-2"
            style={{
              width: '100%',
              height: '120vh',
              paddingLeft: '30px',
              paddingTop: '20px',
              display: 'block',
            }}
          >
            <div>
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
                  boxShadow: '10px 10px 20px rgba(0,0,0,0.4)',
                }}
              >
                Learning experiences
              </span>
            </div>
            <div
              style={{
                width: '100%',
                //  height: "25.33%",
                height: '30%',
                display: 'flex',
                marginTop: '80px',
              }}
            >
              <div className="box1" style={{ width: '490.2px', height: '298px', display: 'flex' }}>
                <div
                  className={cardsTheme}
                  style={{
                    borderStyle: 'solid',
                    borderRadius: '50px 0 0 50px',
                    width: '40%',
                    height: '100%',
                    display: 'block',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                  }}
                >
                  <Html5Outlined
                    style={{
                      paddingTop: '40px',
                      fontSize: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />

                  <Progress
                    type="circle"
                    percent={88}
                    size={148}
                    strokeColor={conicColors}
                    style={{ position: 'relative', top: '6%', left: '13%' }}
                  />
                </div>

                <div
                  className={cardColor}
                  style={{
                    borderStyle: 'solid',
                    borderRadius: '0 50px 50px 0',
                    width: '56%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    padding: '10px',
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.5',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;HTML是前端开发的基石，掌握其基本概念和标签是后续学习CSS，JavaScript等技术的必要条件。
                </div>
              </div>
              <div
                style={{
                  width: '490.2px',
                  height: '298px',
                  display: 'flex',
                  paddingLeft: '15px',
                }}
              >
                <div
                  className={cardsTheme}
                  style={{
                    // backgroundColor:'aqua',
                    borderStyle: 'solid',
                    borderRadius: '50px 0 0 50px',
                    width: '40%',
                    height: '100%',
                    display: 'block',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    //  paddingTop:'30px',
                    //  animation: 'flip 2s '
                  }}
                >
                  <SkypeOutlined
                    style={{
                      paddingTop: '40px',
                      fontSize: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />

                  <Progress
                    type="circle"
                    percent={80}
                    size={148}
                    strokeColor={conicColors}
                    style={{ position: 'relative', top: '6%', left: '13%' }}
                  />
                </div>

                <div
                  className={cardColor}
                  style={{
                    borderStyle: 'solid',
                    borderRadius: '0 50px 50px 0',
                    width: '56%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingLeft:"10px",
                    padding: '10px',
                    fontSize: '20px',
                    color: 'white',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    lineHeight: '1.5',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;学完CSS后，我意识到它不仅是样式工具，更是网页艺术的画笔。简洁却强大，让网页变得生动而有个性。
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                //  height: "25.33%",
                height: '30%',
                display: 'flex',
                // backgroundColor: "black",
                marginTop: '30px',
              }}
            >
              <div style={{ width: '490.2px', height: '298px', display: 'flex' }}>
                <div
                  className={cardsTheme}
                  style={{
                    // backgroundColor:'aqua',
                    borderStyle: 'solid',
                    borderRadius: '50px 0 0 50px',
                    width: '40%',
                    height: '100%',
                    display: 'block',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    //  paddingTop:'30px',
                    //  animation: 'flip 2s '
                  }}
                >
                  <JavaScriptOutlined
                    style={{
                      paddingTop: '40px',
                      fontSize: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />

                  <Progress
                    type="circle"
                    percent={88}
                    size={148}
                    strokeColor={conicColors}
                    style={{ position: 'relative', top: '6%', left: '13%' }}
                  />
                </div>

                <div
                  className={cardColor}
                  style={{
                    borderStyle: 'solid',
                    borderRadius: '0 50px 50px 0',
                    width: '56%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    padding: '10px',
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.5',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;学完JavaScript，才明白它才是网页的灵魂。强大的功能，可控的交互，让网页不再呆板，为网页开发注入无限可能。
                </div>
              </div>
              <div
                style={{
                  width: '490.2px',
                  height: '298px',
                  display: 'flex',
                  paddingLeft: '15px',
                }}
              >
                <div
                  className={cardsTheme}
                  style={{
                    // backgroundColor:'aqua',
                    borderStyle: 'solid',
                    borderRadius: '50px 0 0 50px',
                    width: '40%',
                    height: '100%',
                    display: 'block',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    //  paddingTop:'30px',
                    //  animation: 'flip 2s '
                  }}
                >
                  <TrademarkCircleOutlined
                    style={{
                      paddingTop: '40px',
                      fontSize: '75px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  />

                  <Progress
                    type="circle"
                    percent={90}
                    size={148}
                    strokeColor={conicColors}
                    style={{ position: 'relative', top: '6%', left: '13%' }}
                  />
                </div>

                <div
                  className={cardColor}
                  style={{
                    borderStyle: 'solid',
                    borderRadius: '0 50px 50px 0',
                    width: '56%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    //  paddingTop:"10px",
                    padding: '10px',
                    fontSize: '20px',
                    color: 'white',
                    lineHeight: '1.5',
                    boxShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;学完React，深知其强大的组件架构，让页面开发更有序，状态管理清晰，是前端开发的利器。
                </div>
              </div>
            </div>
            <div
              className={cardTheme}
              style={{
                width: '100%',
                paddingTop: '10px',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '30px',
              }}
            >
              <ExclamationOutlined
                style={{
                  fontSize: '45px',
                  position: 'relative',
                  top: '-18%',
                  left: '12%',
                }}
              />
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                src={<img src={require('../../assets/1.jpg')} />}
              />
              {/* <div className='' style={{width:'1px',height:"200px",margin:'20px 0',backgroundColor:'black'}}></div> */}
              <svg width="30px" height="250px" style={{ paddingLeft: '20px' }}>
                <polyline
                  points="20,0 20,90 0,135 20,135 20,240"
                  stroke="#995891"
                  strokeWidth={2}
                  fill="none"
                ></polyline>
              </svg>
              <div style={{ width: '83%', paddingLeft: '30px' }}>
                <div
                  style={{
                    fontSize: '70px',
                    fontFamily: 'fantasy',
                    display: 'flex',
                    color: '#995891',
                    position: 'relative',
                    top: '57.2%',
                    textShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                  }}
                >
                  “
                  <p
                    className={worldTheme}
                    style={{
                      paddingTop: '10px',
                      paddingLeft: '20px',
                      fontSize: '50px',
                      fontFamily: 'cursive',
                      fontWeight: '600',
                      textShadow: ' 10px 10px 20px rgba(0,0,0,0.35)',
                    }}
                  >
                    感悟
                  </p>
                </div>
                <p
                  className={cardTheme}
                  style={{
                    fontSize: '20px',
                    lineHeight: '1.5',
                    paddingTop: '5px',
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;学习以上内容后，又深入学习了Ajax、Redux、Axios、Webpack、Nginx等技术，对前端有了更深刻的理解。
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Ajax实现了异步数据交互，让网页
                  在不重新加载的情况下更新内容，提高了用户体验。Redux管理复杂状态，使得应用状态可预测，便于调试和维护。Axios作为HTTP客户端，让与服务器通信更加简单和灵活。
                  Webpack优化打包过程，提高资源加载效率，Nginx则作为高性能的Web服务器，确保应用稳定运行。
                </p>
              </div>
            </div>
          </div>

          {/* </div> */}
          <div
            className={cardTheme}
            id="part-3"
            style={{
              width: '100%',
              height: '60vh',

              display: 'block',
            }}
          >
            <div style={{ paddingLeft: '30px', paddingTop: '50px' }}>
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
                  boxShadow: '10px 10px 20px rgba(0,0,0,0.4)',
                }}
              >
                Future Planning
              </span>
              <Carousel autoplay style={{ paddingTop: '50px' }}>
                <div style={{}}>
                  <img style={contentStyle} src={require('../../../src/assets/vite.jpg')} />
                </div>
                <div>
                  <img style={contentStyle} src={require('../../../src/assets/TypeScript.jpg')} />
                </div>
                <div>
                  <img style={contentStyle} src={require('../../../src/assets/jQuery.jpg')} />
                </div>
                <div>
                  <img style={contentStyle} src={require('../../../src/assets/axios.jpg')} />
                </div>
              </Carousel>
              <Divider
                orientation="left"
                style={{ paddingTop: '100px', fontSize: '20px', zIndex: '3' }}
              >
                基础部分
              </Divider>
              <Collapse
                className={cardTheme}
                style={{ fontSize: '15px', zIndex: '3' }}
                items={[
                  {
                    key: '1',
                    label: 'HTML CSS JavaScript 开发工具与环境',
                    children: <p>熟悉常用的文本编辑器或VSCode，如IDE、Sublime Text等。</p>,
                  },
                ]}
              />
              <Divider orientation="left" style={{ fontSize: '20px', zIndex: '3' }}>
                专业阶段
              </Divider>
              <Collapse
                style={{ fontSize: '15px', zIndex: '3' }}
                items={[
                  {
                    // style ={{}},
                    key: '1',
                    label: '重要部分',
                    children: (
                      <p>
                        1.前端框架与库：如React、Vue和Angular。常用前端库：jQuery、Axios等
                        <br />
                        2.版本控制：学习Git等版本控制工具，掌管代码的管理和维护。
                        <br />
                        3.性能优化与SEO：学习前端优化技巧，如代码压缩、缓存策略、图片优化等。了解SEO的基本原则，掌握如何编写有利于搜索引擎索引的HTML代码。
                      </p>
                    ),
                  },
                ]}
              />
              <Divider orientation="left" style={{ fontSize: '20px', zIndex: '3' }}>
                项目阶段
              </Divider>
              <Collapse
                style={{ fontSize: '15px', zIndex: '3' }}
                items={[
                  {
                    key: '1',
                    label: '项目阶段',
                    children: (
                      <p>
                        1.项目实践：参与实际项目开发，将所学知识应用于实践。
                        <br />
                        2.技术拓展：根据项目需求，学习一些额外的技术或工具，如Node.js、Webpack等。
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Content>
      <Footer
        className={cardColor}
        style={{
          height: '150px',
          position: 'absolute',
          bottom: '-254.3%',
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
              animation: 'scroll 13s linear infinite',
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
export default MyContent;

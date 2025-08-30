/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Layout } from 'antd';
import './photo.css';
import { Image } from 'antd';
import { useSelector } from 'react-redux';
import { Carousel } from 'antd';
import { RootState } from '../../store';

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
  height: '380px',
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '35px',
};
const { Content, Footer } = Layout;
const MyPhoto = () => {
  const { borderTheme } = useSelector((state: RootState) => state.borderThemes);
  const { cardTheme } = useSelector((state: RootState) => state.cardThemes);
  const { cardColor } = useSelector((state: RootState) => state.cardColors);
  const { cardsTheme } = useSelector((state: RootState) => state.cardsThemes);
  const { myTheme } = useSelector((state: RootState) => state.myThemes);
  return (
    <div
      className={myTheme}
      style={{
        width: '100%',
        height: '388vh',
        margin: '0',
        padding: '0',
        border: '0',
        outline: '0',
        background: 'transparen',
        display: 'block',
      }}
    >
      <Content
        style={{
          width: '70%',
          height: '140vh',
          position: 'absolute',
          top: '20%',
          left: '29.2%',
        }}
        className={cardTheme}
      >
        <Carousel autoplay>
          <div>
            <img style={contentStyle} src={require('../../assets/photo1.jpg')} />
          </div>
          <div>
            <img style={contentStyle} src={require('../../assets/photo2.jpg')} />
          </div>
          <div>
            <img style={contentStyle} src={require('../../assets/photo3.jpg')} />
          </div>
          <div>
            <img style={contentStyle} src={require('../../assets/photo5.jpg')} />
          </div>
        </Carousel>

        <div
          style={{
            position: 'relative',
            left: '15%',
            top: '5%',
            width: '50%',
          }}
        >
          <span style={{ fontSize: '45px', fontWeight: '520' }}>25</span>
          <span
            style={{
              fontSize: '28px',
              fontWeight: '100',
              paddingRight: '20px',
            }}
          >
            /8
          </span>
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
            苏州
          </span>
          <div style={{ position: 'relative', left: '20%', paddingTop: '30px' }}>
            <Image
              style={{
                width: '500px',
                height: '300px',
                borderRadius: '20px',
              }}
              src={require('../../assets/苏州6.jpg')}
            />
            <div
              className={cardsTheme}
              style={{
                width: '300px',
                height: '220px',
                // backgroundColor: "white",
                position: 'absolute',
                top: '21%',
                left: '73%',
                borderRadius: '20px',
              }}
            >
              <p
                style={{
                  alignItems: 'center',
                  lineHeight: '1.5',
                  paddingLeft: '15px',
                  paddingTop: '28px',
                  paddingRight: '5px',
                  fontWeight: '550',
                }}
              >
                在苏州的时光，如同一首温婉的诗。漫步在苏州的街头巷尾，仿佛走进了一幅生动的江南水乡画卷。清晨，当第一缕阳光洒在青石板路上，古城的苏醒便开始了。小桥流水旁，晨练的老人悠然自得，他们或打太极，或舞剑，享受着生活的宁静与和谐。
              </p>
            </div>
          </div>
          <div style={{ paddingTop: '30px', display: 'flex', width: '900px' }}>
            <Image
              style={{
                width: '400px',
                height: '400px',
                // borderRadius: "20px",
                // marginLeft:'-80px'
              }}
              src={require('../../assets/苏州4.jpg')}
            />
            <Image
              style={{
                width: '300px',
                height: '200px',
                paddingLeft: '20px',
                paddingTop: '20px',
                // borderRadius: "20px",
              }}
              src={require('../../assets/苏州3.jpg')}
            />
            <Image
              style={{
                width: '150px',
                height: '180px',
                // borderRadius: "20px",
                paddingLeft: '20px',
                paddingTop: '60px',
              }}
              src={require('../../assets/苏州2.jpg')}
            />
          </div>
          <div
            style={{
              width: '300px',
              height: '300px',
              position: 'absolute',
              top: '78%',
              left: '88%',
              display: 'flex',
            }}
          >
            <Image
              style={{
                width: '270px',
                height: '200px',
              }}
              src={require('../../assets/苏州5.jpg')}
            />
            <div style={{ width: '150px', height: '50px' }}>
              <p
                style={{
                  paddingTop: '8px',
                  lineHeight: '1.5',
                  paddingLeft: '5px',
                  width: '150px',
                }}
              >
                漫步于拙政园，风拂过荷叶，诗意在心中泛起涟漪。那错落有致的亭台轩榭，是岁月雕琢出的精致。虎丘的塔影，静静诉说着往昔的辉煌，让人不禁心生敬畏。
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            left: '15%',
            top: '5%',
            width: '50%',
            paddingTop: '40px',
          }}
        >
          <span style={{ fontSize: '45px', fontWeight: '520' }}>20</span>
          <span
            style={{
              fontSize: '28px',
              fontWeight: '100',
              paddingRight: '20px',
            }}
          >
            /6
          </span>
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
            武汉
          </span>
          <div style={{ display: 'flex' }}>
            <div style={{ position: 'relative', left: '0%', paddingTop: '120px' }}>
              <p
                style={{
                  position: 'absolute',
                  top: '13.5%',
                  left: '7%',
                  width: '500px',
                  lineHeight: '1.5',
                  fontWeight: '520',
                  fontSize: '15px',
                }}
              >
                在武汉这座充满活力的城市，我度过了一段难忘的旅程。这座城市不仅有着丰富的历史文化，还有着独特的人文气息。
              </p>
              <p
                style={{
                  position: 'absolute',
                  top: '102%',
                  left: '7%',
                  width: '400px',
                  lineHeight: '1.5',
                  fontWeight: '520',
                }}
              >
                夜晚的黄鹤楼金碧辉煌。
              </p>
              <Image
                style={{
                  width: '260px',
                  height: '260px',
                  paddingLeft: '20px',
                  paddingTop: '20px',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/武汉1.jpg')}
              />
              <Image
                style={{
                  width: '260px',
                  height: '260px',
                  paddingLeft: '20px',
                  paddingTop: '20px',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/武汉2.jpg')}
              />
            </div>
            <div>
              <p
                style={{
                  position: 'absolute',
                  top: '37%',
                  left: '52%',
                  width: '400px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                江汉路，作为武汉著名的商业街，不仅承载着这座城市的繁华与时尚，也见证了历史的变迁。
              </p>
              <p
                style={{
                  position: 'absolute',
                  top: '102%',
                  left: '52%',
                  width: '400px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                漫步在这条街上，可以感受到武汉的独特魅力。街道两旁林立着各种商铺，从传统小吃到国际品牌，应有尽有。夜幕降临时，江汉路更是灯火辉煌，人流如织，成为武汉夜生活的缩影。
              </p>
              <Image
                style={{
                  width: '400px',
                  height: '400px',
                  marginLeft: '20px',
                  marginTop: '240px',
                }}
                src={require('../../assets/武汉3.jpg')}
              />
            </div>
            <div>
              <Image
                style={{
                  width: '200px',
                  height: '200px',
                  // borderRadius: "20px",
                  marginLeft: '40px',
                  marginTop: '437px',
                }}
                src={require('../../assets/武汉4.jpg')}
              />
            </div>
          </div>
          <p
            style={{
              position: 'absolute',
              top: '67%',
              left: '134%',
              width: '230px',
              fontSize: '15px',
              lineHeight: '1.5',
            }}
          >
            夜晚的长江大桥
          </p>
          <p
            style={{
              position: 'absolute',
              top: '102%',
              left: '134%',
              width: '200px',
              fontSize: '15px',
              lineHeight: '1.5',
            }}
          >
            长江大桥，横卧于滚滚长江之上，不仅是武汉的标志性建筑，也是中国桥梁工程史上的璀璨明珠。
          </p>
        </div>
        <div
          style={{
            position: 'relative',
            left: '15%',
            top: '17%',
            width: '50%',
            paddingTop: '40px',
          }}
        >
          <span style={{ fontSize: '45px', fontWeight: '520' }}>14</span>
          <span
            style={{
              fontSize: '28px',
              fontWeight: '100',
              paddingRight: '20px',
            }}
          >
            /1
          </span>
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
            西安
          </span>
          <div style={{ display: 'flex', paddingLeft: '100px' }}>
            <div
              style={{
                display: 'block',
                position: 'absolute',
                top: '280%',
                width: '400px',
              }}
            >
              <Image
                style={{
                  width: '260px',
                  height: '260px',
                  paddingLeft: '20px',
                  paddingTop: '20px',
                  position: 'relative',
                  left: '30%',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/西安3.jpg')}
              />
              <Image
                style={{
                  width: '340px',
                  height: '340px',

                  paddingTop: '20px',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/西安1.jpg')}
              />
              <p
                style={{
                  position: 'absolute',
                  top: '102%',
                  left: '0%',
                  width: '300px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                西安，这座历史悠久的城市，是中华文明的重要发祥地之一。在西安的旅行，仿佛是一次穿越时空的旅程
              </p>
              <p
                style={{
                  position: 'absolute',
                  top: '-10%',
                  left: '24%',
                  width: '500px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                踏上西安的土地，走进历史的长河。鼓楼，那巍峨的身躯，承载着岁月的厚重。登上楼顶，微风拂过，仿佛听见了古时的钟鼓之声。它是历史的见证者，静静讲述着这座城的沧桑变迁。
              </p>
            </div>
            <div style={{ position: 'absolute', left: '77.5%', top: '420%' }}>
              <Image
                style={{
                  width: '340px',
                  height: '340px',

                  paddingTop: '20px',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/西安2.jpg')}
              />
              <Image
                style={{
                  width: '260px',
                  height: '260px',
                  paddingLeft: '20px',
                  paddingTop: '20px',
                  position: 'relative',
                  left: '-7%',
                  // borderRadius: "20px",
                }}
                src={require('../../assets/西安4.jpg')}
              />
              <p
                style={{
                  position: 'absolute',
                  top: '-15%',
                  left: '10%',
                  width: '300px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                西安，古称长安，是中国历史上重要的古都之一，拥有丰富的人文知识和历史文化。这座城市见证了多个朝代的兴衰更替，留下了众多历史遗迹和文化瑰宝。
              </p>
              <p
                style={{
                  position: 'absolute',
                  top: '59.5%',
                  left: '74%',
                  width: '230px',
                  fontSize: '15px',
                  lineHeight: '1.5',
                }}
              >
                大雁塔，位于中国陕西省西安市大慈恩寺内，是一座具有千年历史的佛教建筑。大雁塔不仅是中国古代建筑艺术的杰作，也是佛教文化的重要象征，承载着丰富的历史和文化内涵。
              </p>
            </div>
          </div>
        </div>
      </Content>

      <Footer
        className={cardColor}
        style={{
          height: '150px',
          position: 'relative',
          bottom: '-95.4%',
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
              animation: 'scroll 180s linear infinite',
            }}
          >
            <ul style={{ fontSize: '80px', fontWeight: '700' }}>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>学海无涯&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>探索无境&nbsp;&nbsp;</li>
              <li style={{ display: 'inline-block', marginRight: '20px' }}>
                知识的追求永无止境&nbsp;&nbsp;
              </li>
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

export default MyPhoto;

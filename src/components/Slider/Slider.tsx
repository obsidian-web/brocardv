import React, {useCallback, useEffect, useRef, useState} from 'react';
import Layout from '../../hoc/Layout';
import classes from '../../styles/Slider.module.scss';
import UIButton from '../../UIKIT/UIButton';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {RxSlash} from 'react-icons/rx';
import {AnimatePresence, motion, useAnimation} from 'framer-motion';
import {SliderData} from './sliderData';
import UISendApplication from '../../UIKIT/UISendApplication';

const Slider = (props: any) => {
  const [send, setSend] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const sendRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  const tick = useCallback(() => {
    setIndex((index) => {
      let nextIndex = index + 1;
      if (nextIndex >= SliderData.length) {
        nextIndex = 0;
      }
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(tick, 5000);
    return () => clearInterval(interval);
  }, [tick]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    });
  }, [index]);

  const clickRight = () => {
    if (index === SliderData.length - 1) {
      setIndex(0);
    } else{
      setIndex(index + 1);
    }
  };
  const clickLeft = () => {
    if (index === 0) {
      setIndex(2);
    } else{
      setIndex(index - 1);
    }
  };

  return (
      <AnimatePresence>
        <div className={classes['slider']} ref={props.catalogRef}>
          <Layout>
            <UISendApplication send={send} setSend={setSend} title={'Оставить заявку'}/>
            <motion.div
                className={classes['slider__title']}
                key={index}
                exit={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                initial={{ opacity: 0, scale: 0.5 }}>
              {SliderData[index].title}
            </motion.div>
            <div className={classes['slider__item']} >
              <div className={classes['slider__item__left']}>                
                <div className={classes['slider__item__imgTitle']}>
                  <div className={classes['slider__item__imgTitle__numb']}>01</div>
                  <motion.div
                      className={classes['slider__item__title']}
                      key={Math.random()}
                      exit={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      initial={{ opacity: 0, scale: 0.5 }}>
                    {SliderData[index].items[0].title}
                  </motion.div>
                </div>
                <motion.div
                    className={classes['slider__item__text']}
                    key={Math.random()}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items[0].text}
                </motion.div>
                <div className={classes['slider__item__block']}>
                <div className={classes['slider__item__imgTitle']}>
                  <div className={classes['slider__item__imgTitle__numb']}>02</div>
                  <motion.div
                      className={classes['slider__item__title']}
                      key={Math.random()}
                      exit={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      initial={{ opacity: 0, scale: 0.5 }}>
                    {SliderData[index].items[1].title}
                  </motion.div>
                </div>
                <motion.div
                    className={classes['slider__item__text']}
                    key={Math.random()}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items[1].text}
                </motion.div>
              </div>
              </div>
              <div className={classes['slider__item__img']}>
                <div className={classes['slider__item__img__sliderTruck']}>
                  <img src="truck.png" alt="truck" />
                </div>
                <div className={classes['slider__item__img__sliderCircle']}>
                  <img src="circle.png" alt="circle" />
                </div>
              </div>
              <div className={classes['slider__item__right']}>
                <div className={classes['slider__item__imgTitle']}>
                  <div className={classes['slider__item__imgTitle__numb']}>03</div>
                  <motion.div
                      className={classes['slider__item__title']}
                      key={Math.random()}
                      exit={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      initial={{ opacity: 0, scale: 0.5 }}>
                    {SliderData[index].items[2].title}
                  </motion.div>
                </div>
                <motion.div
                    className={classes['slider__item__text']}
                    key={Math.random()}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items[2].text}
                </motion.div>
                <div className={classes['slider__item__block']}>
                <div className={classes['slider__item__imgTitle']}>
                  <div className={classes['slider__item__imgTitle__numb']}>04</div>
                  <motion.div
                      className={classes['slider__item__title']}
                      key={Math.random()}
                      exit={{ opacity: 0, scale: 0.5 }}
                      animate={controls}
                      initial={{ opacity: 0, scale: 0.5 }}>
                    {SliderData[index].items[3].title}
                  </motion.div>
                </div>
                
                <motion.div
                    className={classes['slider__item__text']}
                    key={Math.random()}
                    exit={{ opacity: 0, scale: 0.5 }}
                    animate={controls}
                    initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items[3].text}
                </motion.div>
                </div>
              </div>
            </div>
            <div className={classes['slider__button']}>
              <div className={classes['slider__sliderButton']} onClick={() => setSend(true)}>
                <UIButton buttonText={'Отправить заявку'} />
              </div>
            </div>
            <div className={classes['slider__page']}>
              <div className={classes['slider__page__arrow']} onClick={() => clickLeft()}>
                <MdKeyboardArrowLeft />
              </div>
              <div className={classes['slider__page__number']}>
                <b>0{index + 1}</b>
              </div>
              <div>
                <RxSlash />
              </div>
              <div className={classes['slider__page__number']}>03</div>
              <div className={classes['slider__page__arrow']} onClick={() => clickRight()}>
                <MdKeyboardArrowRight />
              </div>
            </div>
          </Layout>
        </div>
      </AnimatePresence>
  );
};

export default Slider;

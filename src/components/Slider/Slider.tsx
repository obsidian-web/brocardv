import React, { useEffect, useState } from 'react';
import Layout from '../../hoc/Layout';
import classes from '../../styles/Slider.module.scss';
import UIButton from '../../UIKIT/UIButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RxSlash } from 'react-icons/rx';
import { AnimatePresence, useAnimation, motion, transform } from 'framer-motion';
import { SliderData } from './sliderData';

const Slider = (props: any) => {
  const [index, setIndex] = useState<number>(0);
  const controls = useAnimation();
  const transformer = transform([0, 100], [0, 360]);

  if (index < SliderData.length - 1) {
    (() =>
      setTimeout(() => {
        setIndex(index + 1);
      }, 2000))();
  }

  useEffect(() => {
    if (index === SliderData.length - 1) {
      setTimeout(() => {
        setIndex(0);
      }, 2000);
    }

    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    });
  }, [index]);

  return (
    <AnimatePresence>
      <Layout>
        <div className={classes['slider']} ref={props.catalogRef}>
          <motion.div
            className={classes['slider__title']}
            key={index}
            exit={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            initial={{ opacity: 0, scale: 0.5 }}>
            {SliderData[index].title}
          </motion.div>
          <div className={classes['slider__item']}>
            <div className={classes['slider__item__left']}>
              <div className={classes['slider__item__imgTitle']}>
                <div className={classes['slider__item__imgTitle__numb']}>01</div>
                <motion.div
                  className={classes['slider__item__title']}
                  key={index}
                  exit={{ opacity: 0, scale: 0.5 }}
                  animate={controls}
                  initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items.map((it) => <>{it.title}</>)[index]}
                </motion.div>
              </div>
              <motion.div
                className={classes['slider__item__text']}
                key={index}
                exit={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                initial={{ opacity: 0, scale: 0.5 }}>
                {SliderData[index].items.map((it) => <>{it.text}</>)[index]}
              </motion.div>
              <div className={classes['slider__item__imgTitle']}>
                <div className={classes['slider__item__imgTitle__numb']}>02</div>
                <motion.div className={classes['slider__item__title']} 
                key={index}
                exit={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                initial={{ opacity: 0, scale: 0.5 }}>
                  {SliderData[index].items.map((it) => <>{it.title}</>)[index]}
                  </motion.div>
              </div>
              <motion.div className={classes['slider__item__text']}
              
              >
              {SliderData[index].items.map((it) => <>{it.text}</>)[index]}
              </motion.div>
            </div>
            <div className={classes['slider__item__img']}>
              <div className={classes['slider__item__img__sliderTruck']}>
                <img src="truck.png" alt="truck" />
              </div>
              <div className={classes['slider__item__img__sliderCircle']}>
                <img src="circle.png" alt="circle"></img>
              </div>
            </div>
            <div className={classes['slider__item__right']}>
              <div className={classes['slider__item__imgTitle']}>
                <div className={classes['slider__item__imgTitle__numb']}>03</div>
                <motion.div className={classes['slider__item__title']}
                key={index}
                exit={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                initial={{ opacity: 0, scale: 0.5 }}
                >{SliderData[index].items.map((it) => <>{it.title}</>)[index]}</motion.div>
              </div>
              <motion.div className={classes['slider__item__text']}
              key={index}
              exit={{ opacity: 0, scale: 0.5 }}
              animate={controls}
              initial={{ opacity: 0, scale: 0.5 }}
              >
              {SliderData[index].items.map((it) => <>{it.text}</>)[index]}
              </motion.div>
              <div className={classes['slider__item__imgTitle']}>
                <div className={classes['slider__item__imgTitle__numb']}>04</div>
                <motion.div className={classes['slider__item__title']}
                key={index}
                exit={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                initial={{ opacity: 0, scale: 0.5 }}
                >{SliderData[index].items.map((it) => <>{it.title}</>)[index]}</motion.div>
              </div>
              <motion.div className={classes['slider__item__text']} 
              >
              {SliderData[index].items.map((it) => <>{it.text}</>)[index]}
              </motion.div>
            </div>
          </div>
          <div className={classes['slider__sliderButton']}>
            <UIButton buttonText={'Отправить заявку'} />
          </div>
          <div className={classes['slider__page']}>
            <div className={classes['slider__page__arrow']}>
              <MdKeyboardArrowLeft />
            </div>
            <div className={classes['slider__page__number']}>01</div>
            <div>
              <RxSlash />
            </div>
            <div className={classes['slider__page__number']}>03</div>
            <div className={classes['slider__page__arrow']}>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </Layout>
    </AnimatePresence>
  );
};

export default Slider;

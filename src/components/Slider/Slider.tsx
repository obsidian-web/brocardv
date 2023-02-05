import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout';
import classes from '../../styles/Slider.module.scss';
import UIButton from '../../UIKIT/UIButton';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RxSlash } from 'react-icons/rx';
import {AnimatePresence, useAnimation, motion, transform} from "framer-motion";
import {SliderData} from './sliderData'

const Slider = (props: any) => {
  const [index, setIndex] = useState<number>(0)
  const controls = useAnimation();
  const transformer = transform([0, 100], [0, 360]);

  if (index < SliderData.length - 1) {
    (() => setTimeout(() => {
      setIndex(index + 1)
    }, 2000))()
  }

  useEffect(() => {
    if (index === SliderData.length - 1) {
      setTimeout(() => {
        setIndex(0)
      }, 2000)
    }

    controls.start({
      opacity: 1,
      scale: 1,
      transition: {duration: 1}
    });
  }, [index]);

  return (
      <AnimatePresence>
        <Layout>
          <div className={classes['slider']} ref={props.catalogRef}>
            <motion.div className={classes['slider__title']}
                        key={index}
                        exit={{opacity: 0, scale: 0.5}}
                        animate={controls}
                        initial={{opacity: 0, scale: 0.5}}
            >
              {SliderData[index].title}
            </motion.div>
            <div className={classes['slider__item']}>
              <div className={classes['slider__item__left']}>
                <div className={classes['slider__item__imgTitle']}>
                  <img src="01.png" alt="01" />
                  <div className={classes['slider__item__title']}>Самые быстрые на рынке</div>
                </div>
                <div className={classes['slider__item__text']}>
                  Большой автопарк и гибкость позволяет нам доставить ваш автомобиль любым видом
                  транспорта
                </div>
                <div className={classes['slider__item__imgTitle']}>
                  <img src="02.png" alt="02" />
                  <div className={classes['slider__item__title']}>Лояльные цены</div>
                </div>
                <div className={classes['slider__item__text']}>
                  Наша ценовая политика не оставит равнодушным любого клиента
                </div>
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
                  <img src="03.png" alt="03" />
                  <div className={classes['slider__item__title']}>Надежность и сохранность</div>
                </div>
                <div className={classes['slider__item__text']}>
                  Наши специалисты строго следят за всеми этапами доставки. Мы ведем глубокое наблюдение
                  и контроль к каждой детали.
                </div>
                <div className={classes['slider__item__imgTitle']}>
                  <img src="04.png" alt="04" />
                  <div className={classes['slider__item__title']}>Качество и мониторинг</div>
                </div>
                <div className={classes['slider__item__text']}>
                  Наши менеджера доступны в любое время суток и всегда рады проконсультировать вас и
                  ответить на любой вопрос !
                </div>
              </div>
            </div>
            <div className={classes['slider__sliderButton']}>
              <UIButton buttonText={'Отправить заявку'} />
            </div>
            <div className={classes['slider__page']}>
              <div className={classes['slider__page__arrow']}>
                <MdKeyboardArrowLeft />return (
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

import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Stages.module.scss';
import { FaStar } from 'react-icons/fa';
import newSupra from '../assets/newSupra.png'

const Stages = () => {
  const [star, setStar] = useState(false);
  return (
    
      <div className={classes['stages']}>
        <Layout>
        <div className={classes['stages__title']}>Комфортное сотрудничество</div>
        <div className={classes['stages__items']}>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
              <div className={classes['stages__numbersBlock__number__numb']}>01</div>
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Тщательно подбираем подходящий автомобиль по стоимости и состоянию
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
            <div className={classes['stages__numbersBlock__number__numb']}>02</div>
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Вы вносите предоплату, мы занимаемся всеми документами
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
            <div className={classes['stages__numbersBlock__number__numb']}>03</div>
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Привозим ваш автомобиль в Россию, и доставляем к вам
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
            <div className={classes['stages__numbersBlock__number__numb']}>04</div>
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Вносите оставшуюся часть оплаты, заполняем документы и вы радуетесь...
            </div>
          </div>
        </div>
        <div className={classes['stages__cardsBlock']}>
          <div className={classes['stages__cardsBlock__left']}>
            <div className={classes['stages__cardsBlock__left__starsBlock']}>
              <FaStar
                onClick={() => setStar(!star)}
                className={
                  star
                    ? classes['stages__cardsBlock__left__starsBlock__starActive']
                    : classes['stages__cardsBlock__left__starsBlock__star']
                }
              />
              <div className={classes['stages__cardsBlock__left__starsBlock__title']}>Выгодно</div>
            </div>
            <div className={classes['stages__cardsBlock__left__title']}>
              Тщательно подбираем подходящий автомобиль
            </div>
            <div className={classes['stages__cardsBlock__left__text']}>
              Тщательно подбираем подходящий автомобиль по стоимости и состояниюТщательно подбираем
              подходящий автомобил
            </div>
          </div>
          <div className={classes['stages__cardsBlock__img']}>
            <img src="newSupra.png" alt="supra" />
          </div>
          <div className={classes['stages__cardsBlock__right']}>
            <div className={classes['stages__cardsBlock__right__title']}>Кричащий заголовок</div>
            <div className={classes['stages__cardsBlock__right__infoBlock']}>
              <div className={classes['stages__cardsBlock__right__infoBlock__text']}>
                Тщательно подбираем подходящий автомобиль по стоимости и состоянию
              </div>
              <div className={classes['stages__cardsBlock__right__infoBlock__text']}>
                Тщательно подбираем подходящий автомобиль по стоимости и состоянию
              </div>
            </div>
          </div>
        </div>
        </Layout>
      </div>
    
  );
};

export default Stages;

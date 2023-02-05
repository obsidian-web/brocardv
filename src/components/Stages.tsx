import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Stages.module.scss';
import { FaStar } from 'react-icons/fa';

const Stages = () => {
  const [star, setStar] = useState(false);
  return (
    <Layout>
      <div className={classes['stages']}>
        <div className={classes['stages__title']}>Комфортное сотрудничество</div>
        <div className={classes['stages__items']}>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
              <img src="01.png" alt="01" />
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Тщательно подбираем подходящий автомобиль по стоимости и состоянию
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
              <img src="02.png" alt="02" />
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Вы вносите предоплату, мы занимаемся всеми документами
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
              <img src="03.png" alt="03" />
            </div>
            <div className={classes['stages__numbersBlock__circle']}></div>
            <div className={classes['stages__numbersBlock__text']}>
              Привозим ваш автомобиль в Россию, и доставляем к вам
            </div>
          </div>
          <div className={classes['stages__numbersBlock']}>
            <div className={classes['stages__numbersBlock__number']}>
              <img src="04.png" alt="04" />
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
            <img src="supra.png" alt="supra" />
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
      </div>
    </Layout>
  );
};

export default Stages;

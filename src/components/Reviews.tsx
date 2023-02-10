import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Reviews.module.scss';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FaStar } from 'react-icons/fa';
import UIButton from '../UIKIT/UIButton';

const Reviews = () => {
  const pag = [1, 2, 3, 4, 5];
  const starsData = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  const data = [
    {
      id: 1,
      desc: '',
      stars: 0,
      date: new Date().toLocaleDateString(),
    },
  ];
  console.log(data);
  const [pagin, setPagin] = useState<any>();
  const [star, setStar] = useState<any>();
  const [rev, setRev] = useState(data);
  const [text, setText] = useState<string>('');
  const starsIndex = (index: number) => {
    setStar(index);
  };
  const newData = () => {
    setRev([
      ...rev,
      {
        id: Math.random(),
        desc: text,
        stars: star,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setStar(-1);
    setText('');
  };
  console.log(pagin);
  return (
    <div className={classes['reviews']}>
      <Layout>
        <div className={classes['reviews__items']}>
          <div className={classes['reviews__items__imgBlock']}>
            <RiDoubleQuotesR className={classes['reviews__items__imgBlock__quotes']} />
            <div className={classes['reviews__items__imgBlock__text']}>
              Мы осуществляем доставку по всей России и за её пределами!
            </div>
            <img
              className={classes['reviews__items__imgBlock__earth']}
              src="earth.png"
              alt="earth"
            />
          </div>
          <div className={classes['reviews__items__reviewsBlock']}>
            <div className={classes['reviews__items__reviewsBlock__title']}>Миссия компании</div>
            <div className={classes['reviews__items__reviewsBlock__subTitle']}>
              Лояльность наших клиентов и многолетний опыт работы - наше приемущество перед
              конкурентами.
            </div>
            <div className={classes['reviews__items__reviewsBlock__review']}>
              {rev.map((item) => (
                <>
                  {item.id === 1 || item.desc === '' ? (
                    <></>
                  ) : (
                    <div className={classes['reviews__items__reviewsBlock__review__block']}>
                      <div className={classes['reviews__items__reviewsBlock__review__rev']}>
                        {item.desc}
                      </div>
                      <div className={classes['reviews__items__reviewsBlock__review__rev__date']}>
                        <div
                          className={
                            classes['reviews__items__reviewsBlock__review__rev__starDisp']
                          }>
                          {starsData.map((it, index) => (
                            <div
                              className={
                                item.stars >= index
                                  ? classes['reviews__feedback__stars__grade__star__active']
                                  : classes['reviews__feedback__stars__grade__star']
                              }>
                              {it}
                            </div>
                          ))}
                        </div>
                        <div>{item.date}</div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={classes['reviews__pagination']}>
          {pag.map((item, index) => (
            <div
              onClick={() => setPagin(index)}
              className={
                index === pagin
                  ? classes['reviews__pagination__itemActive']
                  : classes['reviews__pagination__item']
              }>
              {item}
            </div>
          ))}
        </div>
        <div className={classes['reviews__feedback']}>
          <div className={classes['reviews__feedback__title']}>Оставить отзыв:</div>
          <div>
            <textarea
              className={classes['reviews__feedback__textarea']}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className={classes['reviews__feedback__stars']}>
            <div className={classes['reviews__feedback__stars__grade']}>
              Оценка:{' '}
              {starsData.map((item: any, index: number) => (
                <div
                  onClick={() => starsIndex(index)}
                  className={
                    star >= index
                      ? classes['reviews__feedback__stars__grade__star__active']
                      : classes['reviews__feedback__stars__grade__star']
                  }>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes['reviews__button']} onClick={() => newData()}>
          <UIButton buttonText={'Отправить'} />
        </div>
      </Layout>
    </div>
  );
};

export default Reviews;

import React from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Statistics.module.scss';
import UIButton from '../UIKIT/UIButton';

const Statistics = (props:any) => {
  return (
    <Layout>
      <div className={classes['statistics']} ref={props.staticRef}>
        <div className={classes['statistics__left']}>
          <img className={classes['statistics__left__img']} src="logoAutoBig.png" alt="logoAuto" />
          <div className={classes['statistics__left__title']}>Статистика и аукционы</div>
          <div className={classes['statistics__left__text']}>
            Бесплатно зарегистрируйтесь в нашем сервисе и получите бесплатный доступ на
            автостатистику и аукционы Японии.
          </div>
          <div className={classes['statistics__left__button']}>
            <UIButton buttonText={'Зарегистрироваться'} />
          </div>
        </div>
        <div className={classes['statistics__right']}>
          <img width="850" height="854" src="gtr.png" alt="gtr" />
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;

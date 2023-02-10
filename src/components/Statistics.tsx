import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Statistics.module.scss';
import UIButton from '../UIKIT/UIButton';
import UISendApplication from '../UIKIT/UISendApplication';

const Statistics = (props: any) => {
  const [send, setSend] = useState<boolean>(false);
  return (
    <div className={classes['statistics']} ref={props.staticRef}>
      <Layout>
        <UISendApplication send={send} setSend={setSend} title={'Зарегистрироваться'} />
        <div className={classes['statistics__item']}>
        <div className={classes['statistics__left']}>
          <img className={classes['statistics__left__img']} src="logoAutoBig.png" alt="logoAuto" />
          <div className={classes['statistics__left__title']}>Статистика и аукционы</div>
          <div className={classes['statistics__left__text']}>
            Бесплатно зарегистрируйтесь в нашем сервисе и получите бесплатный доступ на
            автостатистику и аукционы Японии.
          </div>
          <div className={classes['statistics__buttonBlock']}>
          <div className={classes['statistics__left__button']} onClick={() => setSend(true)}>
            <UIButton buttonText={'Зарегистрироваться'} />
          </div>
          </div>
        </div>
        <div className={classes['statistics__right']}>
          <img width="650" height="650" src="gtr.png" alt="gtr" />
        </div>
        </div>
      </Layout>
    </div>
  );
};

export default Statistics;

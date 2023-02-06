import React from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/BrocardvLine.module.scss';
import rectangle from '../assets/Rectangle.png'
const BrocardvLine = () => {
  return (
      <div className={classes['brocardvLine']} style={{backgroundImage: `url(${rectangle})`}}>
        <Layout>
        <div className={classes['brocardvLine__info']}>
          <div className={classes['brocardvLine__info__logo']}>BROCARDV</div>
          <div className={classes['brocardvLine__info__text']}>
            АВТОМОБИЛИ С АУКЦИОНОВ ЯПОНИИ И ЮЖНОЙ КОРЕИ
          </div>
        </div>
        </Layout>
      </div>
  );
};

export default BrocardvLine;

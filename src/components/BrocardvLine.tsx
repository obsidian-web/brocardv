import React from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/BrocardvLine.module.scss';

const BrocardvLine = () => {
  return (
    <Layout>
      <div className={classes['brocardvLine']}>
        <div className={classes['brocardvLine__info']}>
          <div className={classes['brocardvLine__info__logo']}>BROCARDV</div>
          <div className={classes['brocardvLine__info__text']}>
            АВТОМОБИЛИ С АУКЦИОНОВ ЯПОНИИ И ЮЖНОЙ КОРЕИ
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrocardvLine;

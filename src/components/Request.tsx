import React, { useState } from 'react';
import classes from '../styles/Request.module.scss';
import UIButton from '../UIKIT/UIButton';
import UIInput from '../UIKIT/UIInput';
import Layout from '../hoc/Layout';

const Request = () => {
  const [name, setName] = useState<any>();
  const [phone, setPhone] = useState<any>();
  return (
    <div className={classes['request']}>
      <Layout>
        <div className={classes['request__title']}>Оставьте заявку</div>
        <div className={classes['request__subTitle']}>
          Наш менеджер перезвонит Вам и <br />
          проконсультирует Вас.{' '}
        </div>
        <div className={classes['request__item']}>
          <div className={classes['request__inputBlock']}>
            <UIInput
              name={'Ваше имя'}
              type={'string'}
              value={name}
              setValue={(i: string) => setName(i)}
            />
            <UIInput
              name={'Номер телефона'}
              type={'string'}
              value={phone}
              setValue={(i: string) => setPhone(i)}
            />
          </div>
          </div>
          <div className={classes['request__button']}>
          <div className={classes['request__buttonBlock']}>
            <UIButton buttonText={'Отправить'} />
          </div>
          </div>
      </Layout>
    </div>
  );
};

export default Request;

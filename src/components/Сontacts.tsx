import React from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Contacts.module.scss';
import { ImLocation } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImPhone } from 'react-icons/im';
import { SlSocialVkontakte } from 'react-icons/sl';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineInstagram } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const Сontacts = (props: any) => {
  return (
    <div className={classes['contacts']} ref={props.contactRef}>
      <Layout>
        <div className={classes['contacts__item']}>
          <div className={classes['contacts__item__img']}>
            <img src="logoSmm.png" alt="logo" />
          </div>
          <div className={classes['contacts__item__address']}>
            <div className={classes['contacts__item__address__title']}>Адрес:</div>
            <div className={classes['contacts__item__address__theAdress']}>
              <div className={classes['contacts__icon']}>
                <ImLocation />
              </div>
              г. Владивосток, ул. Фадеева 47, стр. 27
            </div>
            <div className={classes['contacts__item__address__clock']}>
              <div className={classes['contacts__icon']}>
                <AiOutlineClockCircle />
              </div>
              Ежедневно 09:00 - 18:00
            </div>
          </div>
          <div className={classes['contacts__item__phones']}>
            <div className={classes['contacts__item__phones__title']}>Телефоны:</div>
            <div className={classes['contacts__item__phones__phonesFirst']}>
              <div className={classes['contacts__icon']}>
                <ImPhone />
              </div>
              +7 (992) 444-44-46
            </div>
            <div className={classes['contacts__item__phones__phonesSecond']}>
              <div className={classes['contacts__icon']}>
                <ImPhone />
              </div>
              +7 (964) 445-34-48
            </div>
          </div>
          <div className={classes['contacts__item__smm']}>
            <div className={classes['contacts__item__smm__title']}>Социальные сети:</div>
            <div className={classes['contacts__item__smm__soc']}>
              <div className={classes['contacts__icon']}>
                <SlSocialVkontakte />
              </div>
              company_example
            </div>
            <div className={classes['contacts__item__smm__soc']}>
              <div className={classes['contacts__icon']}>
                <TbBrandTelegram />
              </div>
              company_example
            </div>
            <div className={classes['contacts__item__smm__soc']}>
              <div className={classes['contacts__icon']}>
                <AiOutlineInstagram />
              </div>
              c_example@mail.ru
            </div>
            <div className={classes['contacts__item__smm__soc']}>
              <div className={classes['contacts__icon']}>
                <HiOutlineMail />
              </div>
              company_example
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Сontacts;

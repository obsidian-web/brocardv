import React from 'react';
import classes from '../styles/Footer.module.scss';
import Layout from '../hoc/Layout';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = (props: any) => {

  const scrollingMine = ()=>{
    const element = props.mainRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }
  const scrollingSlider = ()=>{
    const element = props.catalogRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }
  const scrollingStatistic = ()=>{
    const element = props.staticRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }
  const scrollingAuction = ()=>{
    const element = props.auctionRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }
  const scrollingContact = ()=>{
    const element = props.contactRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }
  const scrollingMaps = ()=>{
    const element = props.comandRef;
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })
  }

  return (

      <div className={classes['footer']}>
        <Layout>
          <div className={classes['footer__item']}>
            <div className={classes['footer__item__logo']}>
              <div className={classes['footer__item__logo__title']}>BROCARDV</div>
              <div className={classes['footer__item__logo__subTitle']}>
                Автомобили <br />
                под заказ
              </div>
            </div>
            <div className={classes['footer__item__menu']}>
              <div className={classes['footer__item__menu__main']} onClick={scrollingMine}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Главная
                </Link>
              </div>
              <div className={classes['footer__item__menu__main']} onClick={scrollingSlider}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Каталог
                </Link>
              </div>
              <div className={classes['footer__item__menu__main']} onClick={scrollingStatistic}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Статистика
                </Link>
              </div>
              <div className={classes['footer__item__menu__main']} onClick={scrollingAuction}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Аукционы
                </Link>
              </div>
              <div className={classes['footer__item__menu__main']} onClick={scrollingContact}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Контакты
                </Link>
              </div>
              <div className={classes['footer__item__menu__main']} onClick={scrollingMaps}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  Команда
                </Link>
              </div>
            </div>
            <div className={classes['footer__item__phone']}>
              <FaPhoneAlt className={classes['footer__item__phone__icon']} />
              <div className={classes['footer__item__phone__number']}>
                <Link className={classes['footer__item__menu__main__link']} to="/">
                  +7 (992) 444-44-46
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>

  );
};

export default Footer;

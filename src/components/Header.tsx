import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';
import classes from '../styles/Header/Header.module.scss';
import Layout from '../hoc/Layout';
import MobileNav from './mobileNav';
import useWindowSize from '../hooks/useWindowSize';
import useLockedBody from '../hooks/useLockedBody';

const Header = (props: any) => {
  const [mobileNav, setMobileNav] = useLockedBody(false);
  const { width, height } = useWindowSize();

  const mobileNavHandle = () => {
    setMobileNav(true);
  };

  const scrollingMine = () => {
    const element = props.mainRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  const scrollingSlider = () => {
    const element = props.catalogRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  const scrollingStatistic = () => {
    const element = props.staticRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  const scrollingAuction = () => {
    const element = props.auctionRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  const scrollingContact = () => {
    const element = props.contactRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  const scrollingMaps = () => {
    const element = props.comandRef;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  };
  
  return (
    <>
      <Layout>
        <div className={classes['header']}>
          <div className={classes['logo']}>
            <div className={classes['logo__png']}>
              <img src="logoAuto.png" alt="auto" />
            </div>
            <div className={classes['logo__text']}>
              <div className={classes['logo__title']}>Автомобили под заказ</div>
              <div className={classes['logo__subtitle']}>BROCARDV</div>
            </div>
          </div>
          <div className={classes['menu']}>
            <div className={classes['menu__main']} onClick={scrollingMine}>
              <Link className={classes['menu__link']} to="/">
                Главная
              </Link>
            </div>
            <div className={classes['menu__main']} onClick={scrollingSlider}>
              <Link className={classes['menu__link']} to="/">
                Каталог
              </Link>
            </div>
            <div className={classes['menu__main']} onClick={scrollingStatistic}>
              <Link className={classes['menu__link']} to="/">
                Статистика
              </Link>
            </div>
            <div className={classes['menu__main']} onClick={scrollingAuction}>
              <Link className={classes['menu__link']} to="/">
                Аукционы
              </Link>
            </div>
            <div className={classes['menu__main']} onClick={scrollingContact}>
              <Link className={classes['menu__link']} to="/">
                Контакты
              </Link>
            </div>
            <div className={classes['menu__main']} onClick={scrollingMaps}>
              <Link className={classes['menu__link']} to="/">
                Команда
              </Link>
            </div>

            {/*<Link className={classes['menu__link']} to="/">*/}
            {/*  Команда*/}
            {/*</Link>*/}
            
          </div>
          <div
              className={classes['menu__main__mobile']}
              // onClick={scrollingMaps}
              onClick={() => mobileNavHandle()}>
              <FaBars className={classes['menu__main__mobile__faBars']} />
            </div>
          <div className={classes['number']}>
            <FaPhoneAlt className={classes['number__icon']} />
            <div className={classes['number__number']}>
              <Link className={classes['menu__link']} to="/">
                +7 (992) 444-44-46
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <MobileNav
        setMobileNav={setMobileNav}
        mobileNav={mobileNav}
        mainRef={props.mainRef}
        catalogRef={props.catalogRef}
        staticRef={props.staticRef}
        auctionRef={props.auctionRef}
        contactRef={props.contactRef}
        comandRef={props.comandRef}
      />
    </>
  );
};

export default Header;

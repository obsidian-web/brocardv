import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import classes from '../styles/MobileNav.module.scss';
import { backdropAnimation, navAnimation } from '../animations/animations';

import { ImLocation } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
const MobileNav = ({
  mobileNav,
  setMobileNav,
  mainRef,
  catalogRef,
  staticRef,
  auctionRef,
  contactRef,
  comandRef,
}: {
  mobileNav: boolean;
  setMobileNav: (i: boolean) => void;
  mainRef: any;
  catalogRef: any;
  staticRef: any;
  auctionRef: any;
  contactRef: any;
  comandRef: any;
}) => {

  
    const scrollingMine = ()=>{
        const element = mainRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
      const scrollingSlider = ()=>{
        const element = catalogRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
      const scrollingStatistic = ()=>{
        const element = staticRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
      const scrollingAuction = ()=>{
        const element = auctionRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
      const scrollingContact = ()=>{
        const element = contactRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
      const scrollingMaps = ()=>{
        const element = comandRef;
        element.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start"
        })
      }
  return (
    <AnimatePresence initial={false}>
      {mobileNav && (
        <motion.div 
          className={classes['MobileNav']}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          variants={backdropAnimation}>
          <motion.div 
            className={classes['MobileNav__content']}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={navAnimation}>
            <div onClick={() => setMobileNav(false)} className={classes['MobileNav__iconsBlock']}>
              <RxCross1 className={classes['MobileNav__iconsBlock__icon']} />
            </div>
            <div className={classes['MobileNav__content__item']}>
              <div className={classes['MobileNav__content__item__menu']}>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingMine}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Главная
                  </Link>
                </div>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingSlider}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Каталог
                  </Link>
                </div>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingStatistic}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Статистика
                  </Link>
                </div>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingAuction}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Аукционы
                  </Link>
                </div>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingContact}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Контакты
                  </Link>
                </div>
                <div className={classes['MobileNav__content__item__menu__blockLink']} onClick={scrollingMaps}>
                  <Link className={classes['MobileNav__content__item__menu__link']} to="/">
                    Команда
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes['MobileNav__content__contact']}>
              <div className={classes['MobileNav__content__contactBlock']}>
                <div className={classes['MobileNav__content__contact__adressBlock']}>
                  <ImLocation className={classes['MobileNav__content__contact__icon']} />
                  <div className={classes['MobileNav__content__contact__title']}>
                    г. Владивосток, ул. <br /> Фадеева 47 стр. 27
                  </div>
                </div>
                <div className={classes['MobileNav__content__contact__timeBlock']}>
                  <AiOutlineClockCircle className={classes['MobileNav__content__contact__icon']} />
                  <div className={classes['MobileNav__content__contact__title']}>
                    Ежедневно 09:00 - 18:00
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) }
    </AnimatePresence>
  );
};

export default MobileNav;

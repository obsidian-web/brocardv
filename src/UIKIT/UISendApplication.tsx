import React, { useState } from 'react';
import classes from '../styles/SendApplication.module.scss';
import { RxCross1 } from 'react-icons/rx';
import UIInput from './UIInput';
import UIButton from './UIButton';
import { AnimatePresence, motion } from 'framer-motion';
import { backdropAnimation } from '../animations/animations';

const SendApplication = ({ send, setSend, title }: { send: boolean; setSend: (i: boolean) => void ; title: string}) => {
  const [name, setName] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [theme, setTheme] = useState<any>();
  const [text, setText] = useState<any>();

  return (
    <AnimatePresence initial={false}>
      {send && (
        <motion.div
          className={classes['sendApplication']}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          variants={backdropAnimation}>
          <div className={classes['sendApplication__item']}>
            <div className={classes['sendApplication__item__icon']} onClick={() => setSend(false)}>
              <RxCross1 />
            </div>
            <div className={classes['sendApplication__item__info']}>
              <div className={classes['sendApplication__item__info__title']}>{title}</div>
              <div className={classes['sendApplication__item__info__subTitle']}>
                Наши специалисты свяжутся с вами в рабочее <br /> время (Ежедневно 09:00 - 18:00)
              </div>
              <div className={classes['sendApplication__item__info__UIBlock']}>
                <div className={classes['sendApplication__item__info__UIBlock__input']}>
                  <UIInput
                    name={'Ваше имя'}
                    type={'string'}
                    value={name}
                    setValue={(i: string) => setName(i)}
                  />
                </div>
                <div className={classes['sendApplication__item__info__UIBlock__input']}>
                  <UIInput
                    name={'Номер телефона'}
                    type={'string'}
                    value={phone}
                    setValue={(i: string) => setPhone(i)}
                  />
                </div>
                <div className={classes['sendApplication__item__info__UIBlock__input']}>
                  <UIInput
                    name={'Тема обратного звонка'}
                    type={'string'}
                    value={theme}
                    setValue={(i: string) => setTheme(i)}
                  />
                </div>
              </div>
              <textarea
                className={classes['sendApplication__item__info__textarea']}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className={classes['sendApplication__item__info__button']}>
                <UIButton buttonText={'Отправить'} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SendApplication;

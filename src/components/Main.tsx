import React, {useState} from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Main.module.scss';
import UIButton from '../UIKIT/UIButton';
import mainAuto from '../assets/mainAuto.png';
import UISendApplication from '../UIKIT/UISendApplication';


const Main = (props: any) => {
  const [send, setSend] = useState<boolean>(false);
  return (

      <div className={classes['main']} ref={props.mainRef}
           style={{backgroundImage: `url(${mainAuto})`}}
      >
        <Layout>
        <UISendApplication send={send} setSend={setSend} title={'Обратный звонок'}/>
          {/*<img className={classes['main__img']} src="mainAuto.png" alt="mainAuto" />*/}
          <div className={classes['main__info']}>
            <div className={classes['main__info__title']}>
              Автомобили с аукционов Японии и Южной кореи
              <div className={classes['main__info__title__button']} onClick={() => setSend(true)}>
                <UIButton buttonText={'Обратный звонок'} />
              </div>
            </div>
            <div className={classes['main__info__static']}>
              <div className={classes['main__info__static__left']}>
                Более <b>1,500</b> привезенных машин
              </div>
              <div className={classes['main__info__static__right']}>
                На <b>60%</b> быстрее конкурентов
              </div>
            </div>
          </div>
        </Layout>
      </div>

  );
};

export default Main;

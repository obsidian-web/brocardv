import React, { useState } from 'react';
import Layout from '../hoc/Layout';
import classes from '../styles/Availability.module.scss';
import UIDropDown from '../UIKIT/UIDropDown';

const Availability = (props:any) => {
  const pag = [1, 2, 3, 4, 5]
  const dataCar = [
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: '2014',
      volume: '5,5',
      drive: 'Полный',
      mileage: '55000',
      price: '5000000',
    },
  ];
  const steeringWheel = ['Правый', 'Левый'];
  const [pagin, setPagin] = useState<any>()
  const [selectedCar, setSelectedCar] = useState<string>('');
  return (
    <Layout>
      <div className={classes['availability']} ref={props.auctionRef}>
        <div className={classes['availability__title']}>Автомобили в наличии</div>
        <div className={classes['availability__drop']}>
          <div className={classes['availability__drop__down']}>
            <UIDropDown
              children={dataCar.map((it) => it.brand)}
              name={'Марка'}
              onClick={(i: string) => setSelectedCar(i)}
            />
          </div>
          <div className={classes['availability__drop__down']}>
            <UIDropDown
              children={dataCar.map((it) => it.model)}
              name={'Модель'}
              onClick={(i: string) => setSelectedCar(i)}
            />
          </div>
          <div className={classes['availability__drop__down']}>
            <UIDropDown
              children={steeringWheel}
              name={'Руль'}
              onClick={(i: string) => setSelectedCar(i)}
            />
          </div>
        </div>
        <div className={classes['availability__item']}>
          {dataCar.map((item) => (
            <>
              <div className={classes['availability__item__block']}>
                <div className={classes['availability__item__block__img']}>
                  <img src="skyline.png" alt="png" />
                </div>
                <div className={classes['availability__item__block__info']}>
                  <div className={classes['availability__item__block__info__title__price']}>
                    <div>
                      {item.brand} {item.model}, {item.year}
                    </div>
                    <div>{item.price}Р</div>
                  </div>
                  <div className={classes['availability__item__block__info__volume']}>
                    Объем: <p>{item.volume}</p>
                  </div>
                  <div className={classes['availability__item__block__info__drive']}>
                    Привод: <p>{item.drive}</p>
                  </div>
                  <div className={classes['availability__item__block__info__mileage']}>
                    Пробег: <p>{item.mileage}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className={classes['availability__pagination']}>
          {pag.map((item, index)=> <div onClick={()=>setPagin(index)}  className={
                index === pagin
                  ? classes['availability__pagination__itemActive']
                  : classes['availability__pagination__item']
              }>
              {item}

          </div>)}
        </div>
      </div>
    </Layout>
  );
};

export default Availability;

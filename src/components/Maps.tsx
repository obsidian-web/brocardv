import React from 'react';
import classes from '../styles/Map.module.scss';
import Layout from '../hoc/Layout';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Maps = (props: any) => {
  const defaultState = {
    center: [43.099673, 131.975864],
    zoom: 15,
  };

  return (
      <div className={classes['map']} ref={props.comandRef}>
        <Layout>
        <div className={classes['map__item']}>
          <YMaps>
            <Map width={1004} height={539} defaultState={defaultState}>
              <Placemark geometry={[43.099673, 131.975864]} />
            </Map>
          </YMaps>
        </div>
        </Layout>
      </div>
  );
};

export default Maps;

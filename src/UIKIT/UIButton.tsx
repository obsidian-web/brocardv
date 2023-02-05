import classes from '../styles/UIKit/UIButton.module.scss';
import React, { FC } from 'react';

type button = {
  buttonText: string;
  //onClick?
};
const UIButton: FC<button> = ({ buttonText }) => {
  return <div className={classes['UIButton']}>{buttonText}</div>;
};

export default UIButton;

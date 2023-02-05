import React, { FC, useState } from 'react';
import classes from '../styles/UIKit/UIInput.module.scss';

type UIInputProps = {
  name: string;
  type: 'phone' | 'string';
  value: string;
  setValue: (i: string) => void;
};
const UIInput: FC<UIInputProps> = (props) => {
  const [active, setActive] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  const inputHandler = (i: string) => {
    if (!touched) {
      setTouched(true);
    }
    props.setValue(i);
  };

  const blurHandler = () => {
    if (touched) {
      setActive(false);
    }
    if (props.value !== '') {
      setActive(true);
    }
  };

  return (
    <div className={classes['UIInput']}>
      <div className={active ? classes['UIInput__name-active'] : classes['UIInput__name-disabled']}>
        {props.name}
      </div>
      <input
        type="text"
        value={props.value}
        onChange={(e) => inputHandler(e.currentTarget.value)}
        onFocus={() => setActive(true)}
        onBlur={() => blurHandler()}
      />
    </div>
  );
};

export default UIInput;

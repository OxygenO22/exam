import React, { useRef, useState } from 'react';
import s from './Counter.module.scss';
import { Button } from '../ui/button/Button';

export const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const maxValue = useRef(5);
  const isButtonAddDisabled = value === maxValue.current;
  const isButtonResetDisabled = value === 0;
  const limitStyle = maxValue.current === value ? s.maxvalue : "";
  const increase = 1;
  const viasulisation = (100 * value) / maxValue.current;

  const add = () => {
    const valueCounter = value + increase;
    if (valueCounter <= maxValue.current) {
      setValue(valueCounter);
    };
  };

  const reset = () => {
    setValue(0);
    maxValue.current = Math.ceil(Math.random() * 20);
  };

  return (
    <div className={s.counter_wrapper}>
      <div className={s.maintitle__wrapper}>
        <h2>Counter</h2>
      </div>
      <div className={s.maxvalue__wrapper}>
        <h3>
          Max value: <span className={limitStyle}>{maxValue.current}</span>
        </h3>
      </div>
      <div className={s.value__wrapper}>
        <h1>{value}</h1>
      </div>
      <div className={s.visualisation}>
        <div
          style={{ width: `${viasulisation}%` }}
          className={s.visualisation__inner}
        ></div>
      </div>
      <div className={s.buttonWrapper}>
        <Button
          title="Увеличить"
          onClickHandler={add}
          isDisabled={isButtonAddDisabled}
        />
        <Button
          title="Сбросить"
          onClickHandler={reset}
          isDisabled={isButtonResetDisabled}
        />
      </div>
    </div>
  );
}

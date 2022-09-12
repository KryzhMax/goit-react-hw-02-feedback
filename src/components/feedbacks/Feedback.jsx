import React from 'react';
import s from './Feedback.module.css';

export function Feedback({ options, onClick: onHandleClick }) {
  return (
    <>
      {options.map(item => (
        <button
          key={item}
          name={item}
          className={s.feedbackButtons}
          onClick={onHandleClick}
        >
          {item}
        </button>
      ))}
    </>
  );
}

import React from 'react';
import s from './StatItem.module.css';

export default function StatItem({ options }) {
  //   console.log(options);
  return (
    <>
      {options.map((item, index) => (
        <li key={index} className={s.statItem}>
          {item[0]}:{item[1]}
        </li>
      ))}
    </>
  );
}

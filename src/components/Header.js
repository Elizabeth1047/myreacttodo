import React from 'react'
import style from "../style.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>
        <span className={style.to}>TO</span>
        <span className={style.do}>DO</span>
      </h1>
    </div>
  );
}

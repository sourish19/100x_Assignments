import React from "react";
import style from "./Timer.module.css";
import { useState } from "react";

const Hour = () => {};

const Minute = () => {};

const Second = () => {};

const Timer = () => {
  return (
    <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            <span className={`${(style.timeInput, style.timeUnit)}`}>12:</span>
            <span className={`${(style.timeInput, style.timeUnit)}`}>12:</span>
            <span className={`${(style.timeInput, style.timeUnit)}`}>12</span>
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button className={style.actionButton}>Pause</button>
        <button className={style.actionButton}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;

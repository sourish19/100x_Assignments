import { useEffect, useState } from "react";
import style from "./Timer.module.css";
import { formatTime, calculateTime } from "../utils/auxiliaryFunctions.js";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState(true);

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {}, []);

  const handleInput = (e) => {
    if (e.target.id === "hours") setHours(() => e.target.value);
    if (e.target.id === "minutes") setMinutes(() => e.target.value);
    if (e.target.id === "seconds") setSeconds(() => e.target.value);
  };

  return (
    <div className={style.timerApp}>
      <div className={style.timerDisplay}>
        <div className={style.timerCircle}>
          <div className={style.timerTime}>
            {editState ? (
              <input
                className={style.timeInput}
                id="hours"
                onChange={handleInput}
                type="text"
                maxLength="2"
              />
            ) : (
              <div>{hours + ":"}</div>
            )}
            {editState ? (
              <input
                className={style.timeInput}
                id="minutes"
                onChange={handleInput}
                type="text"
                maxLength="2"
              />
            ) : (
              <div>{minutes + ":"}</div>
            )}
            {editState ? (
              <input
                className={style.timeInput}
                id="seconds"
                onChange={handleInput}
                type="text"
                maxLength="2"
              />
            ) : (
              <div>{seconds}</div>
            )}
          </div>
        </div>
      </div>
      <div className={style.actionButtons}>
        <button
          onClick={() => {
            console.log(hours, minutes, seconds);

            setTime(calculateTime(hours, minutes, seconds));
            console.log(time);
          }}
          className={style.actionButton}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className={style.actionButton}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;

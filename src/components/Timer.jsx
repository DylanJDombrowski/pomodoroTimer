import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TimerComponent = ({
  sessionLength,
  breakLength,
  isRunning,
  handleStartStop,
  handleReset,
}) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [timerMode, setTimerMode] = useState("Session");

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 0) {
            // Switch mode and reset timeLeft based on the new mode
            const newMode = timerMode === "Session" ? "Break" : "Session";
            const newTimeLeft =
              newMode === "Session" ? sessionLength : breakLength;
            setTimerMode(newMode);
            return newTimeLeft;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else if (!isRunning && timerMode === "Session") {
      // Reset to session length if timer is not running and it's in session mode
      setTimeLeft(sessionLength);
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionLength, breakLength, timerMode]);

  const formatTimeLeft = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <div id="timer-label">{timerMode}</div>
      <div id="time-left">{formatTimeLeft(timeLeft)}</div>
      <button id="start_stop" onClick={handleStartStop}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

TimerComponent.propTypes = {
  sessionLength: PropTypes.number,
  breakLength: PropTypes.number,
  isRunning: PropTypes.bool,
  handleStartStop: PropTypes.func,
  handleReset: PropTypes.func,
};

export default TimerComponent;

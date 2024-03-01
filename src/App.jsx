import { useState } from "react";
import Timer from "./components/Timer";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";

// When resetting the timer while in break, the timer doesnt reset to the break length, no does session change back to session length
//
//
//

const App = () => {
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [timerMode, setTimerMode] = useState("Session");
  const [currentTime, setCurrentTime] = useState(sessionLength);

  const handleStartStop = () => {
    console.log("handleStartStop");

    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    console.log("handleReset");
    setCurrentTime(sessionLength);
    setIsRunning(false);
    setBreakLength(breakLength);
    setTimerMode("Session");
  };

  const incrementSession = () => {
    console.log("incrementSession");
    if (sessionLength < 60 * 60) {
      const newLength = sessionLength + 60;
      setSessionLength(newLength);
      if (!isRunning) {
        setCurrentTime(newLength); // Update current timer time if timer is not running
      }
    }
  };

  const decrementSession = () => {
    console.log("decrementSession");
    if (sessionLength > 60) {
      const newLength = sessionLength - 60;
      setSessionLength(newLength);
      if (!isRunning) {
        setCurrentTime(newLength); // Update current timer time if timer is not running
      }
    }
  };

  const incrementBreak = () => {
    console.log("incrementBreak");
    if (breakLength < 60 * 60) {
      setBreakLength(breakLength + 60);
    }
  };

  const decrementBreak = () => {
    console.log("decrementBreak");
    if (breakLength > 60) {
      setBreakLength(breakLength - 60);
    }
  };

  return (
    <div id="app">
      <Timer
        isRunning={isRunning}
        timerMode={timerMode}
        sessionLength={currentTime}
        breakLength={breakLength}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
      />
      <BreakLength
        breakLength={breakLength / 60} // Convert to minutes for display
        onIncrement={incrementBreak}
        onDecrement={decrementBreak}
      />
      <SessionLength
        sessionLength={sessionLength / 60} // Convert to minutes for display
        onIncrement={incrementSession}
        onDecrement={decrementSession}
      />
    </div>
  );
};

export default App;

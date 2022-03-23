import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Stopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div className="stopWatch">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
    </div>
  );
}
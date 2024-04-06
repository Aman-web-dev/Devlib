"use client";
import React, { useEffect, useState, useRef } from "react";

function SessionTimer() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [timerIntervalID, setIntervalID] = useState(null);

  const timer = () => {
    var hours = time.hours;
    var minutes = time.minutes;
    var seconds = time.seconds;

    const Start = () => {
      var id = setInterval(() => {
        seconds = seconds + 1;
        if (seconds == 60) {
          seconds = 0;
          minutes = minutes + 1;
        }
        if (minutes == 60) {
          minutes = 0;
          hours = hours + 1;
        }
        setTime((prev) => ({
          ...prev,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        }));
      }, 1000);
      setIntervalID(id);
    };
    const Stop = () => {
      clearInterval(timerIntervalID);
      setIntervalID(null);
    };
    return { Start, Stop };
  };

  useEffect(() => {}, [time]);

  return (
    <div
      className="flex  border border-blue-300 py rounded-lg px-2"
      style={{ width: "170px" }}
    >
      <div className="flex-grow my-auto py-2">
        <p className="text-blue-400 ">
          {("0" + time.hours).slice(-2)}:{("0" + time.minutes).slice(-2)}:
          {("0" + time.seconds).slice(-2)}
        </p>
      </div>
      <div className="flex-shrink-0 py-2">
        {timerIntervalID == null ? (
          <button
            className="font-bold text-lg text-yellow-400"
            onClick={() => timer().Start()}
          >
            Start
          </button>
        ) : (
          <button
            className="font-bold text-lg text-red-400"
            onClick={() => timer().Stop()}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}

export default SessionTimer;

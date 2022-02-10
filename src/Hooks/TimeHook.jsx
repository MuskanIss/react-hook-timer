import React, { useEffect } from "react";

export var TimeHook = ({ initTime, endTime }) => {
  let [time, setTime] = React.useState(initTime);
  useEffect(() => {
    let setTimer = setInterval(() => {
      setTime((prev) => {
        if (prev == endTime) {
          clearInterval(setTimer);
          return prev;
        } else {
          return parseInt(prev) + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(setTimer);
    };
  }, []);
  return (
    <>
      <div>Counter:{time}</div>
    </>
  );
};

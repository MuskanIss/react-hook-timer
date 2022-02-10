import React from "react";
import { TimeHook } from "../Hooks/TimeHook";

export let Counter = () => {
  let [initTime, setInitTime] = React.useState(0);
  let [endTime, setEndTime] = React.useState(0);
  let [start, setStart] = React.useState(false);
  return (
    <>
      <input
        value={initTime}
        onChange={(e) => {
          setStart(false);
          setInitTime(e.target.value);
        }}
        type="number"
        placeholder="Enter Start Time"
      />
      <input
        onChange={(e) => {
          setStart(false);
          setEndTime(e.target.value);
        }}
        value={endTime}
        type="number"
        placeholder="Enter End Time"
      />
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        Start Timer
      </button>
      <button
        onClick={() => {
          setStart(false);
        }}
      >
        Reset
      </button>
      {start ? (
        <div>
          <TimeHook initTime={initTime} endTime={endTime} />
        </div>
      ) : (
        <div>Counter:0</div>
      )}
    </>
  );
};

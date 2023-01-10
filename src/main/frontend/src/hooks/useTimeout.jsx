import React, { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  savedCallback.current = callback;

  let time = null;

  const timeStart = () => {
    if (delay === null || !time) return;

    console.log("Start!!");
    time = setTimeout(() => savedCallback.current(), delay);
  };

  const timeEnd = () => {
    if (!time) return;

    console.log("End!!");
    return () => clearTimeout(time);
  };

  return { timeStart, timeEnd };
}

import React, { useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const time = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(time);
  }, [delay]);
}

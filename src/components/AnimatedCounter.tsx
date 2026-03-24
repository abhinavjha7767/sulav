"use client";

import React, { useState, useEffect } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

export const AnimatedCounter = ({ from, to, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
};

import React, { useEffect, useState } from 'react';

interface Props {
  targetValue: number;
  targetDuration: number; // Duration in milliseconds
}

const Counter = ({ targetValue, targetDuration }: Props) => {
  const [count, setCount] = useState(1);
  const [intervalTime, setIntervalTime] = useState(targetDuration / targetValue); // Initial interval time

  useEffect(() => {
    const minIntervalTime = 10; // Minimum interval time in milliseconds

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          const newCount = prevCount + 1;

          // Calculate progress (0 to 1) based on current count
          const progress = newCount / targetValue;

          // Use a more gradual easing function
          let easedProgress;

          if (progress < 0.2) {
            // For the first 20%, ease in very slowly
            easedProgress = Math.pow(1 -progress, 1); // Quardratic easing for a very slow start
          } else if (progress < 0.8) {
            // For the middle 60%, linear transition
            easedProgress = progress; // Linear for a consistent increase
          } else {
            // For the last 20%, ease out
            easedProgress = 1 - Math.pow(1 - progress,7); // Quadratic easing out for the last part
          }

          // Calculate new interval time using eased progress
          const newIntervalTime = Math.max(
            (targetDuration / targetValue) * easedProgress,
            minIntervalTime
          );
          setIntervalTime(newIntervalTime); // Update interval time
          return newCount; // Return the incremented count
        } else {
          clearInterval(timer); // Clear the interval when the count reaches targetValue
          return prevCount; // Return the final count
        }
      });
    }, intervalTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [count, targetValue, intervalTime]); // Add intervalTime to dependencies

  return (
    <div className="items-center flex w-3/5">
      {count > 10 ? (
        <>
          <p className="flex-grow text-center mx-auto text-8xl font-extrabold">{count}</p>
          <p className="flex-grow text-center mx-auto text-8xl font-extrabold">+</p>
        </>
      ) : (
        <p className="w-full text-center mx-auto text-8xl font-extrabold">{count}</p>
      )}
    </div>
  );
};

export default Counter;
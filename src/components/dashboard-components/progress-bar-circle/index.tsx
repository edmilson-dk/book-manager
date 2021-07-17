import { useCallback, useEffect, useRef, useState } from "react";

import { ProgressBarCircleProps } from "./types";

import styles from "src/styles/components/dashboard-components/progress-bar-circle/styles.module.scss";

export function ProgressBarCircle({
  borderColor,
  percent,
}: ProgressBarCircleProps) {
  const circleRef = useRef<SVGCircleElement>(null);
  const [radius, setRadius] = useState(34);
  const [circumference, setCircumference] = useState(() => {
    return radius * 2 * Math.PI;
  });

  const setProgress = useCallback((percent: number) => {
    if (circleRef.current) {
      const offset = circumference - percent / 100 * circumference;
      circleRef.current.style.strokeDashoffset = String(offset);
    }
  }, [circumference]);

  useEffect(() => {
    setProgress(60);
  }, [setProgress]);

  return (
    <div
      className={styles.progressBarCircleWrapper}
    >
      <svg
        id="svg"
        width="100"
        height="100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"

      >
        <circle
          style={{
            zIndex: 1,
          }}
          stroke="#CFCDE0"
          strokeWidth={8}

          r="34"
          cx="50"
          cy="50"
          fill="transparent"
        ></circle>
        <circle
          ref={circleRef}
          className={styles.progressBarCircle}
          r="34"
          cx="50"
          cy="50"
          stroke={borderColor}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={`${circumference}`}
          fill="transparent"
        ></circle>

      </svg>
      <strong
        className={styles.progressBarCirclePercent}
        style={{
          color: borderColor,
        }}
      >
        {`${percent}%`}
      </strong>
    </div>
  );
}
import React from "react";
import styles from "./SemiCircleProgressBar.module.css";
import { SemiCircleProgress } from "react-semicircle-progressbar";

const SemiCircleProgressBar = ({ progress }) => {
  const percentage = () => {
    if (progress > 70) {
      return progress - 9;
    } else {
      return progress;
    }
  };

  return (
    <div className={styles.wrapper}>
      <SemiCircleProgress
        percentage={percentage()}
        size={{
          width: 120,
          height: 120,
        }}
        fontStyle={{ display: "none" }}
        strokeWidth={10}
        strokeColor="rgba(47, 57, 191, 1)"
        bgStrokeColor="#DCDDEC"
        hasBackground={true}
        strokeLinecap="round"
        percentageSeperator=""
        showPercentage={false}
      />
      <div className={styles.centerText}>
        <h3 className={styles.progress}>{progress}%</h3>
        <p className={styles.text}>of 100 point</p>
      </div>
    </div>
  );
};

export default SemiCircleProgressBar;

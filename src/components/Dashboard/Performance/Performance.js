import React, { useState } from "react";
import styles from "./Performance.module.css";
import Toggle from "./Toggle/Toggle";
import ApexChart from "./Chart/Chart";

const Performance = () => {
  const [turnOn, setTurnOn] = useState(true);
  const handleToggle = () => {
    setTurnOn((prev) => !prev);
  };
  return (
    <div className={styles.peroFormanceContainer}>
      <div className={styles.header}>
        <Toggle turnOn={turnOn} handleToggle={handleToggle} />
        <button className={[styles.button, styles.restartButton].join(" ")}>
          Restart
        </button>
        <button className={[styles.button, styles.enableFlexibleIp].join(" ")}>
          Enable Flexible IP
        </button>
      </div>
      <ApexChart />
    </div>
  );
};

export default Performance;

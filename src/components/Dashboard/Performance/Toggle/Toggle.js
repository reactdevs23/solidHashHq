import React from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ turnOn, handleToggle, label }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={[styles.box, turnOn && styles.activeBox].join(" ")}
        onClick={handleToggle}
      >
        Turn On
      </p>
      <p
        className={[styles.box, !turnOn && styles.activeBox].join(" ")}
        onClick={handleToggle}
      >
        Turn Off
      </p>
    </div>
  );
};

export default Toggle;

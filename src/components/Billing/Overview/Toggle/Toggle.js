import React from "react";
import styles from "./Toggle.module.css";

const Toggle = ({ overview, handleToggle }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={[styles.box, overview && styles.activeBox].join(" ")}
        onClick={handleToggle}
      >
        Overview
      </p>
      <p
        className={[styles.box, !overview && styles.activeBox].join(" ")}
        onClick={handleToggle}
      >
        Invoices
      </p>
    </div>
  );
};

export default Toggle;

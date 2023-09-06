import React, { useState } from "react";
import CheckBox from "../Checkbox/Checkbox";
import styles from "./Feature.module.css";

const Feature = ({ title, price, backupId }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => setChecked((prev) => !prev)}
      className={[
        styles.backupContainer,
        checked && styles.selectedBackupContainer,
      ].join(" ")}
      key={backupId}
    >
      <div className={[styles.backup].join(" ")}>
        <div className={styles.checkboxAndTitle}>
          <CheckBox checked={checked} setChecked={setChecked} />
          <p className={styles.backupTitle}>{title}</p>
        </div>
        <p className={styles.backupPrice}>+{price} </p>
      </div>
    </div>
  );
};

export default Feature;

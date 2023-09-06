import React from "react";
import styles from "./Checkbox.module.css";

const CheckBox = ({ checked }) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;

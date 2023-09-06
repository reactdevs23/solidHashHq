import React from "react";
import styles from "./Checkbox.module.css";

const CheckBox = ({ checked, setChecked, id }) => {
  const handleClick = () => {
    if (checked) {
      setChecked(null);
    } else {
      setChecked(id);
    }
  };
  return (
    <label className={styles.container}>
      <input type="checkbox" checked={checked} onChange={handleClick} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;

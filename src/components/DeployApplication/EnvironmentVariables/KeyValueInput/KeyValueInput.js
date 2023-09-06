import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./KeyValueInput.module.css";

const KeyValueInput = ({ input, keyValue, onChange, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(input.key.name); // Pass the key name to identify the row to delete
  };
  return (
    <>
      <div
        className={[styles.keyValue, id === 0 && styles.firstKeyValue].join(
          " "
        )}
      >
        <div className={styles.inputWrapper}>
          <label htmlFor={input.key.name} className={styles.label}>
            Key
          </label>
          <input
            type={input.key.type}
            id={input.key.name}
            name={input.key.name}
            value={keyValue.key}
            className={`${styles.input} ${styles.keyInput}`}
            placeholder={input.key.placeholder}
            onChange={onChange}
          />
        </div>
        <div
          className={[styles.inputWrapper, styles.valueInputWrapper].join(" ")}
        >
          <label htmlFor={input.value.name} className={styles.label}>
            Value
          </label>
          <input
            type={input.value.type}
            id={input.value.name}
            name={input.value.name}
            value={keyValue.value}
            className={`${styles.input} ${styles.valueInput}`}
            placeholder={input.value.placeholder}
            onChange={onChange}
          />{" "}
        </div>
        <div className={styles.deleteContainer} onClick={handleDelete}>
          <AiOutlineDelete className={styles.deleteIcon} />
        </div>
      </div>
    </>
  );
};

export default KeyValueInput;

import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./StepWrapper.module.css";
const StepWrapper = ({ heading, isOpen, setIsOpen, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h3 className={styles.title}>{heading}</h3>
        <div
          className={styles.arrowContainer}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <IoIosArrowUp className={styles.arrow} />
          ) : (
            <IoIosArrowDown className={styles.arrow} />
          )}
        </div>
      </div>
      {isOpen && <div className={styles.childrenContanier}>{children}</div>}
    </div>
  );
};

export default StepWrapper;

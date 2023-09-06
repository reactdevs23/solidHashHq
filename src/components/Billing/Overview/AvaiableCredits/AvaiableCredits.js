import React from "react";
import { ticket } from "../../../../images/images";
import styles from "./AvailableCredits.module.css";

const AvaiableCredits = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Available Credits</h4>
      <div className={styles.applyCodeWrapper}>
        <img src={ticket} alt="#" className={styles.image} />
        <p className={styles.info}>
          Apply a Promo code or activation code to add credits to your
          organization.{" "}
        </p>
        <button className={styles.button}>Apply</button>
      </div>
    </div>
  );
};

export default AvaiableCredits;

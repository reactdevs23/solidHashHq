import React, { useState } from "react";
import styles from "./PurchasePeriodFeature.module.css";
import CheckBox from "./Checkbox/Checkbox";

const PurchasePeriodFeature = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [checked, setChecked] = useState(0);

  const backups = {
    monthly: [
      { title: "Enable backups", price: "$14" },
      { title: "Enable backups", price: "$21" },
      { title: "Enable backups", price: "$424" },
    ],
    yearly: [
      { title: "Enable backups", price: "$50" },
      { title: "Enable backups", price: "$100" },
      { title: "Enable backups", price: "$4500" },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.periodAndFeature}>
        <div className={styles.purchasePeriodContainer}>
          <div className={styles.periodContainer}>
            {" "}
            <div
              className={[
                styles.purchasePeriod,
                selectedPeriod.toLocaleLowerCase() === "monthly" &&
                  styles.selectedPurchasePeriod,
              ].join(" ")}
              onClick={() => setSelectedPeriod("monthly")}
            >
              <p className={styles.price}>$29</p>
              <p className={styles.period}>Monthly</p>
            </div>
            <div
              className={[
                styles.purchasePeriod,
                selectedPeriod.toLocaleLowerCase() === "yearly" &&
                  styles.selectedPurchasePeriod,
              ].join(" ")}
              onClick={() => setSelectedPeriod("yearly")}
            >
              <p className={styles.price}>$380</p>
              <p className={styles.period}>Monthly</p>
            </div>
          </div>
        </div>
        <div className={styles.featuresContainer}>
          <p className={styles.label}>More Features:</p>

          <div className={styles.enableBackupContainer}>
            {backups[selectedPeriod].map((el, backupId) => (
              <div
                className={[
                  styles.backupContainer,
                  checked === backupId && styles.selectedBackupContainer,
                ].join(" ")}
                key={backupId}
              >
                <div className={[styles.backup].join(" ")}>
                  <div className={styles.checkboxAndTitle}>
                    <CheckBox
                      id={backupId}
                      checked={checked === backupId}
                      setChecked={setChecked}
                    />
                    <p className={styles.backupTitle}>{el.title}</p>
                  </div>
                  <p className={styles.backupPrice}>+{el.price} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.launchButton}>Launch now</button>
      </div>
    </div>
  );
};

export default PurchasePeriodFeature;

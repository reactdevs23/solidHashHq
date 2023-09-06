import React from "react";
import styles from "./RunningInvoice.module.css";

const RunningInvoice = () => {
  const invoiceDetails = [
    {
      title: "Billing Period",
      details: "08/01/23 - 09/01/23",
    },
    {
      title: "Last Billed On",
      details: "08/01/23 - 09/01/23",
    },
    {
      title: "Previous Invoice",
      details: "$13.96",
    },
    {
      title: "This Time Last Month",
      details: "$13.96",
    },
  ];

  const descriptionArray = [
    { companyName: "Atlas Web", amount: "$18.34" },
    { companyName: "App Service ", amount: "$0.00" },
    { companyName: "Charts ", amount: "$0.00" },
    { companyName: "Webhost", amount: "$0.00" },
  ];
  return (
    <div className={styles.runningInvoiceWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headeingAndTotal}>
          <p className={styles.heading}>Running Invoice Total</p>
          <p className={styles.total}>$21,500</p>
        </div>
        <div className={styles.informationContainer}>
          {invoiceDetails.map((el, i) => (
            <div className={styles.infoBox} key={i}>
              <p className={styles.title}>{el.title}</p>
              <p className={styles.details}>{el.details}</p>
            </div>
          ))}
        </div>
        <button className={styles.button}>View Current Invoice </button>
      </div>
      <div className={[styles.wrapper, styles.description].join(" ")}>
        <div
          className={[styles.spaceBetween, styles.descriptionHeader].join(" ")}
        >
          <p className={styles.companyName}>Description</p>
          <p className={styles.amount}>Running Total</p>
        </div>
        {descriptionArray.map((el, i) => (
          <div className={styles.spaceBetween} key={i}>
            <p className={styles.companyName}>{el.companyName}</p>
            <p className={styles.amount}>{el.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningInvoice;

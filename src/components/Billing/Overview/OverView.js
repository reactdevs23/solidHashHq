import React from "react";
import styles from "./OverView.module.css";
import RunningInvoice from "./RunningInvoice/RunningInvoice";
import PeroformanceChart from "./PeroformanceChart/PeroformanceChart";
import AvaiableCredits from "./AvaiableCredits/AvaiableCredits";
import PaymentMethod from "./PaymentMethod/PaymentMethod";

const OverView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RunningInvoice />
        <PeroformanceChart />
        <AvaiableCredits />
      </div>
      <PaymentMethod />
    </div>
  );
};

export default OverView;

import React, { useState } from "react";
import Toggle from "../../components/Billing/Overview/Toggle/Toggle";
import Invoices from "../../components/Billing/Invoices/Invoices";
import OverView from "../../components/Billing/Overview/OverView";
import styles from "./Billing.module.css";

const BillingAndInvoice = () => {
  const [overview, setOverview] = useState(true);
  const handleToggle = () => {
    setOverview((prev) => !prev);
  };
  return (
    <div className={["mainContainer"].join(" ")}>
      <div className={["mainWrapper"].join(" ")}>
        <div className={styles.billingAndInvoice}>
          <div className={styles.header}>
            <h4 className={styles.heading}>Billing And Invoice</h4>
            <Toggle overview={overview} handleToggle={handleToggle} />
          </div>
          {overview ? <OverView /> : <Invoices />}
        </div>
      </div>
    </div>
  );
};

export default BillingAndInvoice;

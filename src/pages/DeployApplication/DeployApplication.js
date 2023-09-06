import React from "react";
import styles from "./DeployApplication.module.css";
import StepWrapper from "../../components/DeployApplication/StepWrapper/StepWrapper";
import SelectApplication from "../../components/DeployApplication/SelectApplication/SelectApplication";
import SelectRegion from "../../components/DeployApplication/SelectRegion/SelectRegion";
import SelectTemplate from "../../components/DeployApplication/SelectTemplate/SelectTemplate";
import EnvironmentVariables from "../../components/DeployApplication/EnvironmentVariables/EnvironmentVariables";
import SelectHostConfiguration from "../../components/DeployApplication/SelectHostConfiguration/SelectHostConfiguration";
import PurchasePeriodFeature from "../../components/DeployApplication/PurchasePeriod/PurchasePeriodFeature";

const DeployApplication = () => {
  return (
    <div className={["mainContainer"].join(" ")}>
      <div className={["mainWrapper"].join(" ")}>
        <div className={styles.container}>
          <div className={styles.dashBoard}>
            <SelectApplication />
            <SelectRegion />
            <SelectTemplate />
            <EnvironmentVariables />
            <SelectHostConfiguration />
          </div>
          <div className={styles.myPurchaseAndFeature}>
            <PurchasePeriodFeature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployApplication;

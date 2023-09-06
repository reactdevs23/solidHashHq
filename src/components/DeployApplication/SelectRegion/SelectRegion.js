import React, { useState } from "react";

import StepWrapper from "../StepWrapper/StepWrapper";
import {
  canada,
  usa,
  germany,
  france,
  estonia,
  india,
  england,
  uae,
  turkey,
  spain,
} from "../../../images/images";
import styles from "./SelectRegion.module.css";

const SelectRegion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [region, setSelectedRegion] = useState(0);
  const regions = [
    { region: "Canada", flag: canada },
    { region: "USA", flag: usa },
    { region: "Germany", flag: germany },
    { region: "France", flag: france },
    { region: "Estonia", flag: estonia },
    { region: "India", flag: india },
    { region: "England", flag: england },
    { region: "UAE", flag: uae },
    { region: "Turkey", flag: turkey },
    { region: "Spain", flag: spain },
  ];
  return (
    <StepWrapper
      heading="Step 2 :   Select Region"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.labelAndwrapper}>
        <p>
          {" "}
          <label htmlFor="appLicationName" className={styles.label}>
            Country selection:
          </label>
        </p>
        <div className={styles.regionSelectionContainer}>
          {regions.map((el, i) => (
            <div
              key={i}
              className={[
                styles.regionSelection,
                i === region && styles.selectedRegion,
              ].join(" ")}
              onClick={() => setSelectedRegion(i)}
            >
              <h4 className={[styles.regionName]}>{el.region}</h4>
              <div className={styles.flagContainer}>
                <img
                  src={el.flag}
                  alt="#"
                  className={[styles.flag].join(" ")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </StepWrapper>
  );
};

export default SelectRegion;

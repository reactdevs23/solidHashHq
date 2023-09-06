import React, { useState } from "react";
import StepWrapper from "../StepWrapper/StepWrapper";
import styles from "./SelectApplication.module.css";
import {
  dekstopIcon,
  wordpress,
  digitalOcean,
  activeDegitalOcean,
  aws,
  activeAws,
  googleCloud,
  activeGoogleCloud,
} from "../../../images/images";
import DropDown from "./DropDown/DropDown";

const SelectApplication = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [applicationName, setApplicationName] = useState("");
  const [showAllAplicationName, setShowAllApplicationName] = useState(false);
  const [showVersionsDropDown, setShowhowVersionsDropDown] = useState(false);
  const [selectedHosting, setSelectedHosting] = useState(0);
  const allApps = [
    { icon: wordpress, name: "WordPress" },
    { icon: wordpress, name: "WordPress1" },
    { icon: wordpress, name: "WordPress2" },
    { icon: wordpress, name: "WordPress3" },
  ];
  const versions = [
    { icon: dekstopIcon, name: "6.2.2 ", released: "(Last Version)" },
    { icon: dekstopIcon, name: "6.0.0 ", released: "(First Version)" },
    { icon: dekstopIcon, name: "6.2.0 ", released: "(Second Version)" },
    { icon: dekstopIcon, name: "6.2.1 ", released: "(Third Version)" },
  ];
  const hostingProviders = [
    {
      providerName: "Digital Ocean",
      logo: { logo: digitalOcean, activeLogo: activeDegitalOcean },
    },
    {
      providerName: "Amazon Web Service",
      logo: { logo: aws, activeLogo: activeAws },
    },
    {
      providerName: "Google Cloud",
      logo: { logo: googleCloud, activeLogo: activeGoogleCloud },
    },
  ];
  return (
    <StepWrapper
      heading="Step 1 :   Select Application"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.selectApplication}>
        <div className={styles.labelAndwrapper}>
          <p>
            {" "}
            <label htmlFor="appLicationName" className={styles.label}>
              Application name:
            </label>
          </p>
          <div className={styles.inputContainer}>
            <div className={styles.iconContainer}>
              <img src={dekstopIcon} alt="#" className={styles.icon} />
            </div>
            <input
              id="appLicationName"
              name="appLicationName"
              type="text"
              required
              placeholder="Enter application name"
              value={applicationName}
              onChange={(e) => setApplicationName(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.appAndVersion}>
          <DropDown
            label="App selection:"
            data={allApps}
            showDropdown={showAllAplicationName}
            setShowDropDown={setShowAllApplicationName}
          />

          <DropDown
            label="Version selection:"
            data={versions}
            showDropdown={showVersionsDropDown}
            setShowDropDown={setShowhowVersionsDropDown}
          />
        </div>
        <div className={styles.labelAndwrapper}>
          <p>
            {" "}
            <label htmlFor="appLicationName" className={styles.label}>
              Hosting selection :
            </label>
          </p>
          <div className={styles.hostingSelectionContainer}>
            {hostingProviders.map((el, i) => (
              <div
                key={i}
                className={[
                  styles.hostingSelection,
                  i === selectedHosting && styles.selectedHosting,
                ].join(" ")}
                onClick={() => setSelectedHosting(i)}
              >
                <h4 className={[styles.hostingProviderName]}>
                  {el.providerName}
                </h4>
                <div className={styles.logoContainer}>
                  <img
                    src={
                      i === selectedHosting ? el.logo.activeLogo : el.logo.logo
                    }
                    alt="#"
                    className={[styles.logo, i === 1 && styles.logoSize].join(
                      " "
                    )}
                  />
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
    </StepWrapper>
  );
};

export default SelectApplication;

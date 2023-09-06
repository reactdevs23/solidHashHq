import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Info.module.css";
import SemicircularProgressBar from "./SemiCircleProgressBar/SemiCircleProgressBar";

const Info = () => {
  const data = {
    progressInfo: [
      { progress: 48, title: "Processor (CPU)", info: "1X3.3 GHz" },
      {
        progress: 92,
        title: "Memory (RAM)",
        info: "1.8 GB  from 2.0 GB",
      },
      { progress: 16, title: "Processor (CPU)", info: "4.4 GB  from 40.0 GB" },
    ],
    ipInfo: [
      { key: "IP Address", value: "128.987.244" },
      { key: "IPv4 Address", value: "128.987.244" },
      { key: "IPv6 Address", value: "fe11:4f5:2e..." },
    ],
    otherInfo: [
      { key: "Workload", value: "20%" },
      { key: "Services", value: "Not Active" },
      { key: "IPv6 Address", value: "Active" },
    ],
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };
  return (
    <div className={styles.infoContainer}>
      <div className={styles.header}>
        <div className={styles.linkContainer}>
          <p className={styles.linkLabel}>
            {" "}
            <TfiWorld />
            Link:
          </p>
          <p className={styles.link}>My-website-deployed.com</p>
        </div>
        <div className={styles.settingsContainer}>
          <FiSettings className={styles.settingsIcon} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.progressWrapper}>
          {data.progressInfo.map((el, i) => (
            <div className={styles.progressContainer} key={i}>
              {" "}
              <SemicircularProgressBar progress={el.progress} />
              <div className={styles.nameAndInfo}>
                {" "}
                <p className={styles.title}>{el.title}</p>
                <p className={styles.infoText}>{el.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.otherInfo}>
          <div className={styles.infoBox}>
            {data.ipInfo.map((el, i) => (
              <div className={styles.infoRow} key={i}>
                <p className={styles.key}>{el.key}:</p>
                <p className={styles.value}>{truncateText(el.value, 11)}</p>
              </div>
            ))}
          </div>
          <div className={styles.infoBox}>
            {data.otherInfo.map((el, i) => (
              <div className={styles.infoRow} key={i}>
                <p className={styles.key}>{el.key}:</p>
                <p
                  className={[
                    styles.value,
                    el.key.toLowerCase() === "workload" && styles.workload,
                    el.value.toLowerCase() === "not active" && styles.notActive,
                    el.value.toLowerCase() === "active" && styles.active,
                  ].join(" ")}
                >
                  {el.key.toLowerCase() === "workload" && (
                    <span className={styles.workloadText}>
                      100% <BsArrowRight />
                    </span>
                  )}{" "}
                  {el.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

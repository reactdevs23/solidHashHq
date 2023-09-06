import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Info from "./Info/Info";
import Performance from "./Performance/Performance";
import Specefication from "./Specefication/Specefication";
import styles from "./Project.module.css";
const Project = ({ img, name, id, ipAddress, status }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.projectContainer}>
      <div
        className={[
          styles.tableContainer,
          isOpen && styles.activeTableContainer,
        ].join(" ")}
      >
        {" "}
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.iconAndNameId}>
              <img src={img} alt="#" className={styles.icon} />

              <div className={styles.nameAndId}>
                <p className={styles.name}>{name}</p>
                <p className={styles.id}>{id}</p>
              </div>
            </div>

            <p
              className={[styles.ipAddress].join(" ")}
              dangerouslySetInnerHTML={{ __html: ipAddress }}
            ></p>
            <div className={styles.statusContainer}>
              {status.map((status, i) => (
                <p
                  key={i}
                  className={[
                    styles.status,
                    status.toLowerCase() === "shared" && styles.shared,
                    status.toLowerCase() === "ready" && styles.ready,
                    status.toLowerCase() === "free" && styles.free,
                  ].join(" ")}
                >
                  {status}
                </p>
              ))}
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={[styles.button, styles.connectButton].join(" ")}
              >
                Connect
              </button>
              <button
                className={[styles.button, styles.monitorButton].join(" ")}
              >
                Monitor
              </button>
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
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.infoAndPerformance}>
            <Info />
            <Performance />
          </div>
          <Specefication />
        </div>
      )}
    </div>
  );
};

export default Project;

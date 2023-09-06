import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styles from "./Specefication.module.css";

const Specefication = () => {
  const specificationData = [
    { title: "VERSION", info: "6.0.8" },
    { title: "REGION", info: "AWS / Oregon" },
    { title: "CLUSTER TIER", info: "M0 Sandbox (General)" },
    { title: "TYPE", info: "Replica Set - 3 nodes" },
    { title: "BACKUPS", info: "Not Active" },
    { title: "ATLAS SQL", info: "Connect" },
    { title: "ATLAS SEARCH", info: "Create Index" },
  ];
  return (
    <div className={styles.speceficationContainer}>
      <div className={styles.whatBoxContainer}>
        <div className={styles.whatBox}>
          <AiOutlineQuestionCircle className={styles.whatIcon} />
        </div>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.row}>
            {specificationData.map((el, index) => (
              <td className={[styles.titleAndInfo].join(" ")} key={index}>
                <p className={styles.title}>{el.title}</p>
                <p className={styles.info}>{el.info}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Specefication;

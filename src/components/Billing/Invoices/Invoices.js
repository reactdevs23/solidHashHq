import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiLogoVisa, BiDownload } from "react-icons/bi";
import styles from "./Invoices.module.css";

const Invoices = () => {
  const invoicesData = [
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
    {
      serviceName: "MY Services",
      id: "2467",
      invoiceDate: "09/01/23",
      invoicesPeriod: "08/01/23",
      subtotal: "Subtotal",
      status: "success",
      to: "",
    },
  ];
  return (
    <div className={styles.tableContainer}>
      {" "}
      <table className={styles.table}>
        <tbody>
          <tr className={styles.row}>
            <th className={[styles.heading].join(" ")}>MY Services</th>
            <th className={[styles.heading].join(" ")}>Invoice Date</th>

            <th className={[styles.heading].join(" ")}>Invoice Period </th>
            <th className={[styles.heading].join(" ")}>Subtotal</th>
            <th className={[styles.heading].join(" ")}>STATUS</th>
            <th className={[styles.heading, styles.searchWrapper].join(" ")}>
              <div className={styles.searchIconContainer}>
                <FiSearch className={styles.searchIcon} />
              </div>
            </th>
          </tr>
          {invoicesData.map((el, i) => (
            <tr className={styles.row} key={i}>
              <td className={[styles.item, styles.firstItem].join(" ")}>
                <div className={styles.iconAndNameId}>
                  <div className={styles.imageContainer}>
                    <BiLogoVisa className={styles.img} />
                  </div>
                  <div className={styles.nameAndTagline}>
                    <p className={styles.serviceName}>{el.serviceName}</p>
                    <p className={styles.id}>#Build-{el.id}</p>
                  </div>
                </div>
              </td>
              <td className={[styles.item].join(" ")}>{el.invoiceDate}</td>

              <td className={[styles.item].join(" ")}>{el.invoicesPeriod} </td>
              <td className={[styles.item].join(" ")}>{el.subtotal}</td>
              <td className={[styles.item].join(" ")}>
                <p className={styles.statusContainer}>
                  <span className={styles.status}>{el.status}</span>
                </p>
              </td>
              <td className={[styles.item].join(" ")}>
                <div className={styles.exportIconContainer}>
                  <BiDownload className={styles.exportIcon} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Invoices;

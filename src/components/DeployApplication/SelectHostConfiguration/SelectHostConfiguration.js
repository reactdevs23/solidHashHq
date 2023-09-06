import React, { useState } from "react";
import StepWrapper from "../StepWrapper/StepWrapper";
import styles from "./SelectHostConfiguration.module.css";
import CheckBox from "./Checkbox/Checkbox";

const SelectHostConfiguration = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setSelected] = useState(0);
  const hostConfigurationData = [
    {
      price: {
        amount: "$14",
        currency: "USD",
        period: "Monthly",
      },
      ram: {
        space: "1gb",
        type: "(ddr 4)",
      },
      cpu: {
        core: "1",
        series: "core i7",
      },
      disk: {
        space: "40gb",
        type: "ssd",
      },
    },
    {
      price: {
        amount: "$21",
        currency: "USD",
        period: "Monthly",
      },
      ram: {
        space: "2gb",
        type: "(ddr 4)",
      },
      cpu: {
        core: "2",
        series: "core i7",
      },
      disk: {
        space: "50gb",
        type: "ssd",
      },
    },
    {
      price: {
        amount: "$49",
        currency: "USD",
        period: "Monthly",
      },
      ram: {
        space: "5gb",
        type: "(ddr 4)",
      },
      cpu: {
        core: "3",
        series: "core i7",
      },
      disk: {
        space: "60gb",
        type: "ssd",
      },
    },
    {
      price: {
        amount: "$94",
        currency: "USD",
        period: "Monthly",
      },
      ram: {
        space: "10gb",
        type: "(ddr 4)",
      },
      cpu: {
        core: "6",
        series: "core i7",
      },
      disk: {
        space: "1.5tb",
        type: "ssd",
      },
    },
  ];
  const handleSelection = (id) => {
    if (selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <StepWrapper
      heading="Step 5 : Select Host Configuration"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className={styles.titleAndTagline}>
        <p className={styles.title}>Select host:</p>
        <p className={styles.tagline}>
          Environment Variables added to the Team can be used by all, or a
          subset of, your Projects.
        </p>
      </div>
      <div className={styles.tableContainer}>
        {" "}
        <table className={styles.table}>
          <tbody>
            <tr className={styles.row}>
              <th
                className={[styles.heading, styles.firstHeading].join(" ")}
              ></th>
              <th className={[styles.heading].join(" ")}>Price</th>
              <th className={[styles.heading].join(" ")}>RAM</th>
              <th className={[styles.heading].join(" ")}>CPU</th>
              <th className={[styles.heading, styles.lastHeading].join(" ")}>
                DISK
              </th>
            </tr>
            {hostConfigurationData.map((el, i) => (
              <tr
                key={i}
                className={[
                  styles.row,
                  selected === i && styles.selectedHosting,
                ].join(" ")}
                onClick={() => setSelected(i)}
              >
                <td className={[styles.firstItemContainer].join(" ")}>
                  <div className={[styles.item, styles.firstItem].join(" ")}>
                    <CheckBox
                      id={i}
                      checked={selected === i}
                      handleClick={handleSelection}
                      setChecked={setSelected}
                    />
                  </div>
                </td>
                <td className={[styles.itemContainer].join(" ")}>
                  <p className={[styles.item].join(" ")}>
                    {el.price.amount}
                    <span className={styles.currency}>
                      {el.price.currency}
                    </span>{" "}
                    <span className={styles.subItem}>({el.price.period})</span>
                  </p>
                </td>
                <td className={[styles.itemContainer].join(" ")}>
                  <p className={styles.item}>
                    {el.ram.space}{" "}
                    <span className={styles.subItem}>({el.ram.type})</span>
                  </p>
                </td>
                <td className={[styles.itemContainer].join(" ")}>
                  <p className={styles.item}>
                    {el.cpu.core}
                    <span className={styles.subItem}>({el.cpu.series})</span>
                  </p>
                </td>
                <td className={[styles.itemContainer].join(" ")}>
                  <p className={[styles.item, styles.lastItem].join(" ")}>
                    {el.disk.space}{" "}
                    <span className={styles.subItem}>({el.disk.type})</span>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StepWrapper>
  );
};

export default SelectHostConfiguration;

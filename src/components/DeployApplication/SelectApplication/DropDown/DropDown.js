import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./DropDown.module.css";

const DropDown = ({ showDropdown, setShowDropDown, label, data }) => {
  const [activeItem, setActiveItem] = useState(data[0]);
  return (
    <div className={styles.labelAndwrapper}>
      <p>
        {" "}
        <label className={styles.label}>{label}</label>
      </p>
      <div
        className={styles.dropdown}
        onClick={() => {
          if (showDropdown) {
            setShowDropDown(false);
          } else {
            setShowDropDown(true);
          }
        }}
      >
        <div className={styles.nameAndIcon}>
          <div className={styles.iconContainer}>
            <img
              src={activeItem.icon}
              alt="#"
              className={[styles.icon].join(" ")}
            />
          </div>
          <p className={[styles.name].join(" ")}>
            {activeItem.name}{" "}
            <span className={styles.released}>{activeItem?.released}</span>
          </p>
        </div>
        <div className={styles.arrowContainer}>
          {showDropdown ? (
            <IoIosArrowUp className={[styles.arrow].join(" ")} />
          ) : (
            <IoIosArrowDown className={[styles.arrow].join(" ")} />
          )}
        </div>

        {showDropdown && (
          <div className={styles.dropdownContainer}>
            {data.map((el, i) => (
              <div
                key={i}
                className={styles.dropdownItem}
                onClick={() => {
                  setActiveItem(el);

                  setShowDropDown(false);
                }}
              >
                <div className={styles.iconContainer}>
                  <img
                    src={el.icon}
                    alt="#"
                    className={[styles.icon].join(" ")}
                  />
                </div>
                <p className={[styles.name].join(" ")}>
                  {el.name}{" "}
                  <span className={styles.released}>
                    {activeItem?.released}
                  </span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GoCreditCard } from "react-icons/go";
import { SlLock } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RxHome } from "react-icons/rx";
import { copyIcon, paymentCard } from "../../../../images/images";
import styles from "./PaymentMethod.module.css";

const PaymentMethod = () => {
  const [copyCardNumber, setCopyCardNumber] = useState(false);
  const [copyEmail, setCopyEmail] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.heading}>Payment Method </h4>

        <div className={styles.settingsContainer}>
          <FiSettings className={styles.settingsIcon} />
        </div>
      </div>
      <div className={styles.cardContainer}>
        {" "}
        <img src={paymentCard} alt="#" className={styles.cardImg} />
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <AiOutlineUser className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>Card Holder</p>
            <p className={styles.details}>Civa Kumar</p>
          </div>
        </div>{" "}
        <div className={styles.row}>
          <div className={styles.iconTitleAndDetails}>
            <div className={styles.iconContainer}>
              <GoCreditCard className={styles.icon} />
            </div>
            <div className={styles.titleAndDetails}>
              <p className={styles.title}>Card Number</p>
              <p className={styles.details}>1234 0293 9831 9090</p>
            </div>
          </div>
          <CopyToClipboard text="1234 0293 9831 9090">
            <p
              className={[
                styles.copyIconContainer,
                copyCardNumber && styles.copied,
              ].join(" ")}
              onClick={() => {
                setCopyCardNumber(true);
                setTimeout(() => setCopyCardNumber(false), 300);
              }}
            >
              <img src={copyIcon} alt="#" className={styles.copyIcon} />
            </p>
          </CopyToClipboard>
        </div>
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <SlLock className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>CVC/CVV</p>
            <p className={styles.details}>151</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <LuCalendarDays className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>Expired Date</p>
            <p className={styles.details}>December 2022</p>
          </div>
        </div>{" "}
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <MdOutlineMailOutline className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>Email</p>
            <p className={styles.details}>laurastuff@mail.com</p>
          </div>{" "}
          <CopyToClipboard text="laurastuff@mail.com">
            <p
              className={[
                styles.copyIconContainer,
                copyEmail && styles.copied,
              ].join(" ")}
              onClick={() => {
                setCopyEmail(true);
                setTimeout(() => setCopyEmail(false), 300);
              }}
            >
              <img src={copyIcon} alt="#" className={styles.copyIcon} />
            </p>
          </CopyToClipboard>
        </div>
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <RxHome className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>Address</p>
            <p className={styles.details}>1833 Bel Meadow Drive, Fontana ...</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.iconContainer}>
            <LuCalendarDays className={styles.icon} />
          </div>
          <div className={styles.titleAndDetails}>
            <p className={styles.title}>Created</p>
            <p className={styles.details}>12 December 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

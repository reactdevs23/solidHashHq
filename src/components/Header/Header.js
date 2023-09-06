import React, { useEffect, useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { logo } from "../../images/images";
import Switch from "./Switch/Switch";
import Sidebar from "./Sidebar/Sidebar";
import NotificationContainer from "./NotificationContainer/NotificationContainer";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  useEffect(() => {
    if (showNotification) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showNotification]);
  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.logoAndSwitch}>
            <Link to="/" className={styles.logoContainer}>
              <img src={logo} alt="#" className={styles.logo} />
              <p className={styles.logoText}>SolidBulider</p>
            </Link>
            <div className={styles.mobileSwitch}>
              <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>

          <div className={styles.switchAndInfoContainer}>
            <div className={styles.dekstopSwitch}>
              <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div className={styles.infoContainer}>
              {showNotification && (
                <NotificationContainer
                  setShowNotification={setShowNotification}
                />
              )}{" "}
              <div
                className={[
                  styles.iconContainer,
                  showNotification && styles.activeNotification,
                ].join(" ")}
                onClick={() => setShowNotification((prev) => !prev)}
              >
                <IoMdNotificationsOutline className={styles.notificationIcon} />
              </div>
              <div className={styles.userContainer}>
                <div className={styles.arrowContainer}>
                  <BiChevronDown
                    className={styles.arrow}
                    onClick={() => setDropDown((prev) => !prev)}
                  />
                </div>
                <div className={styles.userNameAndWallet}>
                  <p className={styles.userName}>Civa Kumar</p>
                  <p className={styles.wallet}>Wallet: $342.35</p>
                </div>

                <div className={styles.userProfile}>
                  <h4 className={styles.user}>H</h4>
                </div>

                {dropDown && (
                  <div className={styles.dropDown}>
                    <button
                      className={styles.logoutButton}
                      onClick={() => setDropDown((prev) => !prev)}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
              {sidebar ? (
                <MdOutlineClose
                  className={styles.hamburger}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              ) : (
                <AiOutlineAlignRight
                  className={styles.hamburger}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {showNotification && <div className={styles.overlay}></div>}
    </>
  );
};

export default Header;

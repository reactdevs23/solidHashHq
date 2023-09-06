import React, { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { BsWallet } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";
import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  const [showAllProjectsNavs, setShowAllProjectsNavs] = useState(true);
  const allProjects = [
    { navItem: "SolidHashHQ", to: "/SolidHashHQ" },
    { navItem: "CryptoCiva", to: "/CryptoCiva" },
    { navItem: "CanadaAir", to: "/CanadaAir" },
    { navItem: "HeptonNode", to: "/HeptonNode" },
  ];
  const managingNav = [
    { navItem: "CanadaAir", to: "/CanadaAir" },
    { navItem: "HeptonNode", to: "/HeptonNode" },
    { navItem: "SolidHashHQ", to: "/" },
    { navItem: "CryptoCiva", to: "/CryptoCiva" },
  ];
  const navItems = [
    {
      icon: <BsWallet className={styles.navIcon} />,
      navItem: "Billing ",
      to: "/billing",
    },
    {
      icon: <FaRegComment className={styles.navIcon} />,
      navItem: "Support",
      to: "/Support",
    },
    {
      icon: <FiSettings className={styles.navIcon} />,
      navItem: "Settings",
      to: "/Settings",
    },
    {
      icon: <FiSettings className={styles.navIcon} />,
      navItem: "APIs",
      to: "/APIs",
    },
  ];

  return (
    <section
      className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}
    >
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div
            className={[
              styles.navHeader,
              showAllProjectsNavs && styles.activeNavHeader,
            ].join(" ")}
            onClick={() => setShowAllProjectsNavs(true)}
          >
            <div className={styles.navHeadingAndIcon}>
              <TfiWorld className={styles.navIcon} />
              <h5 className={styles.navHeading}>All Projects</h5>
            </div>
            {showAllProjectsNavs ? (
              <BiSolidChevronUp className={styles.arrow} />
            ) : (
              <BiSolidChevronDown className={styles.arrow} />
            )}
          </div>
          {showAllProjectsNavs && (
            <div className={styles.navItemsWrapper}>
              {allProjects.map((el, i) => (
                <NavLink
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? [styles.navItem, styles.myNav, styles.navActive].join(
                          " "
                        )
                      : [styles.navItem, styles.myNav].join(" ")
                  }
                  onClick={() => setSidebar((prev) => !prev)}
                >
                  <span>{el.navItem}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <div className={styles.navWrapper}>
          <div
            className={[
              styles.navHeader,
              !showAllProjectsNavs && styles.activeNavHeader,
            ].join(" ")}
            onClick={() => setShowAllProjectsNavs(false)}
          >
            <div className={styles.navHeadingAndIcon}>
              <FiSettings className={styles.navIcon} />
              <h5 className={styles.navHeading}>Managing</h5>
            </div>
            {!showAllProjectsNavs ? (
              <BiSolidChevronUp className={styles.arrow} />
            ) : (
              <BiSolidChevronDown className={styles.arrow} />
            )}
          </div>
          {!showAllProjectsNavs && (
            <div className={styles.navItemsWrapper}>
              {managingNav.map((el, i) => (
                <NavLink
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive
                      ? [styles.navItem, styles.myNav, styles.navActive].join(
                          " "
                        )
                      : [styles.navItem, styles.myNav].join(" ")
                  }
                  onClick={() => setSidebar((prev) => !prev)}
                >
                  <span>{el.navItem}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.navItems}>
        {navItems.map((el, i) => (
          <NavLink
            to={el.to}
            key={i}
            className={({ isActive }) =>
              isActive
                ? [styles.navItem, styles.navActive].join(" ")
                : styles.navItem
            }
            onClick={() => setSidebar((prev) => !prev)}
          >
            {el.icon}
            <span>{el.navItem}</span>
          </NavLink>
        ))}
      </div>

      <button className={styles.logoutButton}>
        {" "}
        <FiLogOut className={styles.logoutIcon} /> Log Out
      </button>
    </section>
  );
};

export default Sidebar;

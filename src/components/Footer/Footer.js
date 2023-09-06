import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ loginFooter }) => {
  const footerItems = [
    { item: "Status", to: "#" },
    { item: "Terms", to: "#" },
    { item: "Privacy", to: "#" },
    { item: "Blog", to: "#" },
    { item: "Contact sales ", to: "#" },
  ];
  const loginFooterItems = [
    { item: "Terms", to: "#" },
    { item: "Privacy", to: "#" },
    { item: "Blog", to: "#" },
  ];
  const items = () => {
    if (loginFooter) {
      return loginFooterItems;
    } else {
      return footerItems;
    }
  };

  return (
    <div
      className={[!loginFooter && "mainContainer", styles.container].join(" ")}
    >
      <div
        className={[!loginFooter && "mainWrapper", styles.footerWrapper].join(
          " "
        )}
      >
        <div
          className={[styles.footer, loginFooter && styles.loginFooter].join(
            " "
          )}
        >
          <p className={styles.text}>
            {loginFooter
              ? "©2023 - SolidBulider LLC."
              : "©2023  -  SolidHashHQ LLC."}
          </p>
          <div className={styles.footerItems}>
            {items().map((el, i) => (
              <a
                href={el.to}
                target="_blank"
                key={i}
                rel="noreferrer"
                className={[styles.text, styles.footerItem].join(" ")}
              >
                {el.item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

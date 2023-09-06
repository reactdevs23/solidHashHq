import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import styles from "./Switch.module.css";

const Switch = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => setDarkMode((prev) => !prev)}
        className={[!darkMode && styles.active, styles.iconContainer].join(" ")}
      >
        <BiSun className={styles.icon} />
      </div>
      <div
        onClick={() => setDarkMode((prev) => !prev)}
        className={[darkMode && styles.active, styles.iconContainer].join(" ")}
      >
        <BiMoon className={styles.icon} />
      </div>
    </div>
  );
};

export default Switch;
// import React from "react";
// import { BiSun } from "react-icons/bi";
// import styles from "./Switch.module.css";

// const Switch = ({ darkMode, handleSwitch }) => {
//   return (
//     <div className={styles.wrapper}>
//       <input
//         checked={darkMode}
//         onChange={handleSwitch}
//         className={styles.switchCheckbox}
//         id={`switch`}
//         type="checkbox"
//       />
//       <label
//         style={{ background: darkMode ? "#B1B1B1" : "#B1B1B1" }}
//         className={styles.switchLabel}
//         htmlFor={`switch`}
//       >
//         {/* <span className={styles.switchButton} /> */}
//         <div className={styles.lighMode}>
//           <BiSun className={styles.icon} />
//         </div>
//       </label>{" "}
//       <label className={styles.text}>{darkMode ? "Dark" : "Light"}</label>
//     </div>
//   );
// };

// export default Switch;

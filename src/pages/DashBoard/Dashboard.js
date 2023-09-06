import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./Dashboard.module.css";
import Project from "../../components/Dashboard/Project";
import {
  myWebBuild,
  circleBuilding,
  solidHashing,
  helloWorldTest,
  artenthusiast,
} from "../../images/images";

const Dashboard = () => {
  const projects = [
    {
      img: myWebBuild,
      name: "MyWebBuild",
      id: "#Build-2467",

      ipAddress: "   128.987.244  <span >: 8080</span>",
      status: ["shared", "ready", "free"],
      connect: "",
      monitor: "",
    },
    {
      img: circleBuilding,
      name: "Circle-Building",
      id: "#Build-27667",
      ipAddress: "156.256.854  <span >:2086</span>",
      status: ["shared", "ready", "free"],
      connect: "",
      monitor: "",
    },
    {
      img: solidHashing,
      name: "SolidHashing",
      id: "#Build-684",
      ipAddress: "438.255.002  <span >:8080</span>",
      status: ["shared", "ready", "free"],
      connect: "",
      monitor: "",
    },
    {
      img: helloWorldTest,
      name: "HelloWorldTest",
      id: "#Build-6284",
      ipAddress: "120.769.439 <span >:8080</span>",
      status: ["shared", "ready", "free"],
      connect: "",
      monitor: "",
    },
    {
      img: artenthusiast,
      name: "Artenthusiast",
      id: "#FreeSpace",
      ipAddress: "868.244.244  <span >:4080</span>",
      status: ["shared", "ready", "free"],
      connect: "",
      monitor: "",
    },
  ];

  return (
    <div className={["mainContainer", styles.container].join(" ")}>
      <div className={["mainWrapper", styles.dashBoard].join(" ")}>
        <div className={styles.tableContainer}>
          {" "}
          <div className={styles.table}>
            <div className={styles.row}>
              <p className={styles.heading}>MY Services</p>{" "}
              <p className={styles.heading}>IP ADDRESS</p>{" "}
              <p className={styles.heading}>STATUS</p>{" "}
              <div className={styles.searchAndBuildWebsite}>
                <div className={styles.searchIconContainer}>
                  <FiSearch className={styles.searchIcon} />
                </div>
                <div className={styles.buildWebsite}>
                  <AiOutlinePlus className={styles.plusIcon} />
                  <p className={styles.buildWebsiteText}>Build Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {projects.map((el, i) => (
          <Project {...el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

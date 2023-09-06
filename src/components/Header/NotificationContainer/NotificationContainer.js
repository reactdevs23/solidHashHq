import React from "react";
import { MdClose } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./NotificationContainer.module.css";
import "./Notificaion.css";
import { btc, invoice, paymentReceived } from "../../../images/images";

const NotificationContainer = ({ setShowNotification }) => {
  const notifications = [
    {
      icon: invoice,
      title: "<span className='required highlight'>New Invoice Sent</span>",
      details:
        " You have sent a new invoice of <span  class='greenHighlight'>$4,567.00</span> to <span class='blackHiglight'>Biffco Enterprises</span>",
      time: "5 mins ago",
    },
    {
      icon: paymentReceived,
      title: "Payment Received",
      details:
        " Received a new payment <span  class='blueHighlight'>$100</span> from <span class='hightlight'>Alesia Alexandra</span>",
      time: "18 hour ago",
    },
    {
      icon: btc,
      title: "You can pay with BTC!!You can pay with BTC!!",
      details: "Massa, vel donec tempor at quisque eget sapien. Ut sit orc",
      time: "Yesterday",
    },
    {
      icon: invoice,
      title: "<span className='required highlight'>New Invoice Sent</span>",
      details:
        " You have sent a new invoice of <span  class='greenHighlight'>$4,567.00</span> to <span class='blackHiglight'>Biffco Enterprises</span>",
      time: "5 mins ago",
    },
    {
      icon: paymentReceived,
      title: "Payment Received",
      details:
        " Received a new payment <span  class='blueHighlight'>$100</span> from <span class='hightlight'>Alesia Alexandra</span>",
      time: "18 hour ago",
    },
    {
      icon: btc,
      title: "You can pay with BTC!!You can pay with BTC!!",
      details: "Massa, vel donec tempor at quisque eget sapien. Ut sit orc",
      time: "Yesterday",
    },
  ];
  return (
    <div className={styles.notificationContainer}>
      <div className={styles.header}>
        <h4 className={styles.heading}>Notifications</h4>

        <AiOutlineCloseCircle
          className={styles.closeIcon}
          onClick={() => setShowNotification(false)}
        />
      </div>
      <div className={styles.notificationWrapper}>
        <div className={styles.notifications}>
          {notifications.map((el, i) => (
            <div className={styles.row} key={i}>
              <div className={styles.iconContainer}>
                <img src={el.icon} alt="#" className={styles.closeIcon} />
              </div>
              <div className={styles.titleAndDetails}>
                <p
                  className={[styles.title, styles.required].join(" ")}
                  dangerouslySetInnerHTML={{ __html: el.title }}
                ></p>
                <p
                  className={styles.details}
                  dangerouslySetInnerHTML={{ __html: el.details }}
                ></p>
                <p className={styles.time}>5 mins ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationContainer;

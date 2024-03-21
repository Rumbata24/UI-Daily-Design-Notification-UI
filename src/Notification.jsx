import { useState } from "react";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import notification from "./assets/notification.png";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <section className="component-wrapper">
      <div className="notification " onClick={toggleDropdown}>
        <img src={notification} alt="" />
      </div>
      <div className={`notification-dropdown ${isVisible ? "toggle" : ""}`}>
        <div className="top">
          <h1>Notifications</h1>
          <p>Mark all as read</p>
        </div>
        <div className="card">
          <img src={avatar1} alt="" />
          <div className="card-text">
            <p className="description">
              <strong>Paul Waga</strong> shared the file{" "}
              <strong>Android UI Kit</strong> with you.
            </p>
            <p className="active">an hour ago</p>

            <div className="card-btn">
              <button className="decline-btn">Decline</button>
              <button className="accept-btn">Accept</button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={avatar2} alt="" />
          <div className="card-text">
            <p className="description">
              <strong>Denise Selover</strong> made you an editor in the team{" "}
              <strong>Power</strong>.
            </p>
            <p className="active">Yesterday</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;

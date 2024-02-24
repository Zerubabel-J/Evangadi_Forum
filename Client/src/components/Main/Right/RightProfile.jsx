import React from "react";
import { FaUserCircle, FaBell, FaCog } from "react-icons/fa";
import classes from "./rightProfile.module.css";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

const RightProfile = () => {
  return (
    <div className={classes.profileContainer}>
      <h4>User Profile</h4>
      <div className={classes.profileContent}>
        <div className={classes.profileItem}>
          <FaCog className="icon" />
          <FaUserCircle className="icon" />

          <div>Notification Settings:</div>
          <input type="checkbox" />
          <span>Get notified</span>
        </div>

        <div>
          <FaUserCircle className="icon" />
        </div>
        <button className={classes.profileUpdate}>
          Update profile <FaPersonArrowUpFromLine />
        </button>
      </div>
    </div>
  );
};

export default RightProfile;

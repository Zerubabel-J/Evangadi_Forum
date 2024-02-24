import React from "react";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaQuestion } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import classes from "./leftProfile.module.css";

const LeftProfile = () => {
  return (
    <div className={classes.icons}>
      <ul className={classes.iconsList}>
        <li>
          <a href="">
            <CgProfile />
            <br />
            <small>UserName</small>
          </a>
        </li>
        <li>
          <a href="">
            <IoHome />
            <br />
            <small>Home</small>
          </a>
        </li>
        <li>
          <a href="">
            <FaQuestion />
            <br />
            <small>Ask question</small>
          </a>
        </li>
        <li>
          <a href="" style={{ position: "relative" }}>
            <IoNotifications />
            <br />
            <span className={classes.notificationBadge}>5</span>{" "}
            <span>Notification</span>
          </a>
        </li>
        <li>
          <a href="">
            <FaTags />
            <br />
            <span>Search by tag</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftProfile;

import React from "react";
import classes from "./header.module.css";
import logo from "../../assets/evangadiLogo.png";
import { CiSearch } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaTags } from "react-icons/fa";

export const Header = () => {
  return (
    <header className={classes.headerWrapper}>
      <div className={classes.logo}>
        <img src={logo} alt="Evangadi" />
      </div>
      <div className={classes.search}>
        <CiSearch />
        <input type="text" placeholder="search by tag" />
      </div>
      <div className={classes.icons}>
        <ul className={classes.iconsList}>
          <li>
            <button>
              <FaQuestion className={classes.faQuestion} />
              <small>Ask questions</small>
            </button>
          </li>
          <li>
            <a href="">
              <IoMdSettings />
            </a>
          </li>
          <li>
            <a href="">
              <AiFillMessage />
            </a>
          </li>
          <li>
            <a href="">
              <FaTags />
            </a>
          </li>
          <li>
            <a href="">
              <AiFillLike />
            </a>
          </li>
          <li>
            <a href="" style={{ position: "relative" }}>
              <IoNotifications />
              <span className={classes.notificationBadge}>5</span>{" "}
              {/* Notification number */}
            </a>
          </li>

          <li>
            <a href="">
              <CgProfile className={classes.cgProfile} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

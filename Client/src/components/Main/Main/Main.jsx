import React from "react";
import LeftProfile from "../Left/LeftProfile";
import Questions from "../Middle/Questions";
import RightProfile from "../Right/RightProfile";
import classes from "./main.module.css";

const Main = () => {
  return (
    <div>
      <div className={classes.mainSection}>
        <div className={classes.leftSection}>
          <LeftProfile />
        </div>
        <div className={classes.questionSection}>
          <Questions />
        </div>
        <div className={classes.rightSection}>
          <RightProfile />
        </div>
      </div>
    </div>
  );
};

export default Main;

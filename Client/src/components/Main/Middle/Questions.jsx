import React from "react";
// import "./question.css";
import classes from "./questions.module.css";
import { CgProfile } from "react-icons/cg";
import { SlDislike } from "react-icons/sl";

import { SlLike } from "react-icons/sl";

const Questions = () => {
  return (
    <>
      <div className={classes.post}>
        <div className={classes.postHeader}>
          <div>
            <CgProfile />
          </div>
          <div>
            <span className={classes.postUser}>user</span> <br />
            <span className={classes.postDate}>
              February 24, 2024 • 1 days ago
            </span>
          </div>
        </div>
        <div className={classes.postContent}>
          <span className={classes.postTag}>Tag: React</span>
          <h4>What is new about React 19?</h4>
        </div>
        <div className={classes.postActions}>
          <div>
            <a href="" className="post-like">
              <SlLike />
              Like: <span className={classes.postLikeCount}>0</span>
            </a>
          </div>
          <div>
            <a href="" className={classes.postDislike}>
              <SlDislike />
              <span className={classes.dislike}>Dislike: </span>
              <span className={classes.postDislikeCount}>0</span>
            </a>
          </div>
          <a href="" className="post-view-details">
            View Details
          </a>
          <a href="" className={classes.postTotalAnswers}>
            Answers: <span className="post-answers-count">0</span>
          </a>
        </div>
      </div>
      <div className={classes.post}>
        <div className={classes.postHeader}>
          <div>
            <CgProfile />
          </div>
          <div>
            <span className={classes.postUser}>user</span> <br />
            <span className={classes.postDate}>
              February 24, 2024 • 1 days ago
            </span>
          </div>
        </div>
        <div className={classes.postContent}>
          <span className={classes.postTag}>Tag: React</span>
          <h4>What is new about React 19?</h4>
        </div>
        <div className={classes.postActions}>
          <div>
            <a href="" className="post-like">
              <SlLike />
              Like: <span className={classes.postLikeCount}>0</span>
            </a>
          </div>
          <div>
            <a href="" className={classes.postDislike}>
              <SlDislike />
              <span className={classes.dislike}>Dislike: </span>
              <span className={classes.postDislikeCount}>0</span>
            </a>
          </div>
          <a href="" className="post-view-details">
            View Details
          </a>
          <a href="" className={classes.postTotalAnswers}>
            Answers: <span className="post-answers-count">0</span>
          </a>
        </div>
      </div>
      <div className={classes.post}>
        <div className={classes.postHeader}>
          <div>
            <CgProfile />
          </div>
          <div>
            <span className={classes.postUser}>user</span> <br />
            <span className={classes.postDate}>
              February 24, 2024 • 1 days ago
            </span>
          </div>
        </div>
        <div className={classes.postContent}>
          <span className={classes.postTag}>Tag: React</span>
          <h4>What is new about React 19?</h4>
        </div>
        <div className={classes.postActions}>
          <div>
            <a href="" className="post-like">
              <SlLike />
              Like: <span className={classes.postLikeCount}>0</span>
            </a>
          </div>
          <div>
            <a href="" className={classes.postDislike}>
              <SlDislike />
              <span className={classes.dislike}>Dislike: </span>
              <span className={classes.postDislikeCount}>0</span>
            </a>
          </div>
          <a href="" className="post-view-details">
            View Details
          </a>
          <a href="" className={classes.postTotalAnswers}>
            Answers: <span className="post-answers-count">0</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Questions;

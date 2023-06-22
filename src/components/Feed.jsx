import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <TweetBox />
        <Post />
      </div>
    </div>
  );
}

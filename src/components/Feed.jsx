import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (QuerySnapshot) => {
      setPosts(QuerySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <TweetBox />
        {posts.map((post) => (
          <Post
            displayNmae={post.displayNmae}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}

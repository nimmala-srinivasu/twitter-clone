import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  // const [tweetImage, setTweeetImage] = setState('')

  const sendTweet = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        displayName: "NPS",
        userName: "nps",
        verified: false,
        text: tweetMessage,
      });
    } catch (err) {
      console.log(err);
    }
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/564x/0c/f8/2c/0cf82cc12c00d79e8a5c08f953585ef7.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

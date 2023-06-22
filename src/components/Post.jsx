import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeateIcon from "@mui/icons-material/RepeatOne";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://i.pinimg.com/564x/0c/f8/2c/0cf82cc12c00d79e8a5c08f953585ef7.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              NPS{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @nps
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Post message</p>
          </div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/711dxTf0zDL._RI_.jpg"
          alt="post"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeateIcon fontSize="small" />
          <FavouriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;

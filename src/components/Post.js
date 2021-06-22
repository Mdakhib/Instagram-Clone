import React from "react";
import "../styles/post.css";
import { Avatar } from "@material-ui/core";

function Post({imageUrl,username,caption}) {
  return (
    <div className="post">
      <div className="post__header">
        {/* header -> avatar + username */}
        <Avatar
          className="post__avatar"
          alt="Akhib"
          src="/images/profiles.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>{username} </strong> {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;

import React from "react";
import "../styles/post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        {/* header -> avatar + username */}
        <Avatar
          className="post__avatar"
          alt="Akhib"
          src="/images/profile.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--50wZvNu6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png"
        alt=""
      />
      {/* image */}
      <h4 className="post__text">
        <strong>a_k_h_i_b</strong> let's build Instagram clone{" "}
      </h4>
      {/* username + caption */}
    </div>
  );
}

export default Post;

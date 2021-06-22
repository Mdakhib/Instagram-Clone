import React, { useState } from "react";

import "./App.css";
import { Post } from "./components";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "a_k_h_i_b",
      caption: "WoW it's works",
      imageUrl: "/images/mda.jpg",
    },
    {
      username: "its_yahiya_khan",
      caption: "chaleyae shuru kartae hai",
      imageUrl: "/images/yah.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

      
      {/* <Post
        username="saqlain"
        caption="kaisae hai sab log"
        imageUrl="/images/saq.jpg"
      />
      
      <Post
        username="zain"
        caption="kya mama"
        imageUrl="/images/zai.jpg" />
      <Post
        username="3_idiots"
        caption="3-bandar"
        imageUrl="/images/3idiot.jpg"
      /> */}
    </div>
  );
}

export default App;

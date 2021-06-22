import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import "./App.css";
import { Post } from "./components";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  const [open, setOpen] = useState(false);


  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    });
  },[])



  return (
    <div className="app">
      

      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <h2>I'm a Modal</h2>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>

      {posts.map(({ post, id }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
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

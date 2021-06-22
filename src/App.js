import { Button, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import "./App.css";
import { Post } from "./components";
import { db } from "./firebase";



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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
      <Modal open={open} onClose={() => setOpen(false)}>
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

      <Button>Sign Up</Button>

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

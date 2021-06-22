import React, { useState } from "react";
import "../styles/imageupload.css";
import { Button } from "@material-ui/core";
import { storage, db } from "../firebase";
import firebase from "firebase";

function ImageUpload({username}) {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
    };
    

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
          "state_changed",
          //progress function
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            //error fuction
            console.log(error);
            alert(error.message);
          },
          () => {
            //complete function...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                //post image inside db
                db.collection("posts").add({
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  caption: caption,
                  imageUrl: url,
                  username: username,
                });
                  setProgress(0);
                  setCaption('');
                  setImage(null);
              });
          }
        );
    }

  return (
    <div>
      {/* I want to have.... */}
      {/* caption input */}
      {/* file picker */}
          {/* post */}
    <progress value={progress} max='100' />
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button className="imageupload__button" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;

import React, { useState } from "react";
import "../styles/imageupload.css";
import { Button } from "@material-ui/core";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
    };
    

    const handleUpload = () => {
        
    }

  return (
    <div>
      {/* I want to have.... */}
      {/* caption input */}
      {/* file picker */}
      {/* post */}

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

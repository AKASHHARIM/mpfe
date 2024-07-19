import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";



import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { addVideos } from "../Services/allApis";
function Addvidio() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [video, setVideo] = useState({
    videoId: "",
    caption: "",
    imgUrl: "",
    videoUrl: "",
  });
  const submitform = async () => {
    console.log(video);
    const { videoId, caption, imgUrl, videoUrl } = video;
    if (!videoId || !caption || !imgUrl || !videoUrl) {
      toast.info("Enter  valid Input");
    } 
    else {

      const code=videoUrl.split("v=")[1]
      embedUrl=`https:www.youtube.com/embed/${code}?si=FImBhZozkYEPlf3o&autoplay`

      const result = await addVideos(video);
      console.log(result);
      if(result.status===201){ 
        handleClose()
        setVideo({
          videoId: "",
          caption: "",
          imgUrl: "",
          videoUrl: "",
        })    
         toast.success("Vidio Added Successfully");
      }
      else{
        console.log(result);
        toast.error("Something went wrong");
      }
    }
  };
  // console.log(video);

  return (
    <div>
      <button onClick={handleShow} className="btn ">
        <i
          className="fa-regular fa-square-plus fa-xl "
          style={{ color: "#2673f7" }}
        />
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingId"
            label="Vidio Id"
            className="mb-3"
          >
            <Form.Control
              type="text"
              onChange={(e) => setVideo({ ...video, videoId: e.target.value })}
              placeholder="Vidio Id"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingCaption" label="Caption">
            <Form.Control
              onChange={(e) => setVideo({ ...video, caption: e.target.value })}
              className="mt-3"
              type="text"
              placeholder="Caption"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingimgUrl" label="Video image URL">
            <Form.Control
              onChange={(e) => setVideo({ ...video, imgUrl: e.target.value })}
              className="mt-3"
              type="text"
              placeholder="Video image URL"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingigvideoUrl" label="Video URL">
            <Form.Control
              onChange={(e) => setVideo({ ...video, videoUrl: e.target.value })}
              className="mt-3"
              type="text"
              placeholder="Video URL"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={submitform} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addvidio;

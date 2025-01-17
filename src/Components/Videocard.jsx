import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Videocard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{
    // const dt=new Date().toLocaleString()
    // const data={videoId:video.id,videoUrl:video.videoUrl,datetime:dt}
    // const res=await addHistory(data)
    // console.log(res);
    
    
    setShow(true)};
  return (
    <div>
         <Card className='rounded shadow border' style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} style={{height: "200px", width: "285px",cursor: "pointer"}} variant="top" src="https://i.ytimg.com/vi/KDjmKFjxXt0/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>Heeriye</Card.Title>
        <Button variant="light"><i className="fa-solid fa-trash" style={{color: "#ff150f",}} /></Button>
      </Card.Body>
    </Card>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/RLzC55ai0eo?si=ZPe-gUVwiLCCtV0p&&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard
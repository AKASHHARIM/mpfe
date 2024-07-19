import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <div className='container-fluid p-5 bg-light '>
        <div>
      <Row>
        <Col className='mt-5' sm={12} md={6}>
        <h1 className='text-danger'>Media Player</h1>
        <p>Media Player is a n online platform for youtube vidio uploads and management</p>
        <Link to='/home' className='btn btn-primary'>Get Started</Link>


        </Col>

        <Col sm={12} md={6}>
<img style={{height: "400px" }} className='w-100 border rounded shadow' src="https://t3.ftcdn.net/jpg/08/01/86/72/240_F_801867238_mDAUgtsPbeBdm5QqMZHE7mqtOGPNA3VT.jpg" alt="" />        

        </Col>

      </Row>
    </div>
    <div className='mt-5 p-5'>
      <h1 className=' text-center text-dark '><b>Features</b></h1>
    </div>
    <div className='d-flex justify-content-around p-5'>
    <Card style={{ width: '18rem',height: "23rem" }}>
      <Card.Img style={{height: "200px"}} variant="top" src="https://i.pinimg.com/originals/e3/10/6b/e3106b678b0d99327062454871555a48.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem',height: "23rem" }}>
      <Card.Img style={{height: "200px"}}  variant="top" src="https://i.pinimg.com/originals/21/80/1f/21801f4aaed85514b1d0f0c1f8fea275.gif" />
      <Card.Body>
        <Card.Title>Upload Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' ,height: "23rem" }}>
      <Card.Img style={{height: "200px"}}  variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='p-5 mt-5'>
      <Row>
        <Col className='p-5' sm={12} md={7}>
        <h1 className='text-dark'>Simple and Fast</h1>
        <p style={{textAlign: "justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem veritatis harum voluptas maxime nemo culpa id iste hic, similique voluptatum aliquid enim libero incidunt fugiat dolorem dolore, amet sequi.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda beatae sunt voluptatum suscipit omnis incidunt eius architecto totam debitis. Modi non molestiae alias in quam! Quos earum explicabo quam assumenda.

        </p>
        </Col>

        <Col className='p-5' sm={12} md={5}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/tsu01TR7Ofk?si=KqJOKeQP7Jqkwz3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
      </Row>

    </div>
    </div>
    
  
  )
}

export default Landing
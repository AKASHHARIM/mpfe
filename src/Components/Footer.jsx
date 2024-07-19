import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid'>
        <Row className='bg-light'>
            <Col>
            <h4 className='text-dark'>Media Player</h4>
            <p className='text-dark' style={{textAlign: "justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptatibus nesciunt minima, vero aut asperiores laboriosam cum fugit provident deserunt, itaque omnis hic sint architecto iusto ea? Rem, dignissimos praesentium?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor corrupti quas qui impedit fugit officia, expedita ut quo optio vel rerum illum deserunt nam nesciunt fuga doloremque adipisci. Velit dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio atque aspernatur. Quam nulla fuga, harum corporis vitae facilis dolor, nostrum aut dolores, ratione sint blanditiis deleniti alias consectetur autem! lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores non molestiae assumenda saepe officiis itaque repudiandae veritatis? Id iusto fugit nostrum tenetur maiores nobis animi, ad, error, consequatur odit exercitationem!</p>
            </Col>

            <Col>
            <h4 className='text-white'>Links</h4>

            <ul style={{listStyle: "none"}} className='mt-5'>
                <li  >
                    <Link className='text-white text-decoration-none' to='/'><b>Landing</b></Link>
                </li>
                <li>
                <Link className='text-white text-decoration-none' to='/home'><b>Home</b></Link>

                </li>
                <li>
                <Link className='text-white text-decoration-none' to='/history'><b>History</b></Link>

                </li>
            </ul>
            </Col>

            <Col>
            <h4>Contact Us</h4>
            <p>mediaplayer@gmail.com</p>
            <p> 08123456789</p>
            <div>
                <textarea name=""className='form-control' id=""></textarea>
                <button className='btn btn-secondary mt-3'>Send</button>
            </div>
            </Col>
            <h4 className='text-white text-center'>Mediaplayer 2024  &copy; All right are reserved</h4>


        </Row>
    </div>
  )
}

export default Footer
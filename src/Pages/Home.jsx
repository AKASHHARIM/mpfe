import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Addvidio from '../Components/Addvidio'
import Vidiolist from '../Components/Vidiolist'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container-fluid bg-light'>
      <div className='d-flex justify-content-between'>
      <h1 className='text-primary'>All Videos</h1>
      <Link to={'/history'}  style={{height: "40px"}} className='btn btn-link'>Watch History</Link>

      </div>
      <Row>
        <Col sm={12} md={1}>
        <Addvidio/>
        </Col>
        <Col sm={12} md={8}>
        <Vidiolist/>
        </Col>
        <Col sm={12} md={3}>
        <Category/>
        </Col>

      </Row>

    </div>
  )
}

export default Home
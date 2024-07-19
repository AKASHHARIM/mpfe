import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div> <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand href="#home">
        <Link className='text-decoration-none' to={'/'}>
        <i className="fa-solid fa-photo-film fa-bounce"  style={{color: "#fcfcfc",}} />{''}
      <span className=''>Media Player</span>
</Link>
     </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header
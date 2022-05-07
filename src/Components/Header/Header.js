import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {FaFacebook , FaInstagram, FaWhatsapp} from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return (
    <div>
        <Navbar className='nav'  fixed='top' >
    <Container fluid>
    {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
    <Nav className="ms-auto" > </Nav>
      <Nav.Link href='https://www.facebook.com/profile.php?id=100075713184173' ><FaFacebook/></Nav.Link>
      <Nav.Link href=' https://www.instagram.com/invites/contact/?i=47yfmt8z04ya&utm_content=nyx3xmx'><FaInstagram/></Nav.Link>
      <Nav.Link href='https://wa.me/919380359418'><FaWhatsapp/></Nav.Link>
   
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
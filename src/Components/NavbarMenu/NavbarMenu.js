import React  from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container,NavDropdown,Nav} from 'react-bootstrap'
import './Navbar.css'

const NavbarMenu = () => {
    
  return (
    <div className='navstyle'>
         <Navbar collapseOnSelect expand="lg" className='navbarMenu' fixed='top'>
  <Container fluid>
    <Navbar.Brand href="#"><img src='images/logo.jpg' alt='logo' style={{height:'60px', width:'80px' , marginLeft:'5rem'}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
        className="ms-auto mx-5 py-4 px-3"
      >
        <Nav.Link  as={Link} to="/"  eventKey={2}  >Home</Nav.Link>
        <Nav.Link   href="#about"   >About</Nav.Link>
        <NavDropdown title="Services" id="collasible-nav-dropdown">
          <NavDropdown.Item  href="#design" >Design</NavDropdown.Item>
          <NavDropdown.Item  href="#design" >Development</NavDropdown.Item>
          <NavDropdown.Item  href="#design" >
            Marketing
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#tech" >
          Our Products
        </Nav.Link>
        <Nav.Link  href="#package" >
          Package
        </Nav.Link>
        <Nav.Link  href="#contact" >
          Contact
        </Nav.Link>
      </Nav>
      {/* //<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button> 
  </Form> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu
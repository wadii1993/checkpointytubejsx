import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {BsCameraVideoFill} from 'react-icons/bs';
import "bootstrap/dist/css/bootstrap.min.css";
import { icons } from 'react-icons';
import { FiSearch } from 'react-icons/fi';
const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img id="logoyt" src="https://www.citypng.com/public/uploads/preview/-51609511815r9dtoccpsi.png" alt="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav id="navcont"
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2"><BsCameraVideoFill/></Nav.Link>
          
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success"><FiSearch/></Button>
        </Form>
        <NavDropdown title="Link" id="navbarScrollingDropdown"  style={{marginLeft:"20px"}}>
            <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4" >
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default NavBar;
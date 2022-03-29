import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './Layout.scss';

function NavBar() {
  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Container fluid className="justify-content-between">
        <div className="d-flex">
          <Link to="/">
            <Navbar.Brand>Devto</Navbar.Brand>
          </Link>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text
              id="basic-addon1"
              style={{ cursor: 'pointer' }}
              onClick={() => alert('hello')}
            >
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/signin">
                <Button variant="outline-primary" className="me-2">
                  Sign In
                </Button>
              </Link>
              <Link to="/create-account">
                <Button variant="outline-primary">Create Account</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

function LayoutWChildren({ children }) {
  return (
    <div className="Layout-container bg-custom">
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
      <footer
        className="d-flex border border-1 justify-content-center"
        style={{ height: '250px' }}
      >
        footer
      </footer>
    </div>
  );
}

export default LayoutWChildren;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" >
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
              <Button variant="outline-primary" className="me-2">
                Sign In
              </Button>
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

function Layout() {
  return (
    <div className="Layout-container">
      <NavBar>Header</NavBar>
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
    </div>
  );
}

export default Layout;

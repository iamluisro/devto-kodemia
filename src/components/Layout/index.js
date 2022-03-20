import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid className='justify-content-between'>
        <div className='d-flex'>
          <Navbar.Brand href='#'>Devto</Navbar.Brand>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='Search...'
              aria-label='Search'
              aria-describedby='basic-addon1'
            />
            <InputGroup.Text
              id='basic-addon1'
              style={{ cursor: 'pointer' }}
              onClick={() => alert('hello')}
            >
              <i class='bi bi-search'></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Button variant='outline-primary' className='me-2'>
                Sign In
              </Button>
              <Button variant='outline-primary'>Create Account</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

function Layout({ children }) {
  return (
    <div className='Layout-container'>
      <NavBar>Header</NavBar>
      <Container>
        <main>{children}</main>
      </Container>
      <footer className='d-flex border border-1 justify-content-center' style={{ height: '250px'}}>footer</footer>
    </div>
  );
}

export default Layout;

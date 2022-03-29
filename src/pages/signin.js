import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useApp } from '../context/AppContext';
function Signin() {
  const { setContextUser } = useApp();
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function submitForm(e) {
    e.preventDefault();
    try {
      const resp = await fetch('http://localhost:8080/api/writers/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
      if (resp.success) {
        setContextUser(resp.data)
        navigate(`/writers/${resp?.data?.username}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container className="mw-75 my-5" style={{ maxWidth: '550px' }}>
      <div className="d-flex-inline mb-4 text-center">
        <h2 className="font-weight-bold">Welcome to DEV Community</h2>
        <p>DEV Community is a community of 833,242 amazing developers</p>
      </div>
      <Form onSubmit={submitForm} className="d-flex flex-column">
        <Form.Group
          className="mb-3 d-flex flex-column align-items-start"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column align-items-start"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!user.email || !user.password}
        >
          Signin
        </Button>
      </Form>
    </Container>
  );
}

export default Signin;

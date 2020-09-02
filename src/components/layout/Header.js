import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect bg="dark" fixed="top" variant="dark" expand="md">
        <Navbar.Brand as={Link} to="/">KUPI[test]</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Letáky</Nav.Link>
            <Nav.Link as={Link} to="/sales">Akce</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Co hledáte?" className="mr-sm-2" />
            <Button variant="outline-light">Vyhledej</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ShoppingList from '../layout/ShoppingList';
import HomepageContent from '../layout/HomepageContent';

function Homepage() {
  return (
    <Container>
      <Row>
        <Col sm={8}><HomepageContent /> </Col>
        <Col sm={4}><ShoppingList /></Col>
      </Row>
    </Container>
  );
}

export default Homepage;
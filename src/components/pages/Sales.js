import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ShoppingList from '../layout/ShoppingList';
import SalesContent from '../layout/SalesContent';

function Sales() {
  return (
    <Container>
      <Row>
        <Col sm={8}><SalesContent /> </Col>
        <Col sm={4}><ShoppingList /></Col>
      </Row>
    </Container>
  );
}

export default Sales;
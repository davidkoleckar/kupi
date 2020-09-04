import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ShoppingList from '../layout/ShoppingList';
import LeafletContent from '../layout/LeafletContent';


function Leaflet() {
  return (
    <Container>
      <Row>
        <Col sm={8}><LeafletContent /></Col>
        <Col sm={4}><ShoppingList /></Col>
      </Row>
    </Container>
  );
}

export default Leaflet;
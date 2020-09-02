import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

function ShoppingList() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Nákupní košík</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ShoppingList;
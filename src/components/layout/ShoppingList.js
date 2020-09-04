import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Notes from './Notes.js';

function ShoppingList() {
  return (
    <Card>
      <Card.Body className="text-center">
        <Card.Title>Nákupní seznam</Card.Title>
        <h6>Přihlásit se na Kupi.cz</h6>
        <Button variant="success" size="sm" className='btn-block'>Přihlásit se</Button>
      </Card.Body>
      <Card.Body>
        <Notes />
      </Card.Body>
    </Card>
  );
}

export default ShoppingList;
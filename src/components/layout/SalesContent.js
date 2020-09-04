import React from 'react';
import SalesData from '../../data/discouts.json';
import {Card,Button, Table} from 'react-bootstrap';

function SalesContent() {
  return (
    <div>
      {SalesData.map((data, index) => (
        <div key={index}>
          <Card>
            <Card.Header>
              <h5>
                {data.name}
              </h5>
            </Card.Header>
          </Card>
          <Table hover size="lm">
            <tbody>
              {data.discounts.map((discount, i) => (
                <tr key={i} className='d-flex'>
                  <td className='col-4'>{discount.shopName}</td>
                  <td className='col-6'>
                    cena <strong>{discount.price}</strong> / {discount.amount} <br />
                    <em className='green-text'>{discount.validity}</em>
                  </td>
                  <td className='col-2'><Button variant="primary" size="sm">Přidat</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
      ))}
    </div>
  );
}

export default SalesContent;
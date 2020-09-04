import React from 'react';
import HomepageData from '../../data/hp.json';
import {Card,CardGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function HomepageContent() {
  return (
    <div>
      {HomepageData.map((data, index) => (
        <div key={index} className='mb-4'>
          <h3>{data.name}</h3>
          <CardGroup>
            {data.leaflets.map((leaflet, i) => (
              <Link to={"/letak/" + leaflet.slug} key={leaflet.slug} >
                <Card className='leaflet-card ml-2' key={i}>
                  <Card.Img variant="top" alt={leaflet.slug} src={leaflet.img} />
                  <Card.Body>
                    <Card.Text>{leaflet.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </CardGroup>
        </div>
      ))}
    </div>
  );
}

export default HomepageContent;
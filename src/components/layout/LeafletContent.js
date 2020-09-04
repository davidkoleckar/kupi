import React from 'react';
import LeafletData from '../../data/leaflet.json';


function LeafletContent() {
  return (
    <div>
      <h3>{LeafletData.name}</h3>
      {LeafletData.pages.map((page, i) => {
        return (<img key={i} src={page} className='leaflet-image' alt='leaflet'/>)
      })}
    </div>
  );
}

export default LeafletContent;
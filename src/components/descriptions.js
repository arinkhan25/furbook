import React from 'react';
import './css/descriptions.css';

function Descriptions() {
  return(
    <div className = 'container-fluid Descriptions'>
      <div className = 'row'>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Cats</h5>
          <p className = 'sub-text'>
            Cats have been domesticated (tamed) for nearly 10,000 years. They are one of the most popular pets in the world.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Dogs</h5>
          <p className = 'sub-text'>
            Dogs are man's best friend. Although dogs look very different from people, they share many of our body’s characteristics.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Friends</h5>
          <p className = 'sub-text'>s
           Cats and dogs are commonly seen as rivals but they can easily get along, and even be the bestest friends! </p>
         </div>
      </div>
    </div>
  );
}


export default Descriptions;
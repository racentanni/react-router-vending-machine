// src/components/Candy.js
// src/Candy.js
import React from 'react';
import candyImage from './images/candy.jpg';

const Candy = () => {
  return (
    <div>
      <h1>Candy</h1>
      <img src={candyImage} alt="Candy" />
      <p>Enjoy your sweet candy!</p>
    </div>
  );
};

export default Candy;
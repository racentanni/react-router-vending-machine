// src/components/Soda.js
// src/Soda.js
import React from 'react';
import sodaImage from './images/soda.jpg';

const Soda = () => {
  return (
    <div>
      <h1>Soda</h1>
      <img src={sodaImage} alt="Soda" />
      <p>Enjoy your refreshing soda!</p>
    </div>
  );
};

export default Soda;
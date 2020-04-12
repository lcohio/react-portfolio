import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div id="success-container">
      <p id="success-message">thanks for your submission.</p>
      <Link id="success-return" to="/connect">return</Link>
    </div>
  )
}

export default Success
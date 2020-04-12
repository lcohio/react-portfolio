import React from 'react';
const techData = require('../tech.json');

const Tech = () => {
  return (
    <div id="tech-grid-container">
      {techData.map(tech =>
        <div key={tech.id} className="tech-grid-item">
          <img className="tech-img" src={require(`../images/${tech.target}`)} alt="tech" />
          <p className="tech-desc">{tech.desc}</p>
        </div>
      )}
    </div>
  )
}

export default Tech
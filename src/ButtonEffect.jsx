// ButtonEffect.jsx
import React from 'react';
import './ButtonEffect.css';

function ButtonEffect({ text = 'PLAY' }) {
  return (
    <button>
      {text}
      <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
      </div>
      <span id="rightArrow" className="arrow"></span>
      <span id="leftArrow" className="arrow"></span>
    </button>
  );
}

export default ButtonEffect;


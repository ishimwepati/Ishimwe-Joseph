import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Import CSS file

const Preloader = () => {
  const [text, setText] = useState('');
  const word = 'ISHIMWE';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index <= word.length) {
        setText(word.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300); // Adjust the interval duration (in milliseconds) to control the typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      <div className="preloader-animation">
        {text}
      </div>
    </div>
  );
};

export default Preloader;

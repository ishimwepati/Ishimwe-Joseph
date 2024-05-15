import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Import CSS file

const Preloader = () => {
  const [text, setText] = useState('');
  const [blinking, setBlinking] = useState(false);
  const word = 'ISHIMWE';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index <= word.length) {
        setText(word.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setBlinking(true); // Activate blinking after loading
          setTimeout(() => {
            setBlinking(false); // Deactivate blinking after two blinks
          }, 1000);
        }, 1000); // Adjust the delay before blinking starts
      }
    }, 400); // Adjust the interval duration (in milliseconds) to control the typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      <div className={`preloader-animation ${blinking ? 'blinking' : ''}`}>
        {text}
      </div>
    </div>
  );
};

export default Preloader;

import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Import CSS file

const Preloader = () => {
  const [letters, setLetters] = useState([]);
  const word = 'ISHIMWE';

  useEffect(() => {
    const writeTimeout = setTimeout(() => {
      setLetters(word.split(''));
    }, 500); // Adjust the delay before writing the letters

    return () => clearTimeout(writeTimeout);
  }, []);

  return (
    <div className="preloader-container">
      <svg className="preloader-animation" viewBox={`0 0 ${word.length * 60} 100`}>
        {letters.map((letter, index) => (
          <Symbol key={index} index={index} letter={letter} />
        ))}
      </svg>
    </div>
  );
};

const Symbol = ({ index, letter }) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const fillTimeout = setTimeout(() => {
      setIsFilled(true);
    }, 2000); // Adjust the delay before filling the letters

    return () => clearTimeout(fillTimeout);
  }, []);

  return (
    <>
      <text x={index * 60 + 30} y={60} textAnchor="middle" fontSize="50" fill="#FFF">
        {letter}
      </text>
      <rect
        x={index * 60} // Adjust the position of the rectangle relative to the letter
        y={15} // Adjust the position of the rectangle vertically
        width=""
        height="70"
        fill={isFilled ? "#333" : "transparent"}
        className={isFilled ? "fill-animation" : ""}
      />
    </>
  );
};

export default Preloader;

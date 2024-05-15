import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import home from './components/home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after some time
    },2000); // Simulating a 2-second delay
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        // Render your app content here once loading is complete
        <div className="app-content">
          Welcome home
          {/* Your app content goes here */}
        </div>
      )}
    </div>
  );
};

export default App;

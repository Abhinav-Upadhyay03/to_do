import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className= {isLoading ? 'load-page' : 'body-page'}>
      {isLoading ? <Loading /> : <Title />}

    </div>
  );
}

export default App;

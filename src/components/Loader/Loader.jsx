import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="inner"></div>
        <div className="inner"></div>
        <div className="inner"></div>
      </div>
      <div className="loader-text">GYM<span>PRO</span></div>
    </div>
  );
};

export default Loader;

import React from 'react';

const HeroPage = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
  };

  return (
    <div style={heroStyle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeroPage;

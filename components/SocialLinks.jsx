import React, { useEffect } from 'react';
import Rellax from 'rellax';

const SocialLinks = () => {
  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      speed: -2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    return () => {
      rellax.destroy();
    };
  }, []);

  const linkStyle = {
    display: 'inline-block',
    margin: '0 10px',
    width: '15px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    lineHeight: '50px',
    fontSize: '24px',
    color: '#555'
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <div className="rellax" style={{ ...linkStyle, transform: 'translateY(50px)' }} data-rellax-speed="0.5">
        <a href="https://www.linkedin.com/in/cdasmkt">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="rellax" style={{ ...linkStyle, transform: 'translateY(50px)' }} data-rellax-speed="2">
        <a href="https://github.com/cdaprod">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className="rellax" style={{ ...linkStyle, transform: 'translateY(50px)' }} data-rellax-speed="1">
        <a href="https://twitter.com/cdasmktcda">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

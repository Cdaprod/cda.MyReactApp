import React from 'react';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #fff;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1;
  textShadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;



const ResponsiveCards = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <img src={card.image} alt={card.title} />
          <ul>
            {card.technologies.map((tech, techIndex) => (
              <li key={techIndex}>{tech}</li>
            ))}
          </ul>
          <a href={card.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveCards;

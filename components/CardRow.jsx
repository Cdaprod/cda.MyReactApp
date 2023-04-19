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
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ResponsiveCards = ({ cards }) => {
  return (
    <CardGrid>
      <CardRow>
        {cards.map((card, index) => (
          <Card key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </Card>
        ))}
      </CardRow>
    </CardGrid>
  );
};


export default ResponsiveCards;

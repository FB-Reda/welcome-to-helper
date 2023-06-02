// App.tsx
import React from "react";
import styled from "styled-components";
import { CardPile } from "./components/CardPile"; // adjust the path as needed

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  // Placeholder card data
  const piles = [
    [
      { number: 7, image: "./assets/pool.png" },
      { number: 9, image: "construction site" },
    ],
    [
      { number: 5, image: "BIS" },
      { number: 8, image: "./assets/fence.png" },
    ],
    [
      { number: 3, image: "parks" },
      { number: 4, image: "real estate" },
    ],
  ];

  return (
    <CardContainer>
      {piles.map((pile, index) => (
        <CardPile key={index} pile={pile} />
      ))}
    </CardContainer>
  );
};

export default App;

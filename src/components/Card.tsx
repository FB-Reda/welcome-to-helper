// Card.tsx
import React from "react";
import styled from "styled-components";

interface CardProps {
  number: number;
  image: string;
  isFlipped: boolean;
}

const CardContainer = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div<{ isFlipped: boolean }>`
  height: 150px;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
  transition: transform 0.8s;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

const CardFace = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden; /* Safari */
  background-color: #dbd4b4;
  border: 1px solid;
  border-radius: 10px;
  color: black;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const CardFront = styled(CardFace)``;

const CardBack = styled(CardFace)`
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  transform: rotateY(180deg);
`;

export const Card: React.FC<CardProps> = ({ number, image, isFlipped }) => (
  <CardContainer>
    <CardInner isFlipped={isFlipped}>
      <CardFront>{number}</CardFront>
      <CardBack image={image} />
    </CardInner>
  </CardContainer>
);

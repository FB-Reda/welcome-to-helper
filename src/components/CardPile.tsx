import React, { useState } from "react";
import { Card } from "./Card"; // adjust the path as needed

interface CardData {
  number: number;
  image: string;
}

interface CardPileProps {
  pile: CardData[];
}

/**
 *
 * @param param0
 * @returns
 */
export const CardPile: React.FC<CardPileProps> = ({ pile }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = () => {
    if (flippedIndex !== null) {
      setFlippedIndex(flippedIndex - 1);
    } else {
      setFlippedIndex(pile.length - 1);
    }
  };

  return (
    <div>
      {pile.map((card, index) => (
        <Card
          key={index}
          number={card.number}
          image={card.image}
          isFlipped={index === flippedIndex}
        />
      ))}
      <button onClick={handleFlip}>Flip card</button>
    </div>
  );
};

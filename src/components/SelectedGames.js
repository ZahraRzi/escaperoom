import React, { useState } from "react";
import Card from "./Card";

export default function SelectedGames() {
  const [games, setGames] = useState([
    { name: "13 night", detail: "mammd", selected: false },
    { name: "kabus", detail: "zahra", selected: false },
    { name: "13 night", detail: "mammd", selected: false },
    { name: "13 night", detail: "mammd", selected: false },
    { name: "13 night", detail: "mammd", selected: false },
    { name: "13 night", detail: "mammd", selected: false },
  ]);

  const handleClick = (
      
  ) => {
    setGames(
      games.map((game, i) => {
        if (i === index) {
          return {
            ...game,
            selected: !game.selected,
          };
        }
        return game;
      })
    );
  };

  return (
    <div>
      {games.map((game, i) => (
        <Card
          backGroundColor={game.selected ? "danger" : "primary"}
          hasBorder
          hasShadow
          key={i}
          onClick={() => handleClick(i)}
        >
          <p>{game.name}</p>
          <p>{game.detail}</p>
        </Card>
      ))}
    </div>
  );
}

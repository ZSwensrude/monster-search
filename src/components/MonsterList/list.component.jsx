import React from "react";
import Card from "../MonsterCard/card.component";

import './list.styles.css';

export const CardList = ({ monsters }) => (
  <div className="cardlist">
  {monsters.map(monster => (
    <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
  
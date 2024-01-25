import React from "react";
import { Card } from '../MonsterCard/card.component'

import './list.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className="cardlist">
      {monsters.map(monster => {
        <Card key={monster.id} monster={monster} />
      })}
    </div>
  );
};

export default CardList;
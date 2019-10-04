import React from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = props => {
  return (
    <div className="card-list">
      {props.robots.map(robot => (
        <Card key={robot.id} robot={robot}></Card>
      ))}
    </div>
  );
};

export default CardList;

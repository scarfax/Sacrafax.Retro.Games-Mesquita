import React, { useState } from 'react';
import { Button } from './Button';
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="listContainer">
      <p>{greeting} </p>
    </div>
  );
};

export default ItemListContainer;

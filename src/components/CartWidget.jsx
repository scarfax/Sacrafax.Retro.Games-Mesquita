import React from 'react';
import { GrCart } from 'react-icons/gr';
import '../styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className="card">
      <GrCart size={20} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;

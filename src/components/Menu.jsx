import React, { useState } from 'react';
import './Menu.css';

//assets
import Ensalada from '../assets/Ensalada.jpeg';
import Pasta from '../assets/pasta.jpeg';
import Pizza from '../assets/pizza.jpeg';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { name: 'Pizza Margarita', price: '$12', image: Pizza, description: 'Deliciosa pizza con salsa de tomate, mozzarella y albahaca fresca.' },
    { name: 'Ensalada César', price: '$8', image: Ensalada, description: 'Ensalada fresca con lechuga romana, crutones, queso parmesano y aderezo César.' },
    { name: 'Pasta Carbonara', price: '$15', image: Pasta, description: 'Pasta con salsa carbonara hecha con panceta, huevo y queso parmesano.' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="menu">
      <h2>Menú</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="menu-item" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <span className="menu-name">{item.name}</span>
              <span className="menu-price">{item.price}</span>
            </div>
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div className="item-card">
          <div className="item-card-content">
            <img src={selectedItem.image} alt={selectedItem.name} className="item-card-image" />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <span className="item-card-price">{selectedItem.price}</span>
            <button onClick={handleClose} className="close-button">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;



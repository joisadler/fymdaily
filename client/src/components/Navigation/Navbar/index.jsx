import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavButton from '../NavButton';
import buttonsData from './buttons-data';

const Navbar = () => {
  const itemsType = useSelector(state => state.customPage.itemsType);
  const itemType = itemsType.slice(0, itemsType.length - 1);
  buttonsData['/custom'][0].to = `/create-custom-${itemType}`;
  buttonsData['/custom'][0].labelText = `Create custom ${itemType}`;

  const Buttons = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return buttonsData[currentPath]
      .map(b => (
        <NavButton
          to={b.to}
          labelText={b.labelText}
          icon={b.icon}
          key={b.key}
        />
      ));
  };

  return (
    <nav className="main-navbar">
      <Buttons />
    </nav>
  );
};

export default Navbar;

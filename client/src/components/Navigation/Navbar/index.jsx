import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton';
import buttonsData from './buttons-data';

const Navbar = () => {
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

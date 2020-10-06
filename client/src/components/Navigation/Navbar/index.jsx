import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from '../NavButton';

const defaultButtonsData = [
  { to: '/eaten-food', icon: ['fas', 'list'], key: 1 },
  { to: '/add-eaten-food', icon: ['fas', 'utensils'], key: 2 },
  { to: '/home', icon: ['fas', 'home'], key: 3 },
];

const buttonsData = {
  '/account-settings': defaultButtonsData,
  '/preferences': defaultButtonsData,
  '/statistics': defaultButtonsData,
  '/user-settings': defaultButtonsData,
  '/home': [
    { to: '/eaten-food', icon: ['fas', 'list'], key: 1 },
    { to: '/add-eaten-food', icon: ['fas', 'utensils'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
  ],
  '/add-eaten-food': [
    // { to: '/create-custom-food', icon: ['fas', 'folder-plus'], key: 1 },
    { to: '/custom-foods', icon: ['fas', 'folder-open'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },

  ],
  '/eaten-food': [
    { to: '/add-eaten-food', icon: ['fas', 'utensils'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },
  ],
  '/custom-foods': [
    { to: '/create-custom-food', icon: ['fas', 'folder-plus'], key: 1 },
    { to: '/home', icon: ['fas', 'home'], key: 2 },
    { to: '/menu', icon: ['fas', 'cog'], key: 3 },

  ],
};

const Navbar = () => {
  const Buttons = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return buttonsData[currentPath]
      .map(b => <NavButton to={b.to} icon={b.icon} key={b.key} />);
  };

  return (
    <nav className="main-navbar">
      <Buttons />
    </nav>
  );
};

export default Navbar;

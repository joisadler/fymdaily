function showMenu() {
  return {
    type: 'SHOW_MENU',
  };
}

function hideMenu() {
  return {
    type: 'HIDE_MENU',
  };
}

function toggleMenu() {
  return {
    type: 'TOGGLE_MENU',
  };
}

export default {
  showMenu,
  hideMenu,
  toggleMenu,
};

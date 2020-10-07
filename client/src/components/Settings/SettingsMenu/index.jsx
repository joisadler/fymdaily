import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import menuActions from '../../../actions/SettingsMenuActions';
import { logout } from '../../../actions/UserActions';
import Footer from '../../Footer';

const SettingsMenu = () => {
  const isShown = useSelector(state => state.settingsMenu.isShown);
  const user = useSelector(state => state.user.loggedInUser);
  const { username } = user;
  const dispatch = useDispatch();
  const history = useHistory();

  const hideMenu = () => {
    dispatch(menuActions.hideMenu());
  };

  const onLogOut = () => {
    hideMenu();
    dispatch(logout());
    history.push('/');
  };

  return (
    <aside
      className={`settings-menu ${isShown ? 'settings-menu-shown' : ''}`}
    >
      <header className="settings-menu-header">
        <h2 className="settings-menu-title">{username}</h2>
        <button
          className="settings-menu-logout-button"
          type="button"
          onClick={onLogOut}
          aria-label="Log out"
        />
      </header>
      <nav className="settings-menu-nav">
        <NavLink
          className="settings-menu-nav-link"
          to="/user-settings"
          onClick={hideMenu}
        >
          User Settings
        </NavLink>
        <NavLink
          className="settings-menu-nav-link"
          to="/account-settings"
          onClick={hideMenu}
        >
          Account Settings
        </NavLink>
        <NavLink
          className="settings-menu-nav-link"
          to="/preferences"
          onClick={hideMenu}
        >
          Preferences
        </NavLink>
        <NavLink
          className="settings-menu-nav-link"
          to="/statistics"
          onClick={hideMenu}
        >
          Statistics
        </NavLink>
      </nav>
      <Footer />
    </aside>
  );
};

export default SettingsMenu;

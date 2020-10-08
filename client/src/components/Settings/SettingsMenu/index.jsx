import React from 'react';
import { CSSTransition } from 'react-transition-group';
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
    <>
      <CSSTransition
        in={isShown}
        timeout={{
          enter: 0,
          exit: 300,
        }}
        classNames="settings-menu"
        unmountOnExit
      >
        <aside
          className="settings-menu"
        >
          <header className="settings-menu-header">
            <h2 className="settings-menu-title">{username}</h2>
            <button
              className="settings-menu-logout-button"
              type="button"
              onClick={onLogOut}
              title="Log Out"
              aria-label="Log Out"
              tabIndex={0}
            />
          </header>
          <nav className="settings-menu-nav">
            <NavLink
              className="settings-menu-nav-link"
              to="/user-settings"
              onClick={hideMenu}
              tabIndex={0}
            >
              User Settings
            </NavLink>
            <NavLink
              className="settings-menu-nav-link"
              to="/account-settings"
              onClick={hideMenu}
              tabIndex={0}
            >
              Account Settings
            </NavLink>
            <NavLink
              className="settings-menu-nav-link"
              to="/preferences"
              onClick={hideMenu}
              tabIndex={0}
            >
              Preferences
            </NavLink>
            <NavLink
              className="settings-menu-nav-link"
              to="/statistics"
              onClick={hideMenu}
              tabIndex={0}
            >
              Statistics
            </NavLink>
          </nav>
          <Footer />
        </aside>
      </CSSTransition>
    </>
  );
};

export default SettingsMenu;

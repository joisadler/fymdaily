import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import EntryPage from './components/Entry/EntryPage';
import HomePage from './components/Home/HomePage';
import UserSettingsPage from './components/Settings/UserSettingsPage';
import EatenFoodPage from './components/EatenFood/EatenFoodPage';
import AddEatenFoodPage from './components/AddEatenFood/AddEatenFoodPage';
import CustomFoodPage from './components/CustomFood/CustomFoodPage';
import AccountSettingsPage from './components/Settings/AccountSettingsPage';
import PreferencesPage from './components/Settings/PreferencesPage';
import StatisticsPage from './components/Settings/StatisticsPage';
import SettingsMenu from './components/Settings/SettingsMenu';
import './styles/global.scss';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="App">
      { (currentPath !== '/') && <SettingsMenu />}
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/eaten-food" component={EatenFoodPage} />
        <Route path="/add-eaten-food" component={AddEatenFoodPage} />
        <Route path="/custom-foods" component={CustomFoodPage} />
        <Route path="/user-settings" component={UserSettingsPage} />
        <Route path="/account-settings" component={AccountSettingsPage} />
        <Route path="/preferences" component={PreferencesPage} />
        <Route path="/statistics" component={StatisticsPage} />
      </Switch>
    </div>
  );
}

export default App;

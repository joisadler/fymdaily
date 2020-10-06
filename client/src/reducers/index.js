import { combineReducers } from 'redux';
import SystemReducer from './SystemReducer';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';
import HistoryReducer from './HistoryReducer';
import SettingsMenuReducer from './SettingsMenuReducer';
import FoodReducer from './FoodReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer,
  message: MessageReducer,
  history: HistoryReducer,
  settingsMenu: SettingsMenuReducer,
  food: FoodReducer,
});

export default rootReducer;

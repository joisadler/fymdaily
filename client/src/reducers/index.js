import { combineReducers } from 'redux';
import SystemReducer from './SystemReducer';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';
import HistoryReducer from './HistoryReducer';
import SettingsMenuReducer from './SettingsMenuReducer';
import FoodReducer from './FoodReducer';
import CustomPageReducer from './CustomPageReducer';
import RecipeReducer from './RecipeReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
  user: UserReducer,
  message: MessageReducer,
  history: HistoryReducer,
  settingsMenu: SettingsMenuReducer,
  food: FoodReducer,
  customPage: CustomPageReducer,
  recipe: RecipeReducer,
});

export default rootReducer;

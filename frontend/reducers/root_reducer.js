import {combineReducers} from 'redux';

import entitieReducer from './entities_reducer';
import session from './session_reducer';

export default combineReducers({
  entities: entitieReducer,
  // session
});

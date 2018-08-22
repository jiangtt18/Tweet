import {combineReducers} from 'redux';

import entitieReducer from './entities_reducer';
import session from './session_reducer';
import sessionError from './session_error_reducer';

export default combineReducers({
  entities: entitieReducer,
  session,
  sessionError
});

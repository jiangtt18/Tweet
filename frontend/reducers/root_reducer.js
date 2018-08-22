import {combineReducers} from 'redux';

import entitieReducer from './entities_reducer';
import session from './session_reducer';
import sessionError from './session_error_reducer';
import modal from './modal_reducer';

export default combineReducers({
  entities: entitieReducer,
  session,
  sessionError,
  modal
});

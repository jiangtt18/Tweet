import merge from 'lodash/merge';

import{
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session';


const _nullState = {
  currentUser:null
};

export default (state = _nullState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.user});
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};

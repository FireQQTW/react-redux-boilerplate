import { handleActions } from 'redux-actions'

const initialState = [];

export default handleActions({
  'get fake': {
    next(state, action) {
      return [action.payload, ...state];
    }
  }
}, initialState);

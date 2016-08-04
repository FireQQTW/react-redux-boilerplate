import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import fakes from './fakes';

export default combineReducers({
  routing,
  fakes
})

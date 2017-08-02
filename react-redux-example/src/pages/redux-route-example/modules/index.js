/*import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer
})*/

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'

export default combineReducers({
  routing: routerReducer,
  counter
})
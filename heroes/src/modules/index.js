import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import heroes from './heroes.reducer'

export default combineReducers({
  routing: routerReducer,
  heroes: heroes.heroes,
  selected: heroes.selected,
  value: heroes.filterValue 
})
import { combineReducers } from 'redux';
import categoriesState from '../pages/p3routing/categories/categoriesReducer';
import appState from './appReducer';

export default combineReducers({
  categoriesState,
  appState,
})

import { combineReducers } from 'redux';
import modal from './modal_reducer';
import filters from './filters_reducer';

export default combineReducers({
  modal,
  filters
});
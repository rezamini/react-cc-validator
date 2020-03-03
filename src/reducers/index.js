import { combineReducers } from 'redux';
import validatorReducer from './validatorReducer';

const allReducers = combineReducers({
  validatorReducer,
});

export default allReducers;

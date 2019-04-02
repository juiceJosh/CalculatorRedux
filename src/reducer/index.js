import { combineReducers } from 'redux';
import OpsReducer from './OpsReducer';


export  default combineReducers ({
    operation: OpsReducer,
}); 

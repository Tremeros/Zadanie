import { combineReducers } from "redux";
import {recordsReducer} from './records';


export const reducers = combineReducers({
    records: recordsReducer
   
});
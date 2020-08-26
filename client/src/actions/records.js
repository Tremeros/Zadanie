import axios from 'axios';
import {GET_RECORDS, ERROR} from './types';

export const getRecords = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000');
        dispatch({
            type: GET_RECORDS,
            payload: res.data
        })
    } catch (err) {

        dispatch({
            type: ERROR,
            payload: [{msg: 'Fail to load records'}]
          });
    }
}

export const addRecord = (record) => async dispatch => {
    try {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
    
          const body = JSON.stringify(record);
    
          const res = await axios.post('http://localhost:5000', body, config);

          dispatch({type: GET_RECORDS, payload: res.data})
    } catch (err) {
        console.log(err.response.data.errors)
        dispatch({
            type: ERROR,
            payload: err.response.data.errors
          });
    }
}

export const deleteRecord = (id) => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:5000/${id}`);
        dispatch({type: GET_RECORDS, payload: res.data})
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: [{msg: 'Fail to delete records'}]
          });
    }
}
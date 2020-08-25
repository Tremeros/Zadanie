import {GET_RECORDS, ERROR} from '../actions/types';

const initialState = {
    records: [],
    loading: true,
    error: null
}

export const recordsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_RECORDS:
            return {...state, records: payload, loading: false};
        case ERROR:
            return {
                ...state,
                error: payload,
                loading: false               
              }
              default:
                  return state;
    }
}
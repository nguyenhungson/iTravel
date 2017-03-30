console.log(">> Map Reducer");

import * as types from '../actions/ActionType';

const initialState = {
    sum: 0
}

export default function mainreducer(state = initialState, action = {}) {
    switch (action.type) {
	    case types.CAL_SUM:
	    	return {
	    		... state,
	    		sum: action.value
	    	}
        case types.INIT:
	    	return initialState;
    }

    return state;
}
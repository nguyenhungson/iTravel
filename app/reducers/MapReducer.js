console.log(">> Map Reducer");

import * as types from '../actions/ActionType';

const initialState = {
    sum: 0,
	curPos: {
		latitude: 10.7725795,
		longitude: 106.6980277,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	}
}

export default function mainreducer(state = initialState, action = {}) {
    switch (action.type) {
	    case types.CAL_SUM:
	    	return {
	    		... state,
	    		sum: action.value
	    	}
		case types.GET_CURRENT_POSITION:
			return {
				... state,
				curPos: {
					latitude: action.lat,
					longitude: action.long,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}
			}
        case types.INIT:
	    	return initialState;
    }

    return state;
}
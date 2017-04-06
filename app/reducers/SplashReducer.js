import * as types from '../actions/ActionType';

const initialState = {
    checkLogin: null
}

export default function mainreducer(state = initialState, action = {}) {
    switch (action.type) {
	    case types.CHECK_LOGIN:
	    	return {
	    		... state,
	    		checkLogin: checkLogin(action)
	    	}
        case types.INIT_SPLASH:
	    	return initialState;
    }

    return state;
}

function checkLogin(action){
	var result = {};
	result['returnCode'] = 0;

	if(action.accessToken != null && action.refreshToken != null){
		result['accessToken'] = action.accessToken;
		result['refreshToken'] = action.refreshToken;
		result['returnCode'] = 1;
	}

	return result;
}
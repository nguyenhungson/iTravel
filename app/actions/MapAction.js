console.log(">> Home Action");

import * as types from './ActionType';

export function calSum(result){
	return {
		type: types.CAL_SUM,
		value: result
	}
}

export function getCurrentPosition(lat, long){
	return {
		type: types.GET_CURRENT_POSITION,
		lat: lat,
		long: long
	}
}
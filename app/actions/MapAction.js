console.log(">> Home Action");

import * as types from './ActionType';

export function calSum(result){
	return {
		type: types.CAL_SUM,
		value: result
	}
}
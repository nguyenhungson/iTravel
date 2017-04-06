import * as types from './ActionType';

export function checkLogin(accessToken, refreshToken){
	return {
		type: types.CHECK_LOGIN,
		accessToken: accessToken,
		refreshToken: refreshToken
	}
}

export function init(){
	return {
		type: types.INIT_SPLASH
	}
}
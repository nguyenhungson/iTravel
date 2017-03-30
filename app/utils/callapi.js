import React, {Component, PropTypes} from 'react';

var Config = require('./config');

module.exports = {
    functionName : null,
    method : null,
    data : null,
    async action(respData){
        let url = Config.URLAPI + '' + this.functionName; 
		try {
			let response = await fetch(url, {
		  		method: this.method,
		  		headers: {
		    		'Accept': 'application/json',
		    		'Content-Type': 'application/json',
		  		},
		  		body: JSON.stringify(this.data)
			});

            console.log("Req Data >> " + JSON.stringify(this.data));
			let responseJson = await response.json(); 
            console.log("Resp Data >> " + JSON.stringify(responseJson));
			respData(responseJson);
		}
		catch(error){
			respData(null);
            console.log("Call API Error >> " + JSON.stringify(error));
		}
	},
    loginFacebook(FBAccessToken){
        this.functionName = "/users/facebook";
        this.method = "POST";
        this.data = {
            'access_token': FBAccessToken
        };
    },
    loginGoogle(GGAccessToken){
        this.functionName = "/users/google";
        this.method = "POST";
        this.data = {
            'access_token': GGAccessToken
        };
    }
}
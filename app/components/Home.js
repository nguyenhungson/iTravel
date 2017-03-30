/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const { LoginManager, GraphRequest, GraphRequestManager, AccessToken } = FBSDK;
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const styles = require('../utils/styles');
const CallAPI = require('../utils/callapi');

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        const { state } = this.props;
        
        return (
            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <Image resizeMode={'contain'} style={styles.imgLogo} source={require('../images/icon.png')} />
                </View>
                <TouchableOpacity style={styles.btnLoginFace} onPress={()=>this.loginFacebook()}>
                    <Text style={styles.txtLoginFace}>Login Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLoginGoogle} onPress={()=>this.loginGoogle()}>
                    <Text style={styles.txtLoginGoogle}>Login Google</Text>
                </TouchableOpacity>
            </View>
        );
    }

    loginFacebook(){
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    console.log("User is cancelled");
                } else {
                    const infoRequest = new GraphRequest('/me?fields=id,name,picture.width(200).height(200)', null, function(error, result){
                        if(error){
                            console.log("ERROR >> " + error);
                        }
                        else{
                            AccessToken.getCurrentAccessToken().then((data) => {
                                CallAPI.loginFacebook(data.accessToken.toString())
                                CallAPI.action((respData) => {
                                    
                                });
                            });
                        }
                    });
                        
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function(error) {
                alert('Login failed with error: ' + error);
            }
        );
    }

    loginGoogle(){
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
            GoogleSignin.configure({
                webClientId: "27756048205-8fhbve8jfukcfah562vsmvur4dah0d83.apps.googleusercontent.com"
            })
            .then(() => {
                GoogleSignin.signIn()
                .then((user) => {
                    CallAPI.loginGoogle(user.idToken);
                    CallAPI.action((respData) => {
                        
                    });
                })
                .catch((err) => {
                    console.log('WRONG SIGNIN' + err);
                })
                .done();
            });
        })
        .catch((err) => {
            console.log("Play services error", err.code, err.message);
        })
    }
}

module.exports = Home;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = require('../utils/styles');
const Common = require('../utils/common');
import HomeContainer from '../containers/HomeContainer';
import MapContainer from '../containers/MapContainer';

export default class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { state } = this.props;
        var _this = this;

        Common.getData("accessToken", function(accessToken){
            Common.getData("refreshToken", function(refreshToken){
                _this.props.checkLogin(accessToken, refreshToken);
            }); 
        });
    }

    componentDidUpdate(){
        this.chooseScreen();
    }

    componentWillUnmount(){
        this.props.init();
    }

    render(){
        const { state } = this.props;
        
        return (
            <View>
                <Text>Splash screen</Text>
            </View>
        );
    }

    chooseScreen(){
        const { state } = this.props;
        
        if(state.checkLogin != null){
            if(state.checkLogin.returnCode == 1){
                this.props.navigator.push({
                    name: 'MapContainer',
                    component: MapContainer,
                    passProps: {
                        accessToken: state.checkLogin.accessToken,
                        refreshToken: state.checkLogin.refreshToken
                    }
                });
            }
            else{
                this.props.navigator.push({
                    name: 'HomeContainer',
                    component: HomeContainer
                });
            }
        }
    }
}

module.exports = Splash;

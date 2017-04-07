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
  Text,
  Image
} from 'react-native';

const styles = require('../utils/styles');
var Common = require('../utils/common');

export default class MenuLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: null
        };
    }

    componentDidMount(){
        var _this = this;

        Common.getData("user", function(userInfo){
            _this.setState({
                userInfo: userInfo
            });
        }); 
    }

    render(){
        var dynamicImage;
        var name;

        if(this.state.userInfo == null){
            dynamicImage = <Image resizeMode={'contain'} style={styles.avatar} source={require('../images/no_avatar.png')} />
            name = 'No name';
        }
        else{
            var jUser = JSON.parse(this.state.userInfo);
            dynamicImage = <Image key={jUser['picture']} resizeMode={'contain'} style={styles.avatar} source={{uri: jUser['picture']}} />
            name = jUser['name'];
        }

        return (
            <View style={styles.menuleft_container}>
                <View style={styles.view_center_avatar}>
                    <View style={styles.view_avatar}>
                        {dynamicImage}
                    </View>
                </View>
                <View style={styles.view_center_avatar}>
                    <Text style={styles.name_avatar}>{name}</Text>
                </View>
            </View>
        );
    }
}

module.exports = MenuLeft;

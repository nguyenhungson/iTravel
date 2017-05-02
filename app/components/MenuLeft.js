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
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
            <ScrollView style={styles.menuleft_container}>
                <View style={styles.view_center_avatar}>
                    <View style={styles.view_avatar}>
                        {dynamicImage}
                    </View>
                </View>
                <View style={styles.view_center_avatar}>
                    <Text style={styles.name_avatar}>{name}</Text>
                </View>
                <View style={styles.menuleft_hozline}></View>
                <TouchableHighlight underlayColor={"#EDEDED"} onPress={() => {alert('aee')}}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="assessment" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Level</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={"#EDEDED"}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="build" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Equipment</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={"#EDEDED"}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="group-add" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Find friend</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={"#EDEDED"}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="edit-location" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Check in</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={"#EDEDED"}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="rate-review" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Review</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor={"#EDEDED"}>
                    <View style={styles.menuleft_menulist}>
                        <Icon name="power-settings-new" size={25} color="#747474" />
                        <Text style={styles.menuleft_menulist_text}>Logout</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

module.exports = MenuLeft;

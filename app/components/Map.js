/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

const styles = require('../utils/styles');
import MapView from 'react-native-maps';
const SideMenu = require('react-native-side-menu');
const MenuLeft = require('./MenuLeft');

export default class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        
    }

    render(){
        const { state } = this.props;
        const menu = <MenuLeft navigator={navigator}/>;
        
        return (
            <SideMenu menu={menu}>
                <View style={styles.map_container}>
                    <MapView
                        style={styles.map_view}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                </View>
            </SideMenu>
        );
    }
}

module.exports = Map;

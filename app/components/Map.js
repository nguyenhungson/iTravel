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
  DrawerLayoutAndroid,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';
const styles = require('../utils/styles');
const MenuLeft = require('./MenuLeft');

export default class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var _this = this;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                _this.props.getCurrentPosition(position.coords.latitude, position.coords.longitude);
            },
            (error) => {console.log(error)},
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
    }

    render(){
        var menuLeft = <MenuLeft />;
        var templateMap = this.renderMap();
        
        if(Platform.OS == 'android'){
            return (
                <DrawerLayoutAndroid 
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => menuLeft}
                    ref={'DRAWER_REF'}>
                    {templateMap}
                </DrawerLayoutAndroid>
            );
        }
        else{
            return null;
        }
    }

    renderMap(){
        const { state } = this.props;

        return (
            <View style={styles.map_container}>
                <MapView 
                    style={styles.map_view}
                    region={state.curPos}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: state.curPos.latitude,
                            longitude: state.curPos.longitude
                        }}
                        title="Your position"
                        description="This is your position"
                    />
                </MapView>
                <View style={styles.map_search}>
                    <Icon name="menu" size={30} onPress={() => this.openMenu()} />
                </View>
            </View>
        );
    }

    openMenu(){
        this.refs['DRAWER_REF'].openDrawer();
    }
}

module.exports = Map;

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
        const { state } = this.props;
        const menu = <MenuLeft navigator={navigator}/>;
        console.log(state.curPos);
        
        return (
            <SideMenu menu={menu}>
                <View style={styles.map_container}>
                    <MapView
                        key={0}
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
                </View>
            </SideMenu>
        );
    }
}

module.exports = Map;

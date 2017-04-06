import React, {Component, PropTypes} from 'react';
import {
    AsyncStorage
} from 'react-native';

module.exports = {
    async saveData(key, data){
        try {
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            console.log(error);
        }
    },
    async getData(key, data){
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null){
                data(value);
            }
            else{
                data(null);
            }
        } catch (error) {
            console.log(error);
            data(null);
        }
    }
}
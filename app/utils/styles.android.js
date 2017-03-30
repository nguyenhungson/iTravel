const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    btnLoginFace: {
        marginLeft: 10,
		marginRight: 10,
        marginBottom: 10,
        height: 50,
		justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B5998'
    },
    txtLoginFace:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    btnLoginGoogle: {
        marginLeft: 10,
		marginRight: 10,
        marginBottom: 50,
        marginTop: 10,
        height: 50,
		justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DF4A32'
    },
    txtLoginGoogle:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    viewLogo:{
        alignItems: 'center',
        marginBottom: 20
    },
    imgLogo:{
        width: 150
    }
});
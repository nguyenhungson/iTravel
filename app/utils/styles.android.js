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
    },
    map_container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map_view:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    view_avatar:{
        width: 72,
        height: 72,
        margin: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 35
    },
    avatar:{
        width: 70,
        height: 70,
        borderRadius: 35
    },
    view_center_avatar:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    name_avatar:{
        color: '#727f8c'
    },
    map_search:{
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 3,
        elevation: 20,
        padding: 5
    },
    menuleft_hozline:{
        height: 1,
        backgroundColor: '#E9EAEA',
        marginTop: 10
    },
    menuleft_menulist:{
        padding: 15,
        flexDirection: 'row'
    },
    menuleft_menulist_text:{
        color: '#414141',
        fontSize: 18,
        marginLeft: 20
    }
});
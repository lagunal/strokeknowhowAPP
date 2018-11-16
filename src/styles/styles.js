import {
    StyleSheet
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    fullView:{
        flex:1, 
        backgroundColor: '#f3f3f3'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: 'dimgray',
        paddingTop: 15,
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    contextMenuText: {
        height: 35,
        fontSize: 18,
    },
    menu: {
        alignItems: 'flex-end',
        top: -50,
        paddingRight: 5,
    },
    listItem: {
        height: 50,
        fontSize: 30,
    },
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#3fffff'
    },
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
    logo: {
        height: 80,
        marginBottom: 16,
        width: 80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    terms: {
        fontSize: 13,
        textAlign: 'center',
    },    
    termsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    textHyper: {
        fontSize: 13,
        color: '#000',
        textDecorationLine: 'underline'
    },    
    modules: {
        margin: 20
    },
    modulesHeader: {
        fontSize: 16,
        marginBottom: 8
    },
    module: {
        fontSize: 14,
        marginTop: 4,
        textAlign: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        /*backgroundColor: '#2980b6',*/
        /*paddingVertical: 10,*/
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    },
    container: {
        flex: 1,
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    loginText: {
        margin: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    logo: {
        flexGrow: 1, 
        /*position: 'absolute',*/
        width: '100%',
        height: 100
    },
    title: {
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    },
    text: {
        color: '#000FFD',
        margin: 20,
    },
    button: {
        margin: 5,
        backgroundColor: '#009688',
        borderRadius: 10,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    inputStyleToolkit: {
        color: 'black',
        fontSize: 17,
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        opacity: 1,
    },
    inputStyle: {
        paddingBottom: 2,
        //color: 'white',
        fontSize: 17,
        //flex: 1,
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderBottomWidth: 1,        
    },
    comboStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: 'black',
        flex: 1,
        height: 25,
        width: '100%',
        borderWidth: 0,
    },
    containerStyle: {
        marginLeft: 15,
        marginRight: 15,
        height: 55,
        flexDirection: 'column',
        alignItems: 'flex-start',
        //borderColor: 'black',
        //borderBottomWidth: 1,
    },
    EMailLogin: {
        flex:1,
        opacity: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#b30000',
        borderWidth: .5,
        height: 40,
        borderRadius: 5,
        width: '100%',
    },
    EMailRegister: {
        flex:1,
        opacity: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#b30000',
        borderWidth: .5,
        height: 40,
        borderRadius: 5,
        width: '100%',
    },
    EMailLoginDisabled: {
        flex:1,
        opacity: 0.5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fa836b',
        borderWidth: .5,
        height: 40,
        borderRadius: 3,
        width: '100%',
    },
    errorText: {
        margin: 0,
        textAlign: 'center',
        fontSize: 14,
        color: '#900',
    },
    profileImage: {
        height: 200, 
        width: null
    },
    profileImage: {
        height: 200, 
        width: null
    },
    userNameText: {
        color: '#333',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
    },    
    userDataText: {
        color: '#777',
        fontSize: 18,
        fontWeight: 'normal',
        paddingBottom: 8,
        textAlign: 'center',
    },
    userProfileText: {
        alignItems: 'center',
    },    
    profileIcon: {
        color: '#777',
        fontSize: 22,
        paddingRight: 5,
        paddingBottom: 8,
    },
    iconTextRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    }
});
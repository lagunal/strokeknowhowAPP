import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';

import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        listenOrientationChange as lor,
        removeOrientationListener as rol
       } from 'react-native-responsive-screen';

import {
  StyleSheet, View, Image, TouchableOpacity, ScrollView, 
  KeyboardAvoidingView, Text, TextInput, Picker, AsyncStorage,
  Dimensions, Linking, Platform, Modal
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import styles from '../styles/styles';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import TextFieldInput from '../components/UI/TextInputField';
import startTabs from './MainTabs'; //start tabs navigation

//import validateEmail from '../utility/validateEmail.js';
//import validatePassword from '../utility/validatePassword.js';

const apiUrl = 'https://strokeknowhow.org/api/';

const { width, height } = Dimensions.get("window");


class LoginScreen extends Component {
 
  static navigatorStyle = {
      navBarHidden: true,
  };

  constructor(props) {
      super(props);
      
      this.state = {
        //viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        //viewScreen: Dimensions.get("window").height < 600 ? "small" : "large",
        username: '', 
        name: '', 
        email: '', 
        password: '', 
        enterButtonDisabled: false,
        error: '',
        emailError: '',
        passwordError: '',
        inLogin: true,
        loading: false,
        showSpinner: false,
        videoPaused: true,
        modalVisible: false,
      }
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    
  }

  onNavigatorEvent(event) {
    console.log(event);
    switch(event.id) {
      case 'willAppear':
       break;
      case 'didAppear':
          this.setState(prevState => ({
            videoPaused: false
          }))
        break;
      case 'willDisappear':
          this.setState(prevState => ({
            videoPaused: true
          }))
        break;
      case 'didDisappear':
        break;
      case 'willCommitPreview':
        break;
    }
  }

  componentDidMount() {
   // this.autoLogin(); //performs autologin
    // this.setState(prevState => ({
    //       videoPaused: !prevState.videoPaused
    // }))
  }

  componentWillUnMount() {
      startTabs();
      // this.setState(prevState => ({
      //   videoPaused: !prevState.videoPaused
      // }))
  }

  // async autoLogin() {
  //     try {
  //       //const user = await AsyncStorage.setItem('user', '');
  //       const userData = await AsyncStorage.getItem('user');

  //       this.setState({ user: JSON.parse(userData) });
  //       //Try login
  //       if(this.state.user && this.state.user.username !=='' && this.state.user.password !=='') {
  //         this.setState({username: this.state.user.username, password: this.state.user.password});
  //         this.onEMailLogin();
  //         // this.props.navigator.push({
  //         //   screen: "StrokeApp.ProfileScreen",
  //         // });
  //         // this.props.navigator.resetTo({
  //         //   screen: 'StrokeApp.ProfileScreen', 
  //         // });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       alert(error);
  //     }
  // }

  //EMAIL LOGIN
  onEMailLogin = () => {
    
    if(this.state.enterButtonDisabled) return false;
    
    this.setState({showSpinner: true});
    this.setState({ error: '' });

    const { email, password } = this.state;

    //login
    try {
      const data = {insecure: 'cool', username: this.state.username, password: this.state.password};
      const url = `${apiUrl}user/generate_auth_cookie/?insecure=${encodeURIComponent(data.insecure)}&username=${encodeURIComponent(data.username)}&password=${encodeURIComponent(data.password)}`;
      return fetch(url)
      .then((response) => response.json())
      .then((loginRes) => {

        if(loginRes.status == 'error'){
          this.setState({ error: loginRes.error, loading: false });
        } else {
          let user = {
            id: loginRes.user.id,
            avatar: loginRes.user.avatar,
            displayname: loginRes.user.displayname,
            email: loginRes.user.email,
            username: loginRes.user.username,
            password: password,
            token: loginRes.cookie,
          }
          
          this.setUser(user);
          this.setState({videoPaused: true})
          startTabs(); 
          
        }
  
        this.setState({showSpinner: false});
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Network error, please try again', loading: false });
        this.setState({showSpinner: false});
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Network error, please try again', loading: false });
    }
  }

  //Register Screen
  onRegisterScreenButton = () => {
    this.setState({inLogin: false});
  }

  //Login Screen
  goToLogin = () => {
    this.setState({inLogin: true});
  }

  //Register Button
  onRegisterButton = () => {
    this.setState({showSpinner: true});
    this.setState({ error: '' });

    //Get token
    return fetch(apiUrl + 'get_nonce/?controller=user&method=register')
    .then((response) => response.json()) 
    .then((tokenRes) => {
      //register
      return fetch(apiUrl + 'user/register/?insecure=cool&username=' + this.state.username + '&email=' + this.state.email + '&nonce=' + tokenRes.nonce + '&display_name=' + this.state.name + '&notify=both&user_pass=' + this.state.password)
      .then((response) => response.json())
      .then((registrationReg) => {
        //console.log(registrationReg);
        if(registrationReg.status != 'ok'){
          this.setState({ error: registrationReg.error, loading: false });
        } else {
          //Get User Data to login
          return fetch(apiUrl + 'user/get_userinfo/?insecure=cool&user_id=' + registrationReg.user_id)
          .then((response) => response.json())
          .then((userReg) => {
            //console.log(userReg);
            if(userReg.status != 'ok'){
              this.setState({ error: userReg.error, loading: false });
            } else {
              this.setUser(userReg);

              this.goToLogin();
            }

            this.setState({showSpinner: false});
          })
        }

        this.setState({showSpinner: false});        
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Network error, please try again', loading: false });
        this.setState({showSpinner: false});
      });      
    })
    .catch((error) => {
      console.error(error);
      this.setState({ error: 'Network error, please try again', loading: false });
      this.setState({showSpinner: false});
    });
  }

  async setUser (userData) {
    try {
      const user = await AsyncStorage.setItem('user', JSON.stringify(userData));
      this.setState({user: userData});

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  validateEMail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(reg.test(text) === false) {
      //console.log("Email is Not Correct");
      this.setState({email:text, enterButtonDisabled:true, emailError: 'Wrong Email Format'});
      return false;
    } else {
      this.setState({email:text, enterButtonDisabled:false, emailError: ''});
      //console.log("Email is Correct");
    }
  }

  validatePassword = (text) => {
    //let reg = '[ \t]+$';
    let minLength = 4;
    let valid = true;
    let error = '';

    if(text === undefined) {
      return;
    }

    text = text.trim();

    if( text.length < minLength ) {
      valid = false;
      error = 'At least ' + minLength + ' characters';
    }

    this.setState({password:text, enterButtonDisabled:!valid, passwordError: error});
    return valid;
  }

  renderButtonOrLoading() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }

    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.username == "" || this.state.password == ""}
          style={styles.EMailLogin}
          onPress={ this.onEMailLogin } >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>LOG IN</Text>
        </TouchableOpacity>

      </View>;
  }  

  //Register Screen
  renderButtonOrRegister() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }
    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled}
          style={styles.EMailRegister}
          onPress={this.onRegisterScreenButton} >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>JOIN IN</Text>
        </TouchableOpacity>
      </View>;
  }

  //Register to wordpress
  renderButtonRegister() {
    if(this.state.loading) {
        return <Text>Wait...</Text>
    }
    return <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.email.trim() == "" || this.state.password.trim() == ""}
          style={styles.EMailRegister}
          onPress={this.onRegisterButton} >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>JOIN IN</Text>
        </TouchableOpacity>
      </View>;
  }

  render() {

    const videoStyles = StyleSheet.create({

      backgroundVideo: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: wp('100%'), 
        height: hp('100%'),
      },
      video: {
        flex: 1,
        width: wp('100%'), 
        height: hp('100%'),
      },
      scroollView: {
        flexGrow: 1, 
        width: wp('100%'), 
        height: hp('100%'), 
        // paddingHorizontal: 0, 
        // paddingVertical: 0
      },
      KeyboardAvoidingView: {
        flex: 1
      }
    });

    // if(this.state.loading) {
    //   return (
    //     <KeyboardAvoidingView behavior="padding" style={styles.container}>
    //       <View style={styles.loginContainer}>
    //         <Image resizeMode="contain" style={styles.logo} source={require('../assets/logo-header.jpg')} />
    //       </View>
    //     </KeyboardAvoidingView>
    //   );
    // }
 
      return (
        <ScrollView >
          <KeyboardAvoidingView behavior='position' style={videoStyles.KeyboardAvoidingView}>

            <Spinner visible={this.state.showSpinner} textContent={"Please wait..."} textStyle={{color: '#FFF'}} />

            <View style={videoStyles.backgroundVideo}>
              <Video
                source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/Ben_on_how_he_gets_starred_at.mp4"}}
                style={videoStyles.video}
                //style={StyleSheet.absoluteFill}
                rate={1}
                paused={this.state.videoPaused}
                volume={1}
                muted={false}
                playWhenInactive={false}
                playInBackground={false}
                resizeMode='stretch'
                //resizeMode='cover'
                repeat={true}
              />
            </View>
            
          
            <View style={{marginTop: hp('10%')}}>
              <HeadingText style={{color: 'white', fontSize: hp('4%')}}>Welcome to {`\n`} StrokeKnowHow</HeadingText>
              <MainText style={{textAlign: 'center', fontSize: hp('3%'), color: 'white'}}>We are a worldwide {`\n`}<Text style={{fontSize: hp('5%'), fontWeight: 'bold'}}>stroke community</Text> {`\n`} learning from one another</MainText>
            </View>

           
           <View style={{marginTop: hp('3%')}}>
                <View style={{height: hp('6%')}}>
                    <TextFieldInput
                      label='Username'
                      style={{height: hp('7%')}}
                      value={this.state.username}
                      onChangeText={username => this.setState({ username })}
                      autoCorrect={true}
                    />
                </View>
                <Text style={styles.errorText}>{this.state.emailError}</Text>
                
                {!this.state.inLogin &&
                  <View style={{height: hp('6%')}}>  
                    <TextFieldInput
                      label='Family name (ex. Lopez Family)'
                      style={{height: hp('7%')}}
                      value={this.state.name}
                      onChangeText={name => this.setState({ name })}
                      autoCorrect={true}
                    />
                  </View>}
                
                {!this.state.inLogin &&
                  <View style={{height: hp('2%')}}></View>}
                  
                {!this.state.inLogin &&
                  <View style={{height: hp('6%')}}>  
                    <TextFieldInput
                      label='Email Address'
                      style={{height: hp('7%')}}
                      value={this.state.email}
                      onChangeText={(email) => this.validateEMail(email)}
                      autoCorrect={true}
                    />
                  </View>}
                {!this.state.inLogin && <Text style={styles.errorText}>{this.state.emailError}</Text>}

                <View style={{height: hp('6%')}}>  
                    <TextFieldInput
                      label={this.state.inLogin ? 'Shared Family Password' : 'Shared Family Password (6+ chr)'}
                      style={{height: hp('7%')}}
                      autoCorrect={false}
                      secureTextEntry
                      value={this.state.password}
                      /*onChangeText={password => this.setState({ password })}*/
                      onChangeText={(password) => this.validatePassword(password)}
                    />
                </View>

                <Text style={styles.errorText}>{this.state.passwordError}</Text>

                <Text style={styles.errorText}>{this.state.error}</Text>

                {!this.state.inLogin &&
                  <View style={{marginTop: 0}}>
                    <Text style={[styles.terms, {color: 'white'}]}>Tip: Everyone in your family will use this password, so tell them what it is!</Text>
                  </View>}  
                  
            </View>

            {this.state.inLogin &&
            <View style={{marginTop: 0}}>
              {this.renderButtonOrLoading()}
            </View>}

            {!this.state.inLogin &&
            <View style={{marginTop: 0}}>
              {this.renderButtonRegister()}
            </View>}

            {this.state.inLogin &&
            <View style={{marginTop: 0, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
              {/* {this.renderButtonOrRegister()} */}
                <MainText style={{color: 'white'}}>Don't have an account?</MainText>
                <TouchableOpacity 
                      onPress={this.onRegisterScreenButton}>
                      <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Sign up</MainText>
                </TouchableOpacity>
            </View>}

            {this.state.inLogin && Platform.OS === 'android' ?
              <View style={{height: hp('10%')}}>
              </View>
              :
              <View style={{height: 0}}>
              </View>
            }

            {!this.state.inLogin &&
              <View style={{marginTop: 0, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                {/* {this.renderButtonOrRegister()} */}
                  <MainText style={{color: 'white'}}>Already have an account?</MainText>
                  <TouchableOpacity 
                        onPress={this.goToLogin}>
                        <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Log in</MainText>
                  </TouchableOpacity>
              </View>}

            </KeyboardAvoidingView>

        </ScrollView>
      );


  }

}



export default LoginScreen;

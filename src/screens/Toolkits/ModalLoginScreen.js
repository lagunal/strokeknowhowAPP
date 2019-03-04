import React, { Component } from 'react';
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity, 
         AsyncStorage, Image, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, 
         heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../../styles/styles';

import TextFieldInput from '../../components/UI/TextInputField';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import Button from "../../components/UI/Button";
import startTabs from '../../screens/MainTabs'; //start tabs navigation

const apiUrl = 'https://strokeknowhow.org/api/';

class ModalLogin extends Component {
   
    state = {
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
  
    }
   
   

    
    handlePressLogin = () => {
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
           // console.log(loginRes);

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
              
                this.props.setModalVisible;
                startTabs(); 
            
                // this.props.navigator.push({
                //         screen: 'StrokeApp.ToolkitHomeScreen'
                // });
              
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

    async setUser (userData) {
        try {
          const user = await AsyncStorage.setItem('user', JSON.stringify(userData));
          this.setState({user: userData});
    
          return user;
        } catch (error) {
          console.log(error);
        }
    }

    //Register Button
    handlePressRegister = () => {
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

                //this.goToLogin();
                this.startTabs;
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
              onPress={ this.handlePressLogin } >
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>LOG IN</Text>
            </TouchableOpacity>
    
          </View>;
    }  

    //Register to wordpress
    renderButtonRegister() {
        if(this.state.loading) {
            return <Text>Wait...</Text>
        }
        return <View style={[styles.buttonContainer, {marginBottom: 0}]}>
                <TouchableOpacity disabled={this.state.enterButtonDisabled || this.state.email.trim() == "" || this.state.password.trim() == ""}
                style={styles.EMailRegister}
                onPress={this.handlePressRegister} >
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>JOIN IN</Text>
                </TouchableOpacity>
        </View>;
    }    

    //Register Screen
    onRegisterScreenButton = () => {
        this.setState({inLogin: false});
    }

    //Login Screen
    goToLogin = () => {
        this.setState({inLogin: true});
    }

    render() {
        const behavior = Platform.OS === 'ios' ? 'padding' : '';
        return(
            <Modal visible={this.props.show} 
                    animationType='fade'
                    onRequestClose={this.props.setModalVisible}        
            >
               
                <View style={stylesModal.container}>
                <ScrollView>
                <KeyboardAvoidingView behavior='position'  >
                    <Spinner visible={this.state.showSpinner} textContent={"Please wait..."}  />
                    <View >
                        <Image style={{alignSelf: 'center'}} source={require('../../assets/logo60.jpg')} resizeMode='contain' ></Image>
                        <HeadingText style={{fontSize: hp('4%'), color: 'black'}}>Welcome to {`\n`} StrokeKnowHow</HeadingText>
                        <MainText style={{textAlign: 'center', fontSize: hp('3%'), color: 'black'}}>We are a worldwide {`\n`}<Text style={{fontSize: hp('5%'), fontWeight: 'bold'}}>stroke community</Text> {`\n`} learning from one another</MainText>
                    </View>
                    <View style={stylesModal.textFieldWrapper}>
                        <TextFieldInput
                            label='Username'
                            style={stylesModal.textField}
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })}
                            autoCorrect={true}
                        />
                    </View>

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

                    <View style={stylesModal.textFieldWrapper}>  
                        <TextFieldInput
                            label={'Shared Family Password'}
                            style={stylesModal.textField}
                            autoCorrect={false}
                            secureTextEntry
                            value={this.state.password}
                            //onChangeText={password => this.setState({ password })}
                            onChangeText={(password) => this.validatePassword(password)}
                        />
                    </View>
                    
                       {this.state.inLogin &&
                        <View style={{marginTop: 0}}>
                        {this.renderButtonOrLoading()}
                        </View>}
                    
                        {!this.state.inLogin &&
                        <View style={{marginTop: 0, marginBottom: 0}}>
                        {this.renderButtonRegister()}
                        </View>}

                        {this.state.inLogin &&
                        <View style={{marginTop: 0, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                        {/* {this.renderButtonOrRegister()} */}
                            <MainText style={{color: 'black'}}>Don't have an account?</MainText>
                            <TouchableOpacity 
                                onPress={this.onRegisterScreenButton}>
                                <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Sign up</MainText>
                            </TouchableOpacity>
                        </View>}

                        {!this.state.inLogin &&
                        <View style={{marginTop: 0, flex:1, flexDirection: 'row', justifyContent: 'center'}}>
                            {/* {this.renderButtonOrRegister()} */}
                            <MainText style={{color: 'black'}}>Already have an account?</MainText>
                            <TouchableOpacity 
                                    onPress={this.goToLogin}>
                                    <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Log in</MainText>
                            </TouchableOpacity>
                        </View>}

                    <View style={{marginTop: 0,  alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={this.props.setModalVisible}>
                                <MainText style={{color: '#b30000', fontWeight: 'bold'}}>Go Back</MainText>
                            </TouchableOpacity>
                    </View>
                    </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            
            </Modal>
        )
    }
}

export default ModalLogin;

const stylesModal = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: hp('2%')
        
    },
    textField: {
        height: hp('7%')
    },
    textFieldWrapper: {
        height: hp('6%'),
        marginBottom: hp('2%'),
    },
 
})
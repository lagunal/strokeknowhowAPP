import React, { Component } from 'react';

import {
  View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Text, TextInput, Linking, AsyncStorage, //CameraRoll
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import MainText from "../components/UI/MainText";
import SubHeadingText from "../components/UI/SubHeadingText";
import styles from '../styles/styles';

//import ImagePicker from 'react-native-image-picker';

const apiUrl = 'https://strokeknowhow.org/api/';

class ProfileScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {
        defaultImage: require('../assets/logo-header.jpg')
      }

      rootNavigator = this.props.navigator;
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
      if (this.state.user === null) {
          rootNavigator.resetTo({
            screen: 'StrokeApp.LoginScreen', 
          });
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  renderButtonOrLoading() {
    return <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.EMailLogin}
          onPress={ this.logOutHandler } >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{this.state.user ? 'LOGOUT' : 'LOGIN'}</Text>
        </TouchableOpacity>

      </View>
  }  

  async logOutHandler () {
 
    const user = await AsyncStorage.setItem('user', '');
    rootNavigator.resetTo({
      screen: 'StrokeApp.LoginScreen', 
    });
    
  }

  openGallery () {
    CameraRoll.getPhotos({
      first: 20,
      //assetType: 'Photos',
    })
    .then(r => {
      console.log(r)
      this.setState({ photos: r.edges })
    })
    .catch((err) => {
      console.log(err)
    });
  }

  //User info
  renderUserInfo() {
    if(this.state.user){
      return <View style={styles.userProfileText}>
        {/*avatar: loginRes.user.avatar,*/}
        <Text style={styles.userNameText}>{this.state.user.displayname}</Text>
        <View style={{height: 20}}></View>
        <View style={styles.iconTextRow}>
          <View>
            <Icon size={40} name="md-mail"  style={styles.profileIcon}/>
          </View>
          <View>
            <Text style={styles.userDataText}>{this.state.user.email}</Text>
          </View>
        </View>
        <View style={styles.iconTextRow}>
          <View>
            <Icon size={40} name="md-person" style={styles.profileIcon}/>
          </View>
          <View>
            <Text style={styles.userDataText}>{this.state.user.username}</Text>
          </View>
        </View>
        <View style={{height: 40}}></View>
      </View>
    }
  }
    
  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <View>
          {/*<TouchableOpacity onPress={() => this.openGallery()}>*/}
            <Image style={styles.profileImage} source={this.state.defaultImage} resizeMode="contain"/>
          {/*</TouchableOpacity>*/}
        </View>

        {this.renderUserInfo()}

        <View style={{height: 60}}>
          {this.renderButtonOrLoading()}
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.terms}>2018 StrokeKnowHow.org</Text>
          <Text style={styles.textHyper} onPress={ ()=> Linking.openURL('https://strokeknowhow.org') }>www.strokeknowhow.org</Text>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

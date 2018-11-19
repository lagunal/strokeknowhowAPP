import React, { Component } from 'react';

import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView, AsyncStorage
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SubHeadingText from '../../components/UI/SubHeadingText';
import MainText from "../../components/UI/MainText";
import Button from '../../components/UI/Button';
import startTabs from '../../screens/MainTabs';

class ToolkitHomeScreen extends Component {

  constructor(props) {
      super(props);
      
  }

  state = {
      user: null
  }

  async componentDidMount() {
    try {
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  handlePressEmergency = () => {
    this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }
  handlePressMedications = () => {
    this.props.navigator.push({
        screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }
  handlePressHelpNeeded = () => {
    this.props.navigator.push({
        screen: "StrokeApp.HelpNeededToolkitScreen",
    });
  }
  handlePressPhysical = () => {
    this.props.navigator.push({
        screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }
  handlePressSchedule = () => {
    this.props.navigator.push({
        screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }

  async logOutHandler () {
    const user = await AsyncStorage.setItem('user', '');
    startTabs();
  }
  
  render() {

    return (
      <View style={stylesHome.container}>
        <ScrollView >
                <TouchableOpacity onPress={this.handlePressHelpNeeded}>
                    <View style={stylesHome.item}>
                        <Icon style={stylesHome.icon} name="ios-people" size={30} md="md-people"></Icon>    
                        <MainText>
                            <SubHeadingText style={stylesHome.title}>
                                Help Needed Toolkit  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressSchedule}>
                    <View style={stylesHome.item}>
                        <Icon style={stylesHome.icon} name="md-calendar" size={30} md="md-calendar"></Icon>    
                        <MainText>
                            <SubHeadingText style={stylesHome.title}>
                                Weekly Schedule Toolkit  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressMedications}>
                    <View style={stylesHome.item}>
                        <Icon style={stylesHome.icon} name="ios-medkit" size={30} md="md-medkit"></Icon>    
                        <MainText>
                            <SubHeadingText style={stylesHome.title}>
                                Medications Toolkit  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.handlePressPhysical}>
                    <View style={stylesHome.item}>
                        <Icon style={stylesHome.icon} name="ios-bicycle" size={30} md="md-bicycle"></Icon>    
                        <MainText>
                            <SubHeadingText style={stylesHome.title}>
                                Physical Therapy Toolkit  
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.handlePressEmergency}>
                    <View style={stylesHome.item}>
                        <Icon style={stylesHome.icon} name="ios-warning" size={30} md="md-warning"></Icon>    
                        <MainText>
                            <SubHeadingText style={stylesHome.title}>
                                Emergency Information Toolkit
                            </SubHeadingText>
                        </MainText>  
                        
                    </View>
                </TouchableOpacity>
                {this.state.user && 
                    <View style={{margin: wp('2%')}}>
                        <MainText style={{fontWeight: 'bold', alignSelf: 'center'}}>USER INFORMATION</MainText>
                        <View style={stylesHome.userWrapper}>
                            <Icon size={40} name="ios-person" color={'#b30000'} style={stylesHome.Usericon}/>
                            <MainText style={{fontWeight: 'bold'}}>{this.state.user.displayname}</MainText>
                        </View>
                        <View style={stylesHome.userWrapper}>
                            <Icon size={40} name="ios-mail" color={'#b30000'} style={stylesHome.Usericon}/>
                            <MainText style={{fontWeight: 'bold'}}>{this.state.user.email}</MainText>
                        </View>
                        <Button color={'#b30000'} textColor={'white'} onPress={this.logOutHandler}>
                        Logout
                        </Button>
                    </View>
                }

        </ScrollView>            
      </View>
    );
  }
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',

  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: '#b30000',
    height: hp('15%'),
  },
  title: {
    color: 'white',
    fontSize: wp('4.5%')
  },
  icon: {
      marginHorizontal: 10,
      color: 'white',
  },
  userWrapper: {
      flexDirection: 'row',
      justifyContent: 'center'
  },
  userIcon: {
      margin: wp('1%'),
  }

});


export default ToolkitHomeScreen;
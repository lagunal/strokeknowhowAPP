import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Linking
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";
import ImageContainer from "../components/UI/ImageContainer";

const { width, height } = Dimensions.get("window");
const emergencyIcon = require('../assets/emergency-station-icon.png');
const strokeLine = require('../assets/helpline-logo.png');

class EmergencyScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    handleEmergency = () => {
      this.props.navigator.push({
        screen: "StrokeApp.EmergencyToolkitScreen",
      });
    }

    render() {
 

        return (
          <View style={styles.container}>
            <ScrollView>

                <LinkToolkitWrapper 
                  text={'Share Interactive Emergency Information Station Toolkit with family. Click toolkit.'}
                  source={emergencyIcon}
                  onPress={this.props.pressEmergency ? this.props.pressEmergency : this.handleEmergency}
                />

                <HeadingText style={{fontWeight: 'bold'}}>Don’t wait. Get help.</HeadingText>

                <MainText style={styles.bullets}>
                {`\u2022`} Call 911 or your emergency number.   
                </MainText>      

                <MainText style={styles.bullets}>
                {`\u2022`} Report possible stroke, or another emergency. 
                </MainText>    

                <MainText style={styles.bullets}>
                {`\u2022`} Answer questions in clear, short answers.
                    If you need a translator, ask immediately. 
                </MainText>    

                <MainText style={styles.bullets}>
                {`\u2022`} Do not hang up first: Wait for instructions. 
                </MainText> 
                
                <View style={{height: 30}}></View>

                <HeadingText >In Emergency</HeadingText>
                
                <Link />  

            </ScrollView>                
          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'black',
    },
    bullets: {
      marginVertical: 5,
    },
    border: {
      margin: 5,
      //backgroundColor: '#e6f2ff',
      //height: 70,
    },
    boxLink: {
      //fontSize: hp('2%'), 
      //marginHorizontal: hp('3%'),
      //fontSize: wp('3.5%'),
      //marginVertical: 0, 
      //textDecorationLine: 'underline',
      fontWeight: 'bold',
      marginVertical: 0,
      alignSelf: 'center'
    },
    boxText: {
      //fontSize: hp('2%'), 
      //marginHorizontal: height > 600 ? 15 : 0,
      //marginLeft: 0,
      //fontSize: wp('3.5%'),
      //marginVertical: 0,
      //fontWeight: 'bold',
      alignSelf: 'center', 
      fontSize: wp('4%')
    },

  });

  

export default EmergencyScreen;
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const medicationIcon = require('../assets/FotoMedication.jpg');
const medicationsImage = require('../assets/medications.png');

class MedicationsScreen extends Component {
    constructor(props) {
        super(props);
        //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }


    handleMedication = () => {
      this.props.navigator.push({
        screen: "StrokeApp.MedicationsToolkitScreen",
      });
    }

    render() {
    //   if (this.props.homeScreen === 'home') {
    //     return (
    //       <View style={styles.container}>
            
    //             <HeadingText>Organizing Medications</HeadingText>

    //             <ImageContainer source={medicationsImage} />
                
    //             <MainText>
    //                 Ruth, M. 78, uses a pill organizer and the Interactive Medication Toolkit. Ruth’s daughter, can also see the Toolkit.
    //             </MainText>

    //             <LinkToolkitWrapper 
    //               text={'Share Medication toolkit with family. Click Toolkit'}
    //               source={helpNeededIcon}
    //               onPress={this.props.pressMedication ? this.props.pressMedication : this.handleMedication}
    //             />
                         

    //       </View>           
    //     );
    // }

        return (
          <View style={styles.container}>
            <ScrollView> 
                <HeadingText>Organizing Medications</HeadingText>

                <Image source={medicationsImage} style={styles.imageDefault} />
                
                <MainText>
                    Ruth, M. 78, uses a pill organizer and the Interactive Medication Toolkit. Ruth’s daughter, can also see the Toolkit.
                </MainText>

                <LinkToolkitWrapper 
                  text={'Share Medication toolkit with family. Click Toolkit'}
                  source={medicationIcon}
                  onPress={this.props.pressMedication ? this.props.pressMedication : this.handleMedication}
                />
              
            </ScrollView>                    

          </View>           
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'black',
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center'
    },
  });

  

export default MedicationsScreen;
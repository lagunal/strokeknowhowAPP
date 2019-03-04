import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';


import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

const physicalIcon = require('../assets/FotoPhysicalTherapy.jpg');

class BloodPressureScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    handlePhysical = () => {
      this.props.navigator.push({
        screen: "StrokeApp.PhysicalToolkitScreen",
      });
    }

    render() {
 

        return (
          <View style={styles.container}>
            <ScrollView>

            <HeadingText>Blood Pressure</HeadingText>

            <MainText style={styles.bullets}>
            {`\u2022`} Systolic pressure (S), is the highest pressure during a heartbeat. 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Diastolic pressure (D), is the lowest pressure between beats.
            </MainText>
            <MainText style={styles.bullets}>   
            {`\u2022`} Normal blood pressure, less than 120 (S) and less than 80 (D).
            </MainText>
            
            <MainText style={styles.bullets}>
            {`\u2022`} Elevated between 120-129 (S) and less than 80 (D).
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} High Blood Pressure Hypertension state 1, 130-139 (S) or 80-89 (D).
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} High Blood Pressure Hypertension state 2, 140 or higher (S) or 90 or higher (S).
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Hypertension crisis, consult your doctor immediately, higher than 180 (S) and/or higher than 120 (D).
            </MainText>

            <HeadingText>Testing Blood Sugar </HeadingText>

            <MainText style={styles.bullets}>
            {`\u2022`} Blood glucose test is used for diabetes. Results are used to regulate medications, diet.  
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} When to test? Numbers to report.  
            </MainText>
            
            
            <HeadingText>Physical Therapists</HeadingText>

            <MainText style={styles.bullets}>
            {`\u2022`} How to continue physical therapy?  
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Exercises to do? How? How often? 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} How long?
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Benefits? Purpose?
            </MainText>

            <LinkToolkitWrapper 
              text={'Share Interactive Physical Therapy Toolkit with family. Click toolkit.'}
              source={physicalIcon}
              onPress={this.props.pressPhysical ? this.props.pressPhysical : this.handlePhysical}
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
      backgroundColor: 'black',
    },
    bullets: {
      marginVertical: 5,
    },
    
  });

  

export default BloodPressureScreen;
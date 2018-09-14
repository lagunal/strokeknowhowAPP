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
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>

      //       <HeadingText>Blood Pressure</HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Higher (systolic) pressure during a heartbeat. 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Lower (diastolic) pressure is between beats. 
      //       </MainText>
      //       <MainText style={styles.bullets}>   
      //       {`\u2022`} Normal Blood Pressure Less than 120 and less than 80.
      //       </MainText>
            
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Elevated 120-129 and less than 80. 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} High Blood Pressure Hypertension stage 1 130-139 or 80-89.
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} High blood Pressure Hypertension stage 2   140 or higher or 90 or higher.
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Hypertension crisis 
      //                  Consult your doctor immediately higher than 180 and/or higher than 120
      //       </MainText>

      //       <HeadingText>Testing Blood Sugar </HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Blood glucose test is used for diabetes. Results are used to regulate medications, diet.  
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} When to test? Numbers to report.  
      //       </MainText>
            
            
      //       <HeadingText>Physical Therapists</HeadingText>

      //       <MainText style={styles.bullets}>
      //       {`\u2022`} How to continue physical therapy?  
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Exercises to do? How? How often? 
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} How long?
      //       </MainText>
      //       <MainText style={styles.bullets}>  
      //       {`\u2022`} Benefits? Purpose?
      //       </MainText>

      //       <LinkToolkitWrapper 
      //         text={'Share Interactive Physical Therapy Toolkit with family. Click toolkit.'}
      //         source={physicalIcon}
      //         onPress={this.props.pressPhysical ? this.props.pressPhysical : this.handlePhysical}
      //       />
   
      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

            <HeadingText>Blood Pressure</HeadingText>

            <MainText style={styles.bullets}>
            {`\u2022`} Higher (systolic) pressure during a heartbeat. 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Lower (diastolic) pressure is between beats. 
            </MainText>
            <MainText style={styles.bullets}>   
            {`\u2022`} Normal Blood Pressure Less than 120 and less than 80.
            </MainText>
            
            <MainText style={styles.bullets}>
            {`\u2022`} Elevated 120-129 and less than 80. 
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} High Blood Pressure Hypertension stage 1 130-139 or 80-89.
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} High blood Pressure Hypertension stage 2   140 or higher or 90 or higher.
            </MainText>
            <MainText style={styles.bullets}>  
            {`\u2022`} Hypertension crisis {`\n`}
                       Consult your doctor immediately higher than 180 and/or higher than 120
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
      backgroundColor: 'white',
    },
    bullets: {
      marginVertical: 5,
    },
    
  });

  

export default BloodPressureScreen;
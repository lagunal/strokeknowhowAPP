import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
  } from 'react-native';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import Link from "../components/UI/Link";

class RangeMotionScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
      // if (this.props.homeScreen === 'home') { 
      //   return (
      //     <View style={styles.container}>
      //       <HeadingText>Range-of-Motion</HeadingText>
 
      //       <MainText>
      //           Range-of-motion exercises can keep joints
      //           moving freely and fully. Exercises are to do either by yourself or with someone. 
      //       </MainText>
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Do exercises in a slow, smooth motion.  
      //                 A helper firmly holds joint exercised with one hand, other to create, guide movement. 
      //                 Helpers stop exercise when a joint is not moving freely, or there is discomfort. 
      //       </MainText>  
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Move and stretch muscles in a weakened arm and leg several times a day, 
      //       to prevent contractures, shortening of muscles around joints that cause tight, painful bands.
      //       </MainText>          

      //       <HeadingText>Body Positioning</HeadingText>
      //       <MainText>
      //           At all times — whether lying in bed, sitting, or walking — good body positioning is essential for the body's soundness. 
      //           To prevent contractures. 
      //       </MainText>
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Position of your head affects muscle tone of trunk, arms, legs. 
      //                   If turned to one side, interferes with balance. ability to move about. 
      //       </MainText>  
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Weight needs to be evenly distributed. Use a pillow to prop up lowered side.  
      //       </MainText>   
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} To hold your shoulder joint in place, support forearm with a pillow. 
      //                 Have your shoulder and arm stretched forward.
      //       </MainText>
      //       <MainText style={styles.bullets}>
      //       {`\u2022`} Lift weaker wrist with sound hand to bring arm forward. 
      //                 Keep wrist extended, fingers straight as possible. 
      //       </MainText>   
            
      //       <Link />

      //     </View>           
      //   );
      // }  

        return (
          <View style={styles.container}>
            <ScrollView>

            <HeadingText>Range-of-Motion</HeadingText>
 
            <MainText>
                Range-of-motion exercises can keep joints
                moving freely and fully. Exercises are to do either by yourself or with someone. 
            </MainText>
            <MainText style={styles.bullets}>
            {`\u2022`} Do exercises in a slow, smooth motion.  
                      A helper firmly holds joint exercised with one hand, other to create, guide movement. 
                      Helpers stop exercise when a joint is not moving freely, or there is discomfort. 
            </MainText>  
            <MainText style={styles.bullets}>
            {`\u2022`} Move and stretch muscles in a weakened arm and leg several times a day, 
            to prevent contractures, shortening of muscles around joints that cause tight, painful bands.
            </MainText>          

            <HeadingText>Body Positioning</HeadingText>
            <MainText>
                At all times — whether lying in bed, sitting, or walking — good body positioning is essential for the body's soundness. 
                To prevent contractures. 
            </MainText>
            <MainText style={styles.bullets}>
            {`\u2022`} Position of your head affects muscle tone of trunk, arms, legs. 
                        If turned to one side, interferes with balance. ability to move about. 
            </MainText>  
            <MainText style={styles.bullets}>
            {`\u2022`} Weight needs to be evenly distributed. Use a pillow to prop up lowered side.  
            </MainText>   
            <MainText style={styles.bullets}>
            {`\u2022`} To hold your shoulder joint in place, support forearm with a pillow. 
                      Have your shoulder and arm stretched forward.
            </MainText>
            <MainText style={styles.bullets}>
            {`\u2022`} Lift weaker wrist with sound hand to bring arm forward. 
                      Keep wrist extended, fingers straight as possible. 
            </MainText>   
            
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
  });

  
export default RangeMotionScreen;
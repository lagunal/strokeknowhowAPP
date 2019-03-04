
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


class NewDayScreen extends Component {

  constructor(props) {
      super(props);
      
  }


  render() {

    return (
      <View style={styles.container}>
      
        <StatusBar
            barStyle="light-content"
        />    

        <ScrollView>

        <Image source={require('../assets/home.png')} style={styles.imageDefault}/>  
        <MainText style={{marginBottom: 0}}>    
            I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
            I overheard the word ‘stroke,’ and realized they were talking about me. 
            Out of the hospital in five days: I could stand, not walk.
            Insurance paid for a handful of physical therapy. NOW WHAT?
        </MainText>
        <PictureLegend>&mdash; Mike</PictureLegend>    
        
        <HeadingText>A New Day</HeadingText>
        
        <Image source={require('../assets/newDay.png')} style={styles.imageDefault}/>
        
        <MainText style={styles.bullets}>
            {`\u2022`} It’s important to get out of bed and dress every day. Complete bed rest deconditions the body. Lowers the capacity of heart’s pumping rate, reduces lung capacity, alters blood pressure, increases chance 
            of pneumonia. 
        </MainText>
        <MainText style={styles.bullets}>  
            {`\u2022`} Do slow stretches in bed to ease stiffness. Roll from side to side. 
        </MainText>
        <MainText style={styles.bullets}>  
            {`\u2022`} Before moving take your time, avoid quick changes to avoid becoming dizzy.  
        </MainText>
        
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    //marginTop: 10,

  },
  bullets: {
    marginVertical: 5,
  },
  imageDefault: {
    width: wp('90%'),
    marginTop: hp('2%'),
    alignSelf: 'center'
  },

});


export default NewDayScreen;
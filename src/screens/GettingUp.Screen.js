import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Image
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";

const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage = require('../assets/skin-care2.png');

class GettingUpScreen extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
  

        return (
          <View style={styles.container}>
            <ScrollView>

            <HeadingText>Kufungisisa {`\n`}
            Thinking too much/depressed in Zimbabwe</HeadingText>

            <Image source={kufungisisaImage} style={styles.imageDefault}/>

            <MainText>
            After my stroke, depression hit me hard. I am the youngest lawyer in the court, suddenly I could not see what my future held. 
            </MainText>
            <MainText>  
            My wife continued my care until she had to return to her job for our income. Then my uncle and a neighbor came.
            </MainText>

            <MainText>
            Three things that helped me: 
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} The love of my wife and children. 
            </MainText>

            <MainText style={styles.bullets}>  
            {`\u2022`} My best friend since childhood challenged me to reach for greater independence. 
            </MainText>

            <MainText style={[styles.bullets, {marginBottom: 0}]}>  
            {`\u2022`} From a group of athletes with disabilities I learned an important lesson: ‘Don’t let anyone take away your role in the family, and the responsibilities you can handle.
            </MainText>

            <PictureLegend >&mdash; R.W., Zimbabwe, Africa</PictureLegend>

            <Image source={skinImage} style={styles.imageGetting}/>

            <MainText style={{marginBottom: 0}}>
            There’s no telling who or what it will be that gives you the will and determination to go forward— 
            your openness that counts. 
            It could be your wife or husband, children, God, friends of many years, or people you meet with similar experiences to yours.  
            </MainText>
            <PictureLegend >&mdash; Bill</PictureLegend>

            <HeadingText>Getting Up {`\n`} When Feeling Down</HeadingText>
            <MainText>
              Advice from people who’ve been there:
            </MainText>

            <MainText>
            {`\u2022`} Stress comes from what we tell ourselves. Substitute positive ‘self-talk’ for negative ones.
            </MainText>

            <MainText>
            {`\u2022`} Be around people who make you feel good about yourself.  Meet at a
                stroke club and aphasia group. Look for a family touched by stroke, can make a difference.
            </MainText>

            <MainText>
            {`\u2022`} Sadness, impatience, loss, love, come with one another. 
                Feelings are all valid, and a reaction of what you've been through. 
            </MainText>
            
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
    imageGetting: {
      width: wp('90%'),
      height: 180,
      alignSelf: 'center',
      marginTop: hp('5%'),
    },
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center' 
    },
  });

  

export default GettingUpScreen;
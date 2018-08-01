import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Linking
  } from 'react-native';

import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import SubHeadingText from "../components/UI/SubHeadingText";
import BodyScroll from "../components/UI/BodyScroll";
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";

import BorderBox from '../styles/BorderBox';

const safetyImage = require('../assets/safety.png');
const familyPlanImage = require('../assets/family-plan.png');
const weeklyScheduleIcon = require('../assets/weekly-schedule-icon.png');
const helpNeededIcon = require('../assets/help_needed_icon.png');

class WeeklyPlanScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  static navigatorButtons = {
    rightButtons: [
      {
          icon:  require('../assets/baseline_chevron_right_black_24pt_2x.png'),
          title: "Forward",
          label: "Forward",
          id: "forwardButton"
      }
    ]
  }

  onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "forwardButton") {
              this.props.navigator.push({
                  screen: "StrokeApp.MedicationsScreen",
                  title: "Medications",
              });
          }
        }  
  }

  handleHelpNeeded = () => {
      this.props.navigator.push({
        screen: "StrokeApp.HelpNeededToolkitScreen",
      });
  }
  handleSchedule = () => {
    this.props.navigator.push({
      screen: "StrokeApp.ScheduleToolkitScreen",
    });
  }
    render() {
        return (
          <View style={styles.container}>
            <BodyScroll>

                <LinkToolkitWrapper 
                  text={'Share Interactive Help Needed Toolkit with family. (click image below)'}
                  source={helpNeededIcon}
                  onPress={this.handleHelpNeeded}
                />
                
                <MainText>
                    <HeadingText>Let's Talk About Safety</HeadingText>
                </MainText>

                <Image source={safetyImage} resizeMode='cover' style={styles.image} />

                <MainText>
                    Pat became a wheelchair user after a car crash. 
                    Her husband, Bill made their home safer and accessible.     
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} To widen the door opening for Pat’s wheelchair, the molding was removed.    
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} Light switches, toilet-tissue dispensers, towel racks to be easily reached were lowered. 
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} A raised toilet makes transfers easier. 
                    A grab bar, and on side of the toilet ensure safer transfers.   
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} The mirrored medicine cabinet was lowered.   
                </MainText>
                <MainText>
                    Falls are the #1 cause of home injuries. Wet bathroom floors lead 
                    home injuries. Millions return to hospitals a month after discharge.     
                </MainText>

                <MainText>
                    <HeadingText>A Weekly Plan</HeadingText>
                </MainText>

                <Image source={familyPlanImage} resizeMode='cover' style={styles.image} />
                <MainText>
                    Rachel’s granddaughter shows her how to organize a weekly schedule. Tel Aviv, Israel.  
                </MainText>

                <MainText>  
                  <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>
                </MainText>
                <MainText style={styles.bullets}>      
                    {`\u2022`} Keeping track of time organizes each day. Prioritize what you need to take place, and give it a time.  
                </MainText>
                <MainText style={styles.bullets}>  
                    {`\u2022`} Have stimulating times, others in between, that are quiet — to sit down, nap, simply relax.    
                </MainText>

                <LinkToolkitWrapper 
                  text={'Share interactive Weekly Schedule Toolkit with family. (click image below)'}
                  source={weeklyScheduleIcon}
                  onPress={this.handleSchedule}
                />

              <MainText style={styles.bullets}>
              {`\u2022`} After a stroke, each family looks at the care, their living and medical expenses needed, and how each one will help.   
              </MainText>
              <MainText style={styles.bullets}> 
              {`\u2022`} Ask a physical therapist to evaluate the ability to move, talk, understand, handle personal care. 
              </MainText>
              <MainText style={styles.bullets}>
              {`\u2022`} A psychologist can evaluate the emotional affects, and ways the family can cope with the changes.
              </MainText>

            <MainText>
            <HeadingText>
              Personal Cleanliness
            </HeadingText>
            </MainText>

            <MainText style={styles.bullets}> 
            {`\u2022`} To prevent infection, protect skin, and for comfort, a loved one needs to be washed or bathed every day with warm water and soap. 
                      Dry, then massaged with soothing lotion. 
            </MainText>

            <MainText style={styles.bullets}>  
            {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
            </MainText>

            <View style={BorderBox.border}>    
                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',marginTop: 0}}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://abledata.acl.gov/new_products')}>
                      <MainText style={{fontSize: 20, textDecorationLine: 'underline'}}>
                                  abledata.com 
                      </MainText>
                    </TouchableOpacity>
                    <MainText style={{fontSize: 18}}>
                      Product Information
                    </MainText>  
                </View>

                <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',marginTop: 0}}>  
                  <TouchableOpacity onPress={() => Linking.openURL('https://www.acl.gov/')}>
                      <MainText style={{fontSize: 20, textDecorationLine: 'underline'}}>
                                  acl.gov
                      </MainText>
                  </TouchableOpacity>
                  <MainText style={{fontSize: 18}}>
                      Community Information
                  </MainText> 
                </View>

                <MainText style={{fontSize: 18, marginVertical: 0, alignSelf: 'center'}}>
                    English / Spanish
                </MainText>

            </View>   


            </BodyScroll>      
          </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
    },
    image: {
      alignSelf: 'center',
      width: 250,
    },
    bullets: {
      marginVertical: 5,
    },

  });

  

export default WeeklyPlanScreen;
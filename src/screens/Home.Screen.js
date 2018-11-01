
import React, { Component } from 'react';

import {
  StyleSheet, View, StatusBar, ScrollView, TouchableOpacity, Text, Linking, Image, Dimensions, Platform
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';

import ImageContainer from '../components/UI/ImageContainer';
import PictureLegend from '../components/UI/PictureLegend';
import HeadingText from '../components/UI/HeadingText';
import MainText from "../components/UI/MainText";
import SubHeadingText from '../components/UI/SubHeadingText';
import LinkToolkitWrapper from "../components/UI/LinkToolkitWrapper";
import Link from "../components/UI/Link";


const familyImage = require('../assets/family.png');
const safetyImage = require('../assets/safety.jpg');
const familyPlanImage = require('../assets/family-plan.png');
//const weeklyScheduleIcon = require('../assets/weekly-schedule-icon.png');
//const helpNeededIcon = require('../assets/help_needed_icon.png');
const medicationsImage = require('../assets/medications.png');
const bladderImage = require('../assets/bladder.png');
const swallowingImage = require('../assets/swallowing.png');
//const physicalIcon = require('../assets/physical-therapy-icon.png');
const skinImage = require('../assets/skin-care1.png');
const kufungisisaImage = require('../assets/kufungisisa.png');
const skinImage2 = require('../assets/skin-care2.png');
const brainImage = require('../assets/brain-body.png');
const emergencyIcon = require('../assets/emergency-station-icon.png');
const strokeLine = require('../assets/helpline-logo.png');
const bioImage = require('../assets/bio.jpg');
const weeklyScheduleIcon = require('../assets/fotoWeeklySchedule.jpg');
const helpNeededIcon = require('../assets/fotohelpneeded.png');
const medicationIcon = require('../assets/FotoMedication.jpg');
const physicalIcon = require('../assets/FotoPhysicalTherapy.jpg');

const THRESHOLD = 200;

class HomeScreen extends Component {

  constructor(props) {
      super(props);   
  }

  state = {
    videoAnimationPaused: true,
    //videoRobPaused: true,
    position: {
        start: null,
        end: null,
    },
    // positionVideoRob: {
    //     startRob: null,
    //     endRob: null,
    // }
  };

  handleVideoLayout = (e) => {
    const { height } = Dimensions.get("window");
    
    this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
  };

//   handleVideoLayoutRob = (e) => {
//     const { height } = Dimensions.get("window");
    
//     if (height > 600) {
//         this.state.positionVideoRob.startRob = 11300 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     } else {
//         this.state.positionVideoRob.startRob = 9800 + height - THRESHOLD;
//         this.state.positionVideoRob.endRob = this.state.positionVideoRob.startRob + 300 + THRESHOLD;
//     }
//   };

  handleScroll = (e) => {
    
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const paused = this.state.videoAnimationPaused;
    //const pausedRob = this.state.videoRobPaused;
    const { start, end } = this.state.position;
    //const { startRob, endRob } = this.state.positionVideoRob;
    // console.log('scroll ' + scrollPosition);
    // console.log('start ' + this.state.positionVideoRob.startRob);
    // console.log('end ' + this.state.positionVideoRob.endRob);

    //Video animation
    if (scrollPosition > start && scrollPosition < end && paused) {
      this.setState({ videoAnimationPaused: false });
    } else if (
      (scrollPosition > end || scrollPosition < start) && !paused
    ) {
      this.setState({ videoAnimationPaused: true });
    }
    //Video Rob
    // if (scrollPosition > startRob && scrollPosition < endRob && pausedRob) {
    //     this.setState({ videoRobPaused: false });
    // } else if (scrollPosition < startRob || scrollPosition > endRob && !pausedRob) {
    //     this.setState({ videoRobPaused: true });
    // }
   // console.log(this.state.videoAnimationPaused);
  };  

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

  handleMedication = () => {
    this.props.navigator.push({
      screen: "StrokeApp.MedicationsToolkitScreen",
    });
  }

  handlePhysical = () => {
    this.props.navigator.push({
      screen: "StrokeApp.PhysicalToolkitScreen",
    });
  }

  handleEmergency = () => {
    this.props.navigator.push({
      screen: "StrokeApp.EmergencyToolkitScreen",
    });
  }

//   handleFullScreen = () => {
//     this.player.seek(0);
//   }
//   handleFullScreenAnimation = () => {
//     this.player2.seek(0);
//   }

  playVideo = () => {
    this.player.presentFullscreenPlayer();
  }

  playVideoAnimation = () => {
    this.player2.presentFullscreenPlayer();
  }

//   handleOnLoadAnimation = () => {
//     this.player2.seek(2);
//     const paused = this.state.videoAnimationPaused;
//     this.setState({ paused: true });

//   };
//   handleOnLoadRob = () => {
//     this.player.seek(1);
//     const paused = this.state.videoRobPaused;
//     this.setState({ paused: true });

//   };

  render() {
    //const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <StatusBar
              barStyle="light-content"
          />  
          <ScrollView
          scrollEventThrottle={16} 
          onScroll={this.handleScroll}
          minimumZoomScale={1}
          maximumZoomScale={2}
          >
{/*************** New Day Screen  ********************************/}
                <View>
                        
                        <StatusBar
                            barStyle="light-content"
                        />    

                        <Image source={require('../assets/home.png')} style={styles.imageDefault}/>  

                        <MainText style={{marginBottom: 0}}>    
                            I was a sports writer of a major newspaper,  who had a stroke in a New York subway during rush hour.  In the ambulance, 
                            I overheard the word ‘stroke,’ and realized they were talking about me. 
                            Out of the hospital in five days: I could stand, not walk.
                            Insurance paid for a handful of physical therapy. NOW WHAT?
                        </MainText>
                        <PictureLegend style={{marginRight: wp('10%') }}>&mdash; Mike</PictureLegend>    
                        
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

                </View>

 {/*************** Moving Safely Screen  ********************************/}
                      <View>
                              <TouchableOpacity onPress={this.playVideoAnimation}>
                                  <View style={{padding: 20}}>
                                      <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>{Platform.OS !== 'android' ? 'Touch video to open full screen player' : 'VIDEO'}</SubHeadingText></MainText>
                                      <Video
                                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                                        ref={(ref) => {
                                          this.player2 = ref
                                        }}       
                                        style={{height: 300}}                             
                                        rate={1}
                                        paused={this.state.videoAnimationPaused}
                                        onLayout={this.handleVideoLayout}
                                       // volume={1}
                                       // muted={false}
                                       // onLoad={this.handleOnLoadAnimation}
                                       // onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                                        //playInBackground={false}
                                        //playWhenInactive={false}
                                        resizeMode='contain'
                                        repeat
                                        />
                                  </View>
                              </TouchableOpacity> 

                              <HeadingText>Helpers Protecting Themselves</HeadingText>
                              
                              <MainText style={styles.bullets}>  
                              {`\u2022`} When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Stand with feet slightly apart, one foot ahead of the other to keep your balance, shift your weight if necessary.
                              </MainText>
                              <HeadingText>Share the Care</HeadingText>

                              <Image source={familyImage} style={styles.imageDefault}/>

                              <MainText style={{marginBottom: 0}}>  
                                  When my wife, Tina, had a stroke,
                                    it hit our whole family, and we each had 
                                    a job to do– even the kids.
                              </MainText>
                              <PictureLegend >&mdash; Javier, Lima, Peru</PictureLegend>

                              
                                <HeadingText>Questions Families {`\n`} Ask Themselves</HeadingText>
                              
                              <MainText style={styles.bullets}>
                                  {`\u2022`} Who will handle personal care; physical therapy? When?
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Shop, share housekeeping? When? 
                              </MainText>
                              <MainText style={styles.bullets}>     
                                  {`\u2022`} Drive to doctor and therapy appointments. 
                              </MainText>        
                    </View>

{/*************** Weekly Plan Screen  ********************************/}
                    <View>

                    <LinkToolkitWrapper 
                      text={'Share Help Needed Toolkit with family. Click Toolkit.'}
                      source={helpNeededIcon}
                      onPress={this.handleHelpNeeded}
                    />


                    <HeadingText>Let's Talk About Safety</HeadingText>


                    <Image source={safetyImage} style={styles.imagePat}/>

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


                    <HeadingText>A Weekly Plan</HeadingText>


                    <Image source={familyPlanImage} style={styles.imageWeekly}/>

                    <MainText>
                        Rachel’s granddaughter shows her how to organize a weekly schedule. Tel Aviv, Israel.  
                    </MainText>

                    
                      <SubHeadingText>Benefits of a Weekly Schedule</SubHeadingText>

                    <MainText style={styles.bullets}>      
                        {`\u2022`} Keeping track of time organizes each day. Prioritize what you need to take place, and give it a time.  
                    </MainText>
                    <MainText style={styles.bullets}>  
                        {`\u2022`} Have stimulating times, others in between, that are quiet — to sit down, nap, simply relax.    
                    </MainText>

                    <LinkToolkitWrapper 
                      text={'Share Weekly Schedule Toolkit with family. Click toolkit'}
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


                    <HeadingText>
                    Personal Cleanliness
                    </HeadingText>


                    <MainText style={styles.bullets}> 
                    {`\u2022`} To prevent infection, protect skin, and for comfort, a loved one needs to be washed or bathed every day with warm water and soap. 
                          Dry, then massaged with soothing lotion. 
                    </MainText>

                    <MainText style={styles.bullets}>  
                    {`\u2022`} All family members, helpers must wash their hands frequently – after using bathroom, before eating.
                    </MainText>

                    </View>



{/*************** Medications Screen  ********************************/}

                    <View>
                        <HeadingText>Organizing Medications</HeadingText>

                        <Image source={medicationsImage} style={styles.imageDefault} />
                        
                        <MainText>
                            Ruth, M. 78, uses a pill organizer and the Interactive Medication Toolkit. Ruth’s daughter, can also see the Toolkit.
                        </MainText>

                        <LinkToolkitWrapper 
                          text={'Share Medication toolkit with family. Click Toolkit'}
                          source={medicationIcon}
                          onPress={this.handleMedication}
                        />
                    </View>     



{/*************** Bladder Control Screen  ********************************/}

                    <View>

                        <HeadingText>Bladder Control</HeadingText>

                        <Image source={bladderImage} style={styles.image}/>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Ask a doctor or nurse for help in reestablishing bladder control. 
                                  Brain and bladder need to keep dry on your schedule.
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} At first, urinate every hour, not wait for the urge, until urination is controlled. 
                                  With greater control, urinate every 3 to 4 hours.  
                        </MainText>

                        <HeadingText>Bowel Control</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} Help is needed in re-training the brain’s ability to control movements. At first, empty on a routine. 
                                  Then, increase the time to relieve oneself. 
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Constipation is an effect of stroke, also caused by certain medications, aging, inactivity, and low-fiber. 
                        </MainText>

                        <HeadingText>Drinking Water</HeadingText>

                        <MainText>  
                        {`\u2022`} We depend on drinking water to live. After a stroke, swallowing may be difficult, drink sips of water often to avoid dehydration. 
                                  Do not use a straw.                 
                        </MainText>

                        <HeadingText>Swallowing</HeadingText>

                        <Image source={swallowingImage} style={styles.imageDefault} />

                        <MainText>  
                            A speech therapist or nurse can help in retraining swallowing. 
                        </MainText>
                        <MainText style={styles.bullets}>
                        {`\u2022`} Act quickly in a swallowing emergency. Learn CPR. 
                        </MainText>
                        <MainText style={styles.bullets}>   
                        {`\u2022`} After eating, check for food in cheeks, under tongue, upper palate.              
                        </MainText>

                        <HeadingText>Questions for a Doctor</HeadingText>

                        <MainText style={styles.bullets}>  
                        {`\u2022`} What should we know about the stroke? High blood pressure? Diabetes?  Numbers to report? 
                        </MainText>  
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Side effects of medicine to report?
                        </MainText>
                        <MainText style={styles.bullets}>  
                        {`\u2022`} Has hospital report been sent to my other doctors?
                        </MainText>

                    </View>        


{/*************** Blood Pressure Screen  ********************************/}

                    <View>

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
                            text={'Share Physical Therapy Toolkit with family. Click toolkit.'}
                            source={physicalIcon}
                            onPress={this.handlePhysical}
                          />

                      </View>         


{/*************** Range of motion Screen  ********************************/}

                      <View>
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

                      </View>     

{/*************** Skin Care Screen  ********************************/}

                      <View>
                            <HeadingText>Skin Care</HeadingText>

                            <Image source={skinImage} style={styles.imageDefault} />

                            <MainText style={styles.bullets}>
                            {`\u2022`} Check skin every day for redness, and injury – especially when skin is fragile, poor circulation, diabetic.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Pressure sore or bruise requires immediate attention for medication and treatment.
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Reposition <Text style={{textDecorationLine: 'underline'}}>at least every two hours</Text> when in bed for extended time. 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Helpers must <Text style={{textDecorationLine: 'underline'}}>lift not pull</Text> someone across sheet, to avoid friction injuries. 
                            </MainText>

                            <MainText style={styles.bullets}>
                            {`\u2022`} Pressure sores, skin breakdown occur from infrequent turning, changing positions.  
                            </MainText>
                      </View>           

{/*************** Getting Up Screen  ********************************/}

                      <View>
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

                            <Image source={skinImage2} style={styles.imageGetting}/>

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
                      </View>           

{/*************** Brain Body Screen  ********************************/}

                      <View>
                              <HeadingText>Brain Body Connection</HeadingText>
                              
                              <Image source={brainImage} style={[styles.imageDefault, {height: hp('50%')}]}/>
                              
                              <MainText>
                              My doctor told me about research that proves after a stroke, when an area of the brain is injured, doing tasks, repeating them several times, helps healing. 
                                    For six months, I used both my weaker and stronger hand, washing my kitchen window, sorting laundry, polishing the table.{`\n`}
                                
                              My goal was for my right hand to open and fingers to move. I kept at it, but saw no difference, {`\n`}
                              One morning I reached for a cup for coffee, suddenly fingers in my right hand slowly opened. I began to cry, and kept moving my fingers. 
                              </MainText>
                  
                              <PictureLegend >&mdash; Madeline, Stuttgart, Germany</PictureLegend>
                  
                              <MainText>
                                  Add your tasks, use both hands, repeat them several times. 
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Fold, open, re-fold items: paper napkins, clothes.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Cut/peel vegetables, fruit. Place cans on a shelf.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Polish silverware, Wash dishes.
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Button/Unbutton shirt.
                              </MainText>
                  
                              <HeadingText>What is Aphasia?</HeadingText>
                  
                              <MainText>
                                  Aphasia is a condition that makes it difficult to say what you are thinking, or understand what is said. 
                                  More than half of men and women after a stroke have the condition. 
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Intelligence is not affected. 
                              </MainText>
                              <MainText style={styles.bullets}>
                              {`\u2022`} Relearning is ongoing: Talking, reading, writing, problem solving. 
                                          You keep at it, until you get back what you've lost.  
                              </MainText>
                  
                              <MainText style={styles.bullets}>
                              {`\u2022`} Find an Aphasia Group or a family with similar experiences. 
                                  It can increases confidence, friendships.  
                              </MainText>
                        
                      </View>          


{/*************** Emergency Screen  ********************************/}

                    <View>
                            <LinkToolkitWrapper 
                              text={'Share Emergency Inf. Toolkit with family. Click toolkit.'}
                              source={emergencyIcon}
                              onPress={this.handleEmergency}
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

                  </View>           

{/*************** Bio Screen  ********************************/}

                  <View style={{marginTop: 50}}>
                          <ImageContainer source={bioImage} orientation={'portrait'} style={[styles.image, {height: '100%'}]} />    

                          <MainText>
                              A long-time activist in the disability rights movement, and author of more than a dozen books, Florence Weiner has interviewed hundreds of men and women and their families touched by stroke. 
                              She shares their advice here, and at StrokeKnowHow.org: A worldwide stroke community based on the belief that we learn best from one another.    
                          </MainText>

                          <MainText>
                              Every stroke is unique. So is the path we choose to find our way back. 
                              If you find answers, motivation, inspiration and hope, this work will have fulfilled its purpose.    
                          </MainText>
                          <MainText>For Richard, the brightest light.</MainText>
                  </View>       


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
    backgroundColor: 'white',

  },
  bullets: {
    marginVertical: 5,
  },
  image: {
    //width: 250,
    width: wp('80%'),
    height: 200,
    //marginTop: 5,
    alignSelf: 'center'
  },
  imageDefault: {
    width: wp('90%'),
    marginTop: hp('2%'),
    alignSelf: 'center' 
  },
  imageWeekly: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  imageGetting: {
    width: wp('90%'),
    height: 180,
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  imagePat: {
    width: wp('60%'),
    height: 300,
    marginTop: hp('2%'),
    alignSelf: 'center'
  },
});


export default HomeScreen;
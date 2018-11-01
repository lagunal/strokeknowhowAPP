import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    Platform
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import HeadingText from '../components/UI/HeadingText';
import SubHeadingText from '../components/UI/SubHeadingText';
import ImageContainer from "../components/UI/ImageContainer";
import PictureLegend from "../components/UI/PictureLegend";


const familyImage = require('../assets/family.png');
const THRESHOLD = 200;

class MovingSafelyScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          videoAnimationPaused: false,
          position: {
            start: null,
            end: null,
          }
        }
        
    }
        
    playVideo = () => {
      this.player.presentFullscreenPlayer();
    }
 
    handleVideoLayout = (e) => {
      const { height } = Dimensions.get("window");
      this.state.position.start = e.nativeEvent.layout.y - height + THRESHOLD;
      this.state.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height - THRESHOLD;
    };

    handleScroll = (e) => {
    
      const scrollPosition = e.nativeEvent.contentOffset.y;
      const paused = this.state.videoAnimationPaused;

      const { start, end } = this.state.position;

      // console.log('scroll ' + scrollPosition);
      // console.log('start ' + this.state.position.start);
      // console.log('end ' + this.state.position.end);
  
      //Video animation
      if (scrollPosition > start && scrollPosition < end && paused) {
        this.setState({ videoAnimationPaused: false });
      } else if (
        (scrollPosition > end || scrollPosition < start) && !paused
      ) {
        this.setState({ videoAnimationPaused: true });
      }
  
      //console.log(this.state.videoAnimationPaused);
    };  

    render() {
      // if (this.props.homeScreen === true) {
      //   return (
      //     <View style={styles.container}>
      //               <TouchableOpacity onPress={this.playVideo}>
      //                   <View style={{padding: 20}}>
      //                       <MainText><SubHeadingText style={{marginBottom: 0, fontSize: 22}}>Check VIDEO &rarr;</SubHeadingText></MainText>
      //                       <Video
      //                         source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
      //                         ref={(ref) => {
      //                           this.player = ref
      //                         }}       
      //                         style={{height: 300, width: wp('80%')}}                             
      //                         rate={1}
      //                         paused={this.state.videoPaused}
      //                         volume={1}
      //                         muted={false}
      //                         playInBackground={false}
      //                         playWhenInactive={false}
      //                         resizeMode='contain'
      //                         repeat={false}
      //                         />
      //                   </View>
      //               </TouchableOpacity> 

      //               <HeadingText>Helpers Protecting Themselves</HeadingText>
                    
      //               <MainText style={styles.bullets}>  
      //               {`\u2022`} When moving someone, keep your hips and knees slightly bent. Stand close to person – too far away puts a strain on your back. 
      //               </MainText>
      //               <MainText style={styles.bullets}>
      //               {`\u2022`} Stand with feet slightly apart, one foot ahead of the other to keep your balance, shift your weight if necessary.
      //               </MainText>
      //               <HeadingText>Share the Care</HeadingText>

      //               <ImageContainer source={familyImage} />

      //               <MainText style={{marginBottom: 0}}>  
      //                   When my wife, Tina, had a stroke,
      //                     it hit our whole family, and we each had 
      //                     a job to do– even the kids.
      //               </MainText>
      //               <PictureLegend >&mdash; Javier, Lima, Peru</PictureLegend>

                    
      //                 <HeadingText>Questions Families {`\n`} Ask Themselves</HeadingText>
                    
      //               <MainText style={styles.bullets}>
      //                   {`\u2022`} Who will handle personal care; physical therapy? When?
      //               </MainText>
      //               <MainText style={styles.bullets}>
      //               {`\u2022`} Shop, share housekeeping? When? 
      //               </MainText>
      //               <MainText style={styles.bullets}>     
      //                   {`\u2022`} Drive to doctor and therapy appointments. 
      //               </MainText>        
      //     </View>           
      //   );
      // }

        return (
          <View style={styles.container}>
            <ScrollView
              scrollEventThrottle={16} 
              onScroll={this.handleScroll}
            >
                    <TouchableOpacity onPress={this.playVideo}>
                        <View style={{padding: 20}}>
                            <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>{Platform.OS !== 'android' ? 'Touch video to open full screen player' : 'VIDEO'}</SubHeadingText></MainText>
                            <Video
                              source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/16_Transfer_from_bed_to_wheelchair.mp4"}}
                              ref={(ref) => {
                                this.player = ref
                              }}       
                              style={{height: 300}}                             
                              rate={1}
                              paused={this.state.videoAnimationPaused}
                              onLayout={this.handleVideoLayout}
                              //onLoad={this.handleOnLoadAnimation}
                              //onFullscreenPlayerDidPresent={this.handleFullScreenAnimation}
                              volume={1}
                              muted={false}
                              playInBackground={false}
                              playWhenInactive={false}
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
    imageDefault: {
      width: wp('90%'),
      marginTop: hp('2%'),
      alignSelf: 'center' 
    },
  });

  

export default MovingSafelyScreen;
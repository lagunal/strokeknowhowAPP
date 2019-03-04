import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Video from 'react-native-video';
import MainText from "../components/UI/MainText";
import PictureLegend from '../components/UI/PictureLegend';
import ImageContainer from "../components/UI/ImageContainer";
import HeadingText from '../components/UI/HeadingText';
import SubHeadingText from '../components/UI/SubHeadingText';

const brainImage = require('../assets/brain-body.png');
const THRESHOLD = 200;

class BrainBodyScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videoRobPaused: true,
            position: {
                start: null,
                end: null,
            }
        }

    }

    // handleFullScreen = () => {
    //     this.player.seek(0);
    // }

    // playVideo = () => {
    //     this.player.presentFullscreenPlayer();
    // }

    // handleOnLoadRob = () => {
    //     this.player.seek(1);
    //     const paused = this.state.videoRobPaused;
    //     this.setState({ paused: true });
    
    // };
    // handleVideoLayout = (e) => {
    //     const { height } = Dimensions.get("window");
    //     //console.log('layout ' + e.nativeEvent.layout.y);
    //     this.state.position.start = e.nativeEvent.layout.y + height - THRESHOLD;
    //     this.state.position.end = this.state.position.start + e.nativeEvent.layout.height + THRESHOLD;
    //   };
  
    //   handleScroll = (e) => {
      
    //     const scrollPosition = e.nativeEvent.contentOffset.y;
    //     const paused = this.state.videoRobPaused;
  
    //     const { start, end } = this.state.position;
  
    //     // console.log('scroll ' + scrollPosition);
    //     // console.log('start ' + this.state.position.start);
    //     // console.log('end ' + this.state.position.end);
    
    //     //Video animation
    //     if (scrollPosition > start && scrollPosition < end && paused) {
    //       this.setState({ videoRobPaused: false });
    //     } else if (
    //       (scrollPosition > end || scrollPosition < start) && !paused
    //     ) {
    //       this.setState({ videoRobPaused: true });
    //     }
    
    //     //console.log(this.state.videoRobPaused);
    // };  

    render() {
 

        return (
          <View style={styles.container}>
            <ScrollView
              scrollEventThrottle={16} 
              onScroll={this.handleScroll}
            >

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
            {`\u2022`} Cut/peel vegetables, fruit. Polish silverware, Wash dishes. Place cans on a shelf.
            </MainText>

            <MainText style={styles.bullets}>
            {`\u2022`} Button/Unbutton shirt.
            </MainText>

            {/* <TouchableOpacity onPress={this.playVideo}>    
                <View style={{padding: 20}}>
                    <MainText><SubHeadingText style={{marginBottom: 0, fontSize: wp('3.5%')}}>Touch video to open full screen player &rarr;</SubHeadingText></MainText>
                    <Video
                        source={{uri: "https://strokeknowhow.org/wp-content/uploads/2018/08/19_Rob_Lawyer_and_blue_grass_musician.mp4"}}
                        ref={(ref) => {
                            this.player = ref
                        }}  
                        style={{height: 300}}
                        rate={1}
                        paused={this.state.videoRobPaused}
                        onLayout={this.handleVideoLayout}
                        //onLoad={this.handleOnLoadRob}
                        //onFullscreenPlayerDidPresent={this.handleFullScreen}
                        //volume={1}
                        //muted={false}
                        //playInBackground={false}
                        //playWhenInactive={false}
                        resizeMode='contain'
                        repeat
                        />  
                </View>
            </TouchableOpacity> */}

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
    imageDefault: {
        width: wp('90%'),
        marginTop: hp('2%'),
        alignSelf: 'center' 
    },
  });

  

export default BrainBodyScreen;
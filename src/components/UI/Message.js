import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        } from 'react-native-responsive-screen';

import SubHeadingText from './SubHeadingText';



class Message extends Component {

    pressHandler = () => {
        this.props.navigator.switchToTab({
            tabIndex: 3 
        });
    }
    
    render(){
            return(
                <TouchableOpacity onPress={this.pressHandler}>
                    <SubHeadingText style={{color: 'red', fontSize: hp('2%')}}
                    >You MUST login to use Toolkit. {'\n'}Please go to Account Tab or Click here
                    </SubHeadingText>
                </TouchableOpacity>
            )
    }
}

export default Message;
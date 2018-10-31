import React from 'react';
import { View, Text } from 'react-native';
import {widthPercentageToDP as wp, 
        heightPercentageToDP as hp,
        } from 'react-native-responsive-screen';

import SubHeadingText from './SubHeadingText';

const Message = () => {
    return(
        <View>
            <SubHeadingText style={{color: 'red', fontSize: hp('2%')}}
            >You MUST login to use Toolkit. {'\n'}Please go to Account Tab to Login.
            </SubHeadingText>
        </View>
    )
}

export default Message;
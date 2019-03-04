import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const mainText = props => (
    <Text 
        {...props} 
        style={[styles.mainText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    mainText: {
        //color: '#0d0d0d',
        color: 'white',
        fontFamily: 'Verdana',
        //fontFamily: 'Helvetica',
        //fontSize: 17,
        fontSize: hp('2.5%'),
        textAlign: 'justify',
        margin: 10,
    }
});

export default mainText;
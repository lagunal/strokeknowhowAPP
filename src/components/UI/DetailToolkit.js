import React from 'react';
import { View, Text } from 'react-native';


const DetailToolkit = (props) => (
   
    <View>
        <Text>{`\u2022`} {props.instructions}</Text>
        <Text>{`\u2022`} You can say the word, into the keyboard microphone of your cell phone.</Text>
        <Text>{`\u2022`} Press Save button below to save information.</Text>
    </View>
);

export default DetailToolkit;
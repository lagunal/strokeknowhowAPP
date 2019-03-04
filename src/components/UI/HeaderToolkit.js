import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import MainText from '../UI/MainText';
import SubHeadingText from '../UI/SubHeadingText';

const { height } = Dimensions.get("window");

const HeaderToolkit = (props) => [
        <View style={styles.titleWrap}>
            <MainText><SubHeadingText style={[styles.textTitle, props.style]}>{props.title}</SubHeadingText></MainText>
        </View>,
        <View style={styles.instructionsWrap}>
            {props.directions1 && <Text style={styles.textInstructions}>{`\u2022`} {props.directions1}</Text>}
            {props.directions2 && <Text style={styles.textInstructions}>{`\u2022`} {props.directions2}</Text>}
            {props.directions3 && <Text style={styles.textInstructions}>{`\u2022`} {props.directions3}</Text>}
            {props.directions4 && <Text style={styles.textInstructions}>{`\u2022`} {props.directions4}</Text>}
            {props.directions5 && <Text style={styles.textInstructions}>{`\u2022`} {props.directions5}</Text>}
            <Text style={styles.textInstructions}>{props.instructions}</Text>
            <Text style={styles.textInstructions}>Turn phone sideways for a better view.</Text>
        </View>
];

const styles = StyleSheet.create({
    titleWrap: {
        margin: 20,
    },
    instructionsWrap: {
        marginBottom: 15
    },
    textTitle: {
        fontSize: height > 700 ? wp('5.3%') : wp('5%'),
        color: 'black'
    },
    textInstructions: {
        fontSize: wp('4%'),
    }
});

export default HeaderToolkit;







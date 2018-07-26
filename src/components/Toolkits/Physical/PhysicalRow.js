import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import MainText from "../../UI/MainText";

const PhysicalRow = (props) => {

    handlePress = () => {
        props.onItemPress(props, props.keyId);
    }

    return(
        <TouchableOpacity onPress={this.handlePress}>
            <View style={{backgroundColor: props.backgroundColor}}>    
                <View style={styles.containerColumm}>    
                    <View style={styles.containerSubRow}>
                            <View style={styles.item}>   
                                <MainText style={styles.label}>{props.labelExercise}</MainText>
                                <Text>{props.exercise}</Text>
                            </View>

                            <View style={styles.item}>   
                                <MainText style={styles.label}>{props.labelTime}</MainText>
                                <Text>{props.time1}</Text>
                                <Text>{props.time2}</Text>
                            </View>
                    </View>

                    <View style={[styles.containerSubRow]}>
                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelPulse1}</Text>
                                <Text>{props.pulse1}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelPulse2}</Text>
                                <Text>{props.pulse2}</Text>
                            </View>

                            <View style={styles.item}>   
                                <Text style={styles.label}>{props.labelGoals}</Text>
                                <Text>{props.goals1}</Text>
                                <Text>{props.goals2}</Text>
                                <Text>{props.goals3}</Text>
                            </View>

                    </View>
                </View>    
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    containerColumm: {
        flex: 1,
        flexDirection: 'column',
    },
    containerSubRow: {
        flex: 1, 
        flexDirection: 'row', 
    },
    label: {
        fontWeight: 'bold',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 6,
    }
});

export default PhysicalRow;

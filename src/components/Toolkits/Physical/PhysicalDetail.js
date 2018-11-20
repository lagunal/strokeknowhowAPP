import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import DetailToolkit from '../../UI/DetailToolkit';
import BodyScroll from "../../UI/BodyScroll";
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class PhysicalDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: this.props.item.activity,
        }
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
            var data = this.props.data;
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.activity : data[key];
                }
            }
            let jsonData = JSON.stringify(data);
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'physical');
            this.props.onPress();//calls the onPress event from parent                
    }
      
    render(){

        return(
           

               

            <View style={{flex: 1}}>    
            <ScrollView>
                <KeyboardAvoidingView behavior='position' style={{flex: 1}}>
                    <DetailToolkit 
                        instructions={'Type in Exercise.'}
                    />
                    <MainText><SubHeadingText>Activity</SubHeadingText>  </MainText>
                    <TextInput
                            multiline = {true}
                            numberOfLines = {4} 
                            value={this.state.activity} 
                            style={[styles.inputStyleToolkit, {height: hp('20%')}]}
                            onChangeText={activity => this.setState({ activity } )} 
                            underlineColorAndroid={'transparent'}/>
                            
                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                    Save
                    </Button>
                    </KeyboardAvoidingView>
            </ScrollView>
            </View>
          
        )
    }

}

export default PhysicalDetail;


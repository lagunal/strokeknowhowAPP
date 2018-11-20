import React, { Component } from 'react';
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import DetailToolkit from '../../UI/DetailToolkit';
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class ToolkitItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item.name,
            phone: this.props.item.phone,
            medication: this.props.item.medication,
            dosage: this.props.item.dosage,
            purpose: this.props.item.purpose,
        }
        this.handlePress = this.handlePress.bind(this);
    }
 
    handlePress() {
            var data = this.props.data;
            if (this.props.keyId[2]) { //if parent is ToolkitMedication
                for (var key in data){
                    if (data.hasOwnProperty(key)) {
                        data[key] = (key === this.props.keyId[0]) ? this.state.medication : data[key];
                        data[key] = (key === this.props.keyId[1]) ? this.state.dosage : data[key];
                        data[key] = (key === this.props.keyId[2]) ? this.state.purpose : data[key];
                    }
                }
            } else if (this.props.keyId[1]) { //if parent is ToolkitContactInfo
                for (var key in data){
                    if (data.hasOwnProperty(key)) {
                        data[key] = (key === this.props.keyId[0]) ? this.state.name : data[key];
                        data[key] = (key === this.props.keyId[1]) ? this.state.phone : data[key];
                        
                    }
                }
            } else {
                for (var key in data){
                    if (data.hasOwnProperty(key)) {
                        data[key] = (key === this.props.keyId[0]) ? this.state.name : data[key];                    
                    }
                }
            }
            let jsonData = JSON.stringify(data);
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'emergency');
            this.props.onPress();//calls the onPress event from parent 
    }


    
    render(){
        const { item } = this.props;
        if (this.props.keyId[2]) { //if parent is ToolkitMedication
            return(
                <View style={{flex: 1}}>
                 <ScrollView >
                 <KeyboardAvoidingView behavior='position' style={{flex: 1}}>    
                    <DetailToolkit 
                        instructions={'Type in medication, dosage and purpose.'}
                    />

                    <MainText><SubHeadingText>{item.labelMedication}</SubHeadingText>  </MainText>
                    <TextInput value={this.state.medication} 
                            style={styles.inputStyleToolkit}
                            onChangeText={medication => this.setState({ medication } )} />

                    <MainText><SubHeadingText> {item.labelDosage} </SubHeadingText> </MainText>
                    <TextInput value={this.state.dosage} 
                            style={styles.inputStyleToolkit}
                            onChangeText={dosage => this.setState({ dosage } )}/>

                    <MainText><SubHeadingText> {item.labelPurpose} </SubHeadingText> </MainText>
                    <TextInput value={this.state.purpose} 
                            style={styles.inputStyleToolkit}
                            onChangeText={purpose => this.setState({ purpose } )}/>

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                       Save
                    </Button>
                </KeyboardAvoidingView>
                </ScrollView>
                </View>
            )
        }

        if (this.props.keyId[1]) { //if parent is ToolkitContactInfo
            return(
                    <View style={{flex: 1}}> 
                        <ScrollView >
                        <KeyboardAvoidingView behavior='position' style={{flex: 1}}>    
                        <DetailToolkit 
                            instructions={'Type in contact information and phone number.'}
                        />
                        <MainText><SubHeadingText>{item.label}</SubHeadingText>  </MainText>
                        <TextInput value={this.state.name} 
                                style={styles.inputStyleToolkit}
                                onChangeText={name => this.setState({ name } )} />
                        <MainText><SubHeadingText> {item.labelContact} </SubHeadingText> </MainText>
                        <TextInput value={this.state.phone} 
                                style={styles.inputStyleToolkit}
                                onChangeText={phone => this.setState({ phone } )}/>

                        <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                        Save
                        </Button>
                        </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
            )
        }
        //parent is emergencyToolkitScreen
        return(
            <View style={{flex: 1}}>    
                 <ScrollView >
                 <KeyboardAvoidingView behavior='position' style={{flex: 1}}>    
                <DetailToolkit 
                    instructions={'Type in allergies to medications or medical conditions.'}
                />

                <MainText><SubHeadingText>{item.label}</SubHeadingText>  </MainText>
                <TextInput value={this.state.name} 
                        style={styles.inputStyleToolkit}
                        onChangeText={name => this.setState({ name } )} />

                <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                Save
                </Button>
                </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }

}

export default ToolkitItemDetail;


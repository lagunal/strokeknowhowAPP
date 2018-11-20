import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import DetailToolkit from '../../UI/DetailToolkit';
import BodyScroll from "../../UI/BodyScroll";
import styles from '../../../styles/styles';
import ajax from '../../../ajax/ajax';

class MedicationDetail extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            medicine: this.props.item.medicine,
            time: this.props.item.time,
            monday: this.props.item.monday,
            tuesday: this.props.item.tuesday,
            wednesday: this.props.item.wednesday,
            thursday: this.props.item.thursday,
            friday: this.props.item.friday,
            saturday: this.props.item.saturday,
            sunday: this.props.item.sunday,
            isDateTimePickerVisible: false,
        }
        this.handleSwitchMonday = this.handleSwitchMonday.bind(this);
        this.handleSwitchTuesday = this.handleSwitchTuesday.bind(this);
        this.handleSwitchWednesday= this.handleSwitchWednesday.bind(this);
        this.handleSwitchThursday = this.handleSwitchThursday.bind(this);
        this.handleSwitchFriday = this.handleSwitchFriday.bind(this);
        this.handleSwitchSaturday = this.handleSwitchSaturday.bind(this);
        this.handleSwitchSunday = this.handleSwitchSunday.bind(this);
        this.handlePress = this.handlePress.bind(this);
    }

    //updates the data array with the updated info and call function to save 
    handlePress() {           
                var data = this.props.data;
                for (var key in data){
                    if (data.hasOwnProperty(key)) {
                        data[key] = (key === this.props.keyId[0]) ? this.state.medicine : data[key];
                        data[key] = (key === this.props.keyId[1]) ? this.state.time : data[key];
                        data[key] = (key === this.props.keyId[2]) ? this.state.monday : data[key];
                        data[key] = (key === this.props.keyId[3]) ? this.state.tuesday : data[key];
                        data[key] = (key === this.props.keyId[4]) ? this.state.wednesday : data[key];
                        data[key] = (key === this.props.keyId[5]) ? this.state.thursday : data[key];
                        data[key] = (key === this.props.keyId[6]) ? this.state.friday : data[key];
                        data[key] = (key === this.props.keyId[7]) ? this.state.saturday : data[key];
                        data[key] = (key === this.props.keyId[8]) ? this.state.sunday : data[key];
                    }
                }
    
            let jsonData = JSON.stringify(data);      
            ajax.saveToolkit(jsonData, this.props.userId, this.props.token, 'medication');
            this.props.onPress();//calls the onPress event from parent 
    }

  

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  
    _handleDatePicked = (selectedDate) => {
      this.setState({
       time: selectedDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
      });
      this._hideDateTimePicker();
    };

    handleSwitchMonday() {
        this.setState(prevState => ({
            monday: !prevState.monday
        }));
    }
    handleSwitchTuesday(){
        this.setState(prevState => ({
            tuesday: !prevState.tuesday
        }));
    }
    handleSwitchWednesday() {
        this.setState(prevState => ({
            wednesday: !prevState.wednesday 
        }));
    }
    handleSwitchThursday() {
        this.setState(prevState => ({
            thursday: !prevState.thursday 
        }));
    }
    handleSwitchFriday() {
        this.setState(prevState => ({
            friday: !prevState.friday 
        }));
    }
    handleSwitchSaturday() {
        this.setState(prevState => ({
            saturday: !prevState.saturday 
        }));
    }
    handleSwitchSunday() {
        this.setState(prevState => ({
            sunday: !prevState.sunday 
        }));
    }
   
   
    
    render(){
        //const { item } = this.props;
        const behavior = Platform.OS === 'ios' ? 'padding' : '';
        return(
            <KeyboardAvoidingView behavior={behavior} style={{flex: 1}}>   
            <BodyScroll>
            
            <View style={{flex: 1}}>    
                <DetailToolkit 
                    instructions={'Type in medicine, choose time and days.'}
                />
                <MainText><SubHeadingText>Medicine/Dose</SubHeadingText>  </MainText>
                <TextInput value={this.state.medicine} 
                        style={styles.inputStyleToolkit}
                        onChangeText={medicine => this.setState({ medicine } )} 
                        underlineColorAndroid={'transparent'} />
                
                <TouchableOpacity onPress={this._showDateTimePicker}>
                        <View style={styleComponent.timeContainer}> 
                            <MainText><SubHeadingText>Time</SubHeadingText>  </MainText>
                            <MainText>{this.state.time} </MainText>
                        </View>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    mode='time'
                    titleIOS={'Pick a time'}
                    //minuteInterval={30}
                    //date={new Date()}
                />
               
                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Monday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchMonday}
                        value={this.state.monday}
                    />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Tuesday</SubHeadingText>  </MainText>
                   <Switch 
                        onValueChange={this.handleSwitchTuesday}
                        value={this.state.tuesday}
                   />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Wednesday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchWednesday}
                        value={this.state.wednesday}
                    />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Thursday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchThursday}
                        value={this.state.thursday}                  
                    />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Friday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchFriday}
                        value={this.state.friday}
                    />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Saturday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchSaturday}
                        value={this.state.saturday}
                    />
                </View>

                <View style={styleComponent.dayContainer}> 
                    <MainText><SubHeadingText>Sunday</SubHeadingText>  </MainText>
                    <Switch 
                        onValueChange={this.handleSwitchSunday}
                        value={this.state.sunday}
                    />
                </View>

                <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                Save
                </Button>

            </View>
          
            </BodyScroll>
            </KeyboardAvoidingView>
        )
    }

}

const styleComponent = StyleSheet.create({
    dayContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        
    },
    timeContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginTop: 5
        
    },
});

export default MedicationDetail;


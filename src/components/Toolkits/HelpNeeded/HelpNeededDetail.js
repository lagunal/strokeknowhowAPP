import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import HeadingText from '../../UI/HeadingText';
import SubHeadingText from '../../UI/SubHeadingText';
import MainText from "../../UI/MainText";
import TextFieldInput from "../../UI/TextInputField";
import Button from "../../UI/Button";
import BodyScroll from "../../UI/BodyScroll";
import styles from "../../../styles/styles";
import ajax from '../../../ajax/ajax';

class ToolkitItemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name1: this.props.item.name1,
            name2: this.props.item.name2,
            name3: this.props.item.name3,
            name4: this.props.item.name4
        }
    }
    //updates the data array with the updated info and call function to save 
    handlePress = () => {
        var data = this.props.data;
        if (this.props.keyId[3]) { //if household row (4 items)
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.name1 : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.name2 : data[key];
                    data[key] = (key === this.props.keyId[2]) ? this.state.name3 : data[key];
                    data[key] = (key === this.props.keyId[3]) ? this.state.name4 : data[key];
                }
            }
        } else if (this.props.keyId[2]) { //if personal care row (3 items)
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.name1 : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.name2 : data[key];
                    data[key] = (key === this.props.keyId[2]) ? this.state.name3 : data[key];
                    
                }
            }
        } else { //if schedule row (2 items)
            for (var key in data){
                if (data.hasOwnProperty(key)) {
                    data[key] = (key === this.props.keyId[0]) ? this.state.name1 : data[key];
                    data[key] = (key === this.props.keyId[1]) ? this.state.name2 : data[key];                    
                }
            }
        }
        ajax.saveToolkit(data, this.props.userId, this.props.token, 'help_needed');
        this.props.onPress();//calls the onPress event from parent 
    }
    
    render(){
            const { item } = this.props;
            return(
                <BodyScroll>
                <View style={{flex: 1}}>    
                    <MainText><HeadingText>{item.title}</HeadingText>  </MainText>
                    <MainText><HeadingText>{item.label1}</HeadingText>  </MainText>
                    <TextInput value={this.state.name1} 
                            style={styles.inputStyleToolkit}
                            onChangeText={name1 => this.setState({ name1 } )} />

                    <MainText><HeadingText> {item.label2} </HeadingText> </MainText>
                    <TextInput value={this.state.name2} 
                            style={styles.inputStyleToolkit}
                            onChangeText={name2 => this.setState({ name2 } )}/>

                    {item.label3 && <MainText><HeadingText> {item.label3} </HeadingText> </MainText>}
                    {item.label3 && <TextInput value={this.state.name3} 
                            style={styles.inputStyleToolkit}
                            onChangeText={name3 => this.setState({ name3 } )}/>}
                    
                    {item.label4 && <MainText><HeadingText> {item.label4} </HeadingText> </MainText>}
                    {item.label4 && <TextInput value={this.state.name4} 
                            style={styles.inputStyleToolkit}
                            onChangeText={name4 => this.setState({ name4 } )}/>}

                    <Button style={{margin: 50}} color={'#ED7030'} textColor={'white'} onPress={this.handlePress}>
                       Save
                    </Button>
                </View>
                </BodyScroll>
            )

    }

}

export default ToolkitItemDetail;


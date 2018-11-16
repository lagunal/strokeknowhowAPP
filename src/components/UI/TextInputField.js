import React, { Component } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import styles from '../../styles/styles';

class TextFieldInput extends Component {
    state = {
        isFocused: false,
    }

    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1)
    }

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
            duration: 200,
        }).start()
    }

    handleFocus = () => { 
        this.setState({isFocused: true})
    }
    handleBlur = () => { 
        this.setState({isFocused: false})
    }
    
    labelStyle = () => {
        return {
            position: 'absolute',
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 0],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 12],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#000', '#000'],
            }),
        }
    }
      
    render(){
        const { label, value, onChangeText, placeholder, secureTextEntry } = this.props

        return(
            <View style={styles.containerStyle}>
                <Animated.Text style={this.labelStyle()}>{label}</Animated.Text>
                <TextInput
                    {...this.props} 
                    autoCorrect={false}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    onChangeText={onChangeText}
                    style={[styles.inputStyle , this.props.style]}
                    underlineColorAndroid={'transparent'}
                    autoCorrect={false}
                    maxLength={30}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
            </View>
        )
    }

}

export default TextFieldInput;

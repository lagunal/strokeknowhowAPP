import React, { Component } from 'react';
import { Modal, View, Image, Text } from 'react-native';

import startTabs  from './MainTabs'; //start tabs navigation
import styles from '../styles/styles';

class ModalCoverScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true
        }
    }

   
    componentDidMount() {
        //close modal
        setTimeout(function () {
              this.setState({ 
                modalVisible: false,
              });
              startTabs();
        }.bind(this), 6000);
      
    }

    startApp = () => {
            startTabs();
    };

    render() {

        return(
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={()=>{}}
                    onDismiss={this.startApp}
                >
                    <Image style={styles.backgroundImage}  source={require('../assets/app.jpg')}/>
                    
                </Modal>   
        )
    }

}

export default ModalCoverScreen;

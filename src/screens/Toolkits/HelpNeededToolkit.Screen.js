import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ActivityIndicator,
    AsyncStorage,
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import HeadingText from '../../components/UI/HeadingText';
import SubHeadingText from '../../components/UI/SubHeadingText';
import HeaderToolkit from '../../components/UI/HeaderToolkit';
import MainText from "../../components/UI/MainText";
import BodyScroll from "../../components/UI/BodyScroll";
import HelpNeededRow from "../../components/Toolkits/HelpNeeded/HelpNeededRow";
import HelpNeededDetail from "../../components/Toolkits/HelpNeeded/HelpNeededDetail"
import Message from "../../components/UI/Message";
import jsonData from '../../assets/json/helpNeededToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';

const logoImage = require('../../assets/logo-header.jpg');

class HelpNeededToolkit extends Component {
    // static navigatorButtons = {
    //     rightButtons: [
    //         {
    //         title: 'Save', // for a textual button, provide the button title (label)
    //         id: 'save', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
    //         //testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
    //         //disabled: (this.state.currentItem) ? false : true, // optional, used to disable the button (appears faded and doesn't interact)
    //         //disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
    //         //showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
    //         buttonColor: 'white', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
    //         buttonFontSize: 18, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
    //         buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
    //         //systemItem: 'save',  
    //       },
    //     ]
    // };

    constructor(props){
      super(props);
      this.state = { 
        isLoading: true,
        data: [],
        currentItem: null,
        user: [],
      }
    };

    
    //get data from rest API
    async componentDidMount() {
      //get the id from logged user
      const userData = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(userData) });
      if (this.state.user === null) {
        this.setState({ 
            isLoading: false, 
            data: jsonData,
        });
      } else {  
            try {
                const data = await ajax.getToolkit(this.state.user.id, 'helpNeeded');
                const dataValue = data.value;
                var dataToolkit = [];
                if (dataValue === null) {//if toolkit is new (no data from fetch)
                    dataToolkit = jsonData; //assign "empty" json to data for toolkit
                } else {
                    dataToolkit = dataValue; //assign existing data from toolkit
                }
                this.setState({ 
                    isLoading: false, 
                    data: dataToolkit,
                });
            } catch(error) {
                console.log(error);
            }
      }
    
    }

    //function to navigate to the detail information
    setCurrentItem = (item, keyId) => {
        if (this.state.user !== null) {
            this.setState({
                currentItem: {
                    helper: item.helper,                         
                },
                keyId: keyId,
            });
        }
    }

    //function that comes from child component ToolkitItemDetail, to list all items
    saveData = () => {
       this.setState({
          currentItem: null,
        })
    }

    //loop for rendering the medicines row of the toolkits using RowRender component
    renderHelpers(times, day) {
        const helpers = [];
        //let background = '';
        for (let i=1; i <= times; i++) {
            //background = (i%2 == 0) ? '#bad2ef' : 'white';
            helpers.push(<HelpNeededRow 
                            helper={this.state.data[day + 'Helper' + i]} 
                            keyId={[`${day}Helper${i}`]}
                            onItemPress={this.setCurrentItem}
                           // backgroundColor={background}
                           // backgroundColorMedication={'#bad2ef'}
                            />);
        }
        return helpers;
    }
    
  

    render() {
        const background = '#bad2ef';

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator size='large' />
            </View>
          )
        }

        if(this.state.currentItem){
          return(
            <View style={{flex: 1, padding: 20}}>
               <HelpNeededDetail item={this.state.currentItem} 
                                  keyId={this.state.keyId}
                                  data={this.state.data} 
                                  onPress={this.saveData}
                                  userId={this.state.user.id} 
                                  token={this.state.user.token}
                                  //navigator={this.props.navigator}
                                 />
            </View>
          )
        }

        return (
            <View style={styles.container}>
            <BodyScroll>
              <View style={{flex: 1}}>
                
                  <HeaderToolkit 
                    title='INTERACTIVE HELP NEEDED'
                    directions1='Talk or Type'
                    directions2='Who is coming?'
                    directions3='When?'
                    directions4='What they will do?'
                    directions5='Then Save'  
                    instructions="Press a box to enter or change information."
                  />
                    {this.state.user === null &&   
                        <Message {...this.props}/>
                    }
                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Monday</Text>
                      </View>
                      {this.renderHelpers(6, 'monday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Tuesday</Text>
                      </View>
                      {this.renderHelpers(6, 'tuesday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Wednesday</Text>
                      </View>
                      {this.renderHelpers(6, 'wednesday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Thursday</Text>
                      </View>
                      {this.renderHelpers(6, 'thursday')}
                  </View>  

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Friday</Text>
                      </View>
                      {this.renderHelpers(6, 'friday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: 'white'}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Saturday</Text>
                      </View>
                      {this.renderHelpers(6, 'saturday')}
                  </View>

                  <View style={[styles.containerGrid,{backgroundColor: background}]}> 
                      <View style={[styles.cell, {backgroundColor: 'white'}]}>
                          <Text style={styles.titleMed}>Sunday</Text>
                      </View>
                      {this.renderHelpers(6, 'sunday')}
                  </View>
  
              </View>
  
            </BodyScroll>
            </View>          
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    logoImage: {
      width: '100%',
    },
    titleMed: {
        fontSize: hp('2%'),
        paddingVertical: hp('9%'),
        fontWeight: 'bold',
        alignSelf: 'center'
     
    },
    containerGrid: {
      //backgroundColor: '#1749FF',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    cell: {
      flex: 1,
      borderColor: 'black',
      borderWidth: 1,
      height: hp('20%'),
      //width: wp('9.5%'),
    },

});

  

export default HelpNeededToolkit;
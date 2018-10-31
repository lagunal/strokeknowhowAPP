import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    AsyncStorage
  } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import HeadingText from '../../components/UI/HeadingText';
import MainText from "../../components/UI/MainText";
import HeaderToolkit from '../../components/UI/HeaderToolkit';
import BodyScroll from "../../components/UI/BodyScroll";
import ToolkitMedication from "../../components/Toolkits/Emergency/ToolkitMedication";
import ToolkitContactInfo from "../../components/Toolkits/Emergency/ToolkitContactInfo";
import ToolkitItemDetail from "../../components/Toolkits/Emergency/ToolkitItemDetail"
import ToolkitSingleItem from "../../components/Toolkits/Emergency/ToolkitSingleItem"
import SubHeadingText from '../../components/UI/SubHeadingText';
import Message from "../../components/UI/Message";
import jsonData from '../../assets/json/emergencyToolkit.json'; //json used for first time toolkit.
import ajax from '../../ajax/ajax';


const logoImage = require('../../assets/logo-header.jpg');

class EmergencyToolkit extends Component {
   
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
                const data = await ajax.getToolkit(this.state.user.id, 'emergency');
        
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
                label: item.label,
                name: item.name,
                labelContact: item.labelContact,
                phone: item.phone,
                labelMedication: (item.labelMedication) ? item.labelMedication : '',
                medication: (item.medication) ? item.medication : '',
                labelDosage: (item.labelDosage) ? item.labelDosage : '',
                dosage: (item.dosage) ? item.dosage : '',
                labelPurpose: (item.labelPurpose) ? item.labelPurpose : '',
                purpose: (item.purpose) ? item.purpose : '',
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

    //loop for rendering the medicines of the toolkits using ToolkitMedication UI component
    renderMedicines(times) {
      const medicines = [];
      let background = '';
      for (let i=1; i <= times; i++) {
          background = (i%2 == 0) ? 'white' : 'lightgrey';
          medicines.push(<ToolkitMedication 
                            labelMedication='Medication'
                            medication={this.state.data['medication' + i]} 
                            labelDosage='Dosage'
                            dosage={this.state.data['medication_dosage' + i]} 
                            labelPurpose='Purpose'
                            purpose={this.state.data['medication_purpose' + i]} 
                            keyId={['medication' + i ,'medication_dosage' + i, 'medication_purpose' + i]}
                            onItemPress={this.setCurrentItem}
                            backgroundColor={background}/>);
      }
      return medicines;
    }

    render() {

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
               <ToolkitItemDetail item={this.state.currentItem} 
                                  keyId={this.state.keyId}
                                  data={this.state.data} 
                                  onPress={this.saveData}
                                  userId={this.state.user.id} 
                                  token={this.state.user.token}
                                
                                 />
            </View>
          )
        }

        return (
          <View style={styles.container}>
          <BodyScroll>
            
            <HeaderToolkit 
                    title='INTERACTIVE EMERGENCY INFORMATION STATION'
                    directions1='Talk or Type'
                    directions2='Then Save'   
                    instructions="Press a row to enter or change information."
                    //style={{fontSize: wp('4%')}}
            />
                   {this.state.user === null &&   
                        <Message />
                    }
            <View style={styles.labelEsential}>    
                <MainText><SubHeadingText>ESSENTIAL INFORMATION</SubHeadingText></MainText>
            </View>

            <View style={{flex: 1}}>
                  
                  <ToolkitContactInfo 
                    label='Hospital'
                    name={this.state.data.hospital1}
                    labelContact='Phone' 
                    phone={this.state.data.hospital1_phone} 
                    keyId={['hospital1','hospital1_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Doctor'
                    name={this.state.data.doctor1}
                    labelContact='Phone' 
                    phone={this.state.data.doctor1_phone}
                    keyId={['doctor1','doctor1_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Doctor'
                    name={this.state.data.doctor2}
                    labelContact='Phone' 
                    phone={this.state.data.doctor2_phone} 
                    keyId={['doctor2','doctor2_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Dentist'
                    name={this.state.data.dentist1}
                    labelContact='Phone' 
                    phone={this.state.data.dentist1_phone} 
                    keyId={['dentist1','dentist1_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Pharmacy'
                    name={this.state.data.pharmacy1}
                    labelContact='Phone' 
                    phone={this.state.data.pharmacy1_phone}
                    keyId={['pharmacy1','pharmacy1_phone']}
                    onItemPress={this.setCurrentItem} 
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Health Insurance Plan'
                    name={this.state.data.insurance1}
                    labelContact='Phone' 
                    phone={this.state.data.insurance1_phone} 
                    keyId={['insurance1','insurance1_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Insurance Policy Number'
                    name={this.state.data.insurance2}
                    labelContact='Phone' 
                    phone={this.state.data.insurance2_phone}
                    keyId={['insurance2','insurance2_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'lightgray'}/>


                  <ToolkitSingleItem                 
                    label='Medical Conditions'
                    name={this.state.data.condition1}
                    keyId={['condition1']}
                    onItemPress={this.setCurrentItem}/>


                  <View style={styles.labelContact}>
                      <MainText><SubHeadingText style={{color: 'white'}}>CONTACT PHONE NUMBERS</SubHeadingText></MainText>
                  </View>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact1}
                    labelContact='Phone' 
                    phone={this.state.data.contact1_phone} 
                    keyId={['contact1','contact1_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'lightgray'}/>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact2}
                    labelContact='Phone' 
                    phone={this.state.data.contact2_phone} 
                    keyId={['contact2','contact2_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'white'}/>

                  <ToolkitContactInfo 
                    label='Contact person'
                    name={this.state.data.contact3}
                    labelContact='Phone' 
                    phone={this.state.data.contact3_phone} 
                    keyId={['contact3','contact3_phone']}
                    onItemPress={this.setCurrentItem}
                    backgroundColor={'lightgray'}/>

                  <View style={styles.labelMedicine}>
                      <MainText><SubHeadingText style={{color: 'white'}}>MEDICINE</SubHeadingText></MainText>
                  </View>

                    {this.renderMedicines(8)}

                  <ToolkitSingleItem                 
                    label='Allergies to Medications'
                    name={this.state.data.allergies1}
                    keyId={['allergies1']}
                    onItemPress={this.setCurrentItem}
                    style={{backgroundColor: 'lightgray'}}/>

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
    labelEsential: {
       backgroundColor: 'yellow',
     },
    labelContact: {
      backgroundColor: '#ED7030',
    },
    labelMedicine: {
      backgroundColor: '#1749FF',
    },
    logoImage: {
      width: '100%',
    },
   });

  

export default EmergencyToolkit;
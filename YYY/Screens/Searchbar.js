
import React from 'react';

import {
  Text,
  TextInput,
  View,
} from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';


export default function Searchbar(){
    return(

      

      <View  style = {{marginTop: 10 , flexDirection : 'row' , alignItems : 'center',
          marginLeft : 20,
          width : '90%',
          borderRadius : 30,
          backgroundColor : "#eee",
          paddingLeft : 10, 
     }}>
      <Icon name='location-pin'
       size={20}
       color="black" />
      <TextInput 
      placeholder='Search The Orders'
     />
       
     </View>

    );
} 
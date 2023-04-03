import React from 'react';

import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import Searchbar from './Searchbar';

// This Icons Built By the vedio of code steps icon vedio 

// And Navigator gained by Computer Science Tutorials vedio in Youtube


import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

export default function Home({navigation}){

  return(
     <View style = {styles.cointainer}>
          <View style = {styles.footer1}>
              <View style = {{alignItems : 'center', justifyContent : 'center', marginTop : 15}}>
               <Text style = {styles.orderheadertext}>
                    Orders history Lists
               </Text>
               </View>
          </View>
          <Searchbar/>
        <View style = {styles.Header}>
             
        <TouchableOpacity>
              <View style = {styles.cards}>
                
                </View>
              </TouchableOpacity>
        
            
              <TouchableOpacity>
              <View style = {styles.cards}>
                
                </View>
              </TouchableOpacity>
               
        </View>

        <View style = {styles.footer}>
        <View style = {styles.button}>
                <TouchableOpacity 
                  
                  onPress = {()=> navigation.navigate("Home")}
                >
                <MaterialIcons 
                     name='pending-actions'
                     size={30}
                     color = '#009387'
                     style = {{marginTop : 15, marginLeft : 16}}
                />
                       <Text style = {{marginTop : -22, marginLeft : 52, color : '#009387', fontWeight : 'bold'}}>
                           CurrentOrders
                       </Text>
                </TouchableOpacity>
               </View>
        </View>
     </View>
  )
}

// history
const styles = StyleSheet.create({
  cointainer : {
    flex : 1,
    backgroundColor : '#fff'
   },
   Header : {
      flex : 2.7,
      alignItems :'flex-start',
      flexDirection : 'row',
      justifyContent : 'space-around',
   },
   footer : {
     flex : 0.2,
     backgroundColor : '#009387',
     borderTopLeftRadius : 40,
     borderTopRightRadius : 40,
     paddingHorizontal : 30,
     paddingVertical : 40,
     flexDirection : 'row'
   },

   footer1 : {
    width : '100%',
    height : 70,
    backgroundColor : '#009387',
    borderTopLeftRadius : 2,
    borderTopRightRadius : 2,
    borderBottomLeftRadius : 20,
    borderBottomRightRadius: 20,
    //paddingHorizontal : 30,
    //paddingVertical : 40,

  },
  orderheadertext : {
        color : 'white',
        fontSize : 30,
        fontWeight : 'bold',
  },
  button : {
     backgroundColor : '#fff',
     width : 150,
     height : 60, 
     marginRight : 60,
     borderRadius : 40, 
     marginTop : -7,
     marginLeft : 90,
  },

  cards : {
    width : 180,
    height : 240,
    backgroundColor : '#009387',
    marginTop : 16,
    marginLeft : 5,
    borderRadius : 30,
  },
 
});
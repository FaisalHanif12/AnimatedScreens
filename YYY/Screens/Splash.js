
import React from 'react';

import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import  Icon  from 'react-native-vector-icons/MaterialIcons';

import * as Animatable from 'react-native-animatable';


  // This Icons Built By the vedio of code steps icon vedio 

  // And Navigator gained by Computer Science Tutorials vedio in Youtube 
   
 

export default function Splash ({navigation}) {
    
  
  return(
 
    <View style = {styles.cointainer}>
      <View style ={styles.Header}>
        <Animatable.Image
        animation="bounceIn"
        duration = {2000}
         style = {styles.image}
          source={require('../Images/beg.jpeg')}
        />
      </View>
      <Animatable.View style = {styles.footer} 
       animation = "fadeInUpBig"
      >
         <Text style = {styles.Title}>
             Stay Connected With EveryOne 
             
         </Text >
         <Text style = {styles.text}>
         Sign in with your Account 
         </Text>

            <View style = {styles.button}>
          <TouchableOpacity 
            onPress = {()=> navigation.navigate('ScreenTwo')}
            style = {styles.signIn} 
          >
               <Text style = {styles.textsign}>Get Started</Text>

              <Icon   
                name = "navigate-next"
                color = "#fff"
                size={20}
              />
                
          </TouchableOpacity>
          </View>
      </Animatable.View>
      
    </View>
  )
}

const styles = StyleSheet.create({
       cointainer : {
        flex : 1,
        backgroundColor : '#009387'
       },
       Header : {
          flex : 2,
          alignItems :'center',
          justifyContent :'center',
       },
       footer : {
         flex : 1,
         backgroundColor : '#fff',
         borderTopLeftRadius : 40,
         borderTopRightRadius : 40,
         paddingHorizontal : 30,
         paddingVertical : 50,
       },
       image : {
          width : 200,
          height : 200,
          borderRadius : 150,
          resizeMode : 'contain',
          borderWidth : 1,
          borderColor : 'black'
       },
       Title : {
           color : '#05375a',
           fontSize : 30,
           fontWeight : 'bold',
       },
       text : {
        color : 'grey',
         marginTop : 5,
       },
       button : {
        alignItems : 'flex-end',
        marginTop : 30
       },
       signIn : {
        width : 150, 
        height : 40,
        backgroundColor : '#009387',
        alignItems :'center',
        justifyContent :'center',
        borderRadius : 50,
        flexDirection : 'row',
       },
       textsign : {
              color : 'white',
              fontWeight : 'bold',
       }

});

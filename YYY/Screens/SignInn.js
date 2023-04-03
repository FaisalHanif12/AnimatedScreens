import React, {useState} from 'react';

import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



import  Icon  from 'react-native-vector-icons/FontAwesome';

import  Feather  from 'react-native-vector-icons/Feather';

import  Fontisto from 'react-native-vector-icons/Fontisto';

import * as Animatable from 'react-native-animatable';

import { TextInput } from 'react-native-gesture-handler';

// This Icons Built By the vedio of code steps icon vedio 

// And Navigator gained by Computer Science Tutorials vedio in Youtube 


export default function Loginn({navigation}){
    
    const [data , setdata] = useState({
      email : '',
      password : '',
      checktextinput : false,
      secureTextEntry : true,
    })
    /*
    const fun = (val)=>{
       if(val.length =! 0){
          setdata({
            ...data,
            email : val,
            checktextinput : true,
          });
       }else 
       {
        setdata({
          ...data,
          email : val,
          checktextinput : false,
        });
       }
      }
      */ 

  return(
     <View  style = {styles.cointainer}>
        <View style = {styles.Header}>
                <Text style = {styles.text_header}>
                    Rejister Here! 
                </Text>
        </View>
        <Animatable.View 
        animation= "fadeInUpBig"
        style = {styles.footer}>

            <Text style = {styles.text_footer}>Name</Text>
              <View style = {styles.action}>
                  <Icon  
                    name="user-o"
                    color = "#05375a"
                    size = {20}
                    style = {{marginTop : 15}}
                  />

                  <TextInput 
                    placeholder='Your Name'
                    style = {styles.text_input}
                   // onChangeText  = {(val)=> fun(val)}
                  />
                    <Animatable.View 
                    animation= "bounceIn"
                    duration= {4000}
                    >
                    <Feather  
                    name='check-circle'
                    color={'green'}
                    size ={18}
                    style = {{marginTop : 20}}
                  />
                    </Animatable.View>
              
              </View>
          
           <Text style = {styles.text_footer}>Email</Text>
              <View style = {styles.action}>
                  <Fontisto  
                    name="email"
                    color = "#05375a"
                    size = {20}
                    style = {{marginTop : 15}}
                  />

                  <TextInput 
                    placeholder='Your Email'
                    style = {styles.text_input}
                   // onChangeText  = {(val)=> fun(val)}
                  />
                    <Animatable.View 
                    animation= "bounceIn"
                    duration= {4000}
                    >
                    <Feather  
                    name='check-circle'
                    color={'green'}
                    size ={18}
                    style = {{marginTop : 20}}
                  />
                    </Animatable.View>
                  
              
              </View>
              <Text style = {styles.text_footer}>Password</Text>
              <View style = {styles.action}>
                  <Icon  
                    name="lock"
                    color = "#05375a"
                    size = {25}
                    style = {{marginTop : 13}}
                  />

                  <TextInput 
                    placeholder='Your Password'
                    secureTextEntry ={true}
                    style = {styles.text_input}
                  />
                  <Animatable.View 
                     animation= "bounceIn"
                     duration= {4000}
                  >
                  <Feather  
                    name='eye-off'
                    color={'green'}
                    size ={18}
                    style = {{marginTop : 20}}
                  />
                  </Animatable.View>
                 
              </View>


              <Text style = {styles.text_footer}> Confirm Password</Text>
              <View style = {styles.action}>
                  <Icon  
                    name="lock"
                    color = "#05375a"
                    size = {25}
                    style = {{marginTop : 13}}
                  />

                  <TextInput 
                    placeholder='Confirm Password'
                    secureTextEntry ={true}
                    style = {styles.text_input}
                  />
                  <Animatable.View 
                     animation= "bounceIn"
                     duration= {4000}
                  >
                  <Feather  
                    name='eye-off'
                    color={'green'}
                    size ={18}
                    style = {{marginTop : 20}}
                  />
                  </Animatable.View>
                 
              </View>
                            
              <TouchableOpacity style = {styles.button} 
                onPress = {()=> navigation.navigate('SignIn')}
              >
                  <View style = {styles.signin}>
                    <Text style = {styles.textsign}>
                      Sign Up
                    </Text>
                  </View>
              </TouchableOpacity>
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
      flex : 1,
      alignItems :'flex-start',
      justifyContent : 'center',
   },
   footer : {
     flex : 2.7,
     backgroundColor : '#fff',
     borderTopLeftRadius : 40,
     borderTopRightRadius : 40,
     paddingHorizontal : 30,
     paddingVertical : 40,
   },
   text_header : {
     fontSize : 40,
     color : 'white',
     fontWeight : 'bold',
     marginLeft : 10,
   },
   text_footer : {
    fontSize : 18,
    color : '#05375a',   
   },
   button : {
    alignItems : 'center',
    marginTop : 35,
   }, 
   text_input : {
        flex : 1,
        paddingLeft : 14,
        color : '#05375a',
        marginBottom : 2,
   }, 
   signin: {
      width : '100%',
      height : 50,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#009387',
      borderRadius : 20
   },
   signin1: {
    width : '100%',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'white',
    borderWidth : 2,
    borderColor : '#009387',
    borderRadius : 20,
 },
   textsign : {
       fontSize : 18, 
       fontWeight : 'bold',
       color : 'white'
   },
   textsign1 : {
    fontSize : 18, 
    fontWeight : 'bold',
    color : '#009387'
},
   action : {
       flexDirection : 'row',
       marginTop : 10,
       borderBottomWidth : 0.8,
       borderBottomcolor : '#f2f2f2',
       paddingBottom : 5,
       marginBottom : 20
   }
});
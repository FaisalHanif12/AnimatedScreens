
import React from 'react';

import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';


// This Icons Built By the vedio of code steps icon vedio 

// And Navigator gained by Computer Science Tutorials vedio in Youtube 

  
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginn from './Screens/Loginn';
import SignInn from './Screens/SignInn';
import Home from './Screens/Home';
import Splash from './Screens/Splash';
import OrdersHistory from './Screens/OrderHistory';

const Stack = createNativeStackNavigator();


const App =()=>{
  return(
              
<NavigationContainer>
<Stack.Navigator
 screenOptions={{
     header: ()=> null
 }}
initialRouteName='Splash'>
<Stack.Screen  
name="Screenone" component={Splash} 
/>
<Stack.Screen name="ScreenTwo" component={Loginn} 
/>
<Stack.Screen name="SignIn" component={SignInn} 
/>
<Stack.Screen name="Home" component={Home} 
/>

<Stack.Screen name="OrderHistory" component={OrdersHistory} 
/>
</Stack.Navigator>

</NavigationContainer>

  )
}


export default App;

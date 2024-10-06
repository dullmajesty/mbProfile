import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import 'react-native-gesture-handler';
import Profile from './content/Profile';
import Settings from './content/Settings';
import ManageUser from './content/ManageUser';
import Logout from './content/Logout';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ManageUser" component={ManageUser} />
        <Stack.Screen name="Logout" component={Logout} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


// Make sure to wrap App with ThemeProvider here
export default App;
  
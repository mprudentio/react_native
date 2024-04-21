import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import FormScreen from './Screens/FormScreen';
import MapScreen from './Screens/MapScreen';
import { NameProvider } from './NameContext';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NameProvider>
      <NavigationContainer>
        <Tab.Navigator  screenOptions={{
          headerStyle: {
            backgroundColor: '#797979', 
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} >
        <Tab.Screen name="Home"  component={HomeScreen} options={{tabBarIcon:()=><Entypo name="home" size={24} color="black" /> }} />
        <Tab.Screen name="Form"  component={FormScreen} options={{tabBarIcon:()=><AntDesign name="form" size={24} color="black" />}}/>
        <Tab.Screen name="Map" component={MapScreen} options={{tabBarIcon:() => <FontAwesome name="map" size={24} color="black" />}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NameProvider>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './screens/Dashboard';
import Notification from './screens/Notification';
import Statistics from './screens/Statistics';
import Scanner from './screens/Scanner';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Tab.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />
        <Tab.Screen name="Scanner" component={Scanner} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

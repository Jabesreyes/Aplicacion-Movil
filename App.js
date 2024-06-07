import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import PatientsList from './screens/PatientsList';
import PatientDetails from './screens/PatientsDetails';
import NewPatientForm from './screens/NewPatientForm'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignInScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="PatientsList" component={PatientsList} />
        <Stack.Screen name="PatientDetails" component={PatientDetails} />
        <Stack.Screen name="NewPatientForm" component={NewPatientForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


import React from 'react';
import  {NavigationContainer} from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import LibraryPage from './LibraryPage';
import CameraPage from './Camera';
import Camera from './Camera';
export default function App() {
   const Stack = createNativeStackNavigator();
    return(

      <NavigationContainer>
          <Stack.Navigator>
                <Stack.Screen name="Library" component={LibraryPage} />
                <Stack.Screen name="Camera" component={Camera}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
};

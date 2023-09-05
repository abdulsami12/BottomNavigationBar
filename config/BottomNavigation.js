import * as React from 'react';

import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';

import { Text, BottomNavigation } from 'react-native-paper';
import Profille from '../Screen/Profile';
import { View } from 'react-native';

import { Button } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function BottomNavigations() {



    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });
  
    const { open } = state;
  
  return (

   
    <NavigationContainer >







        
      <Tab.Navigator    screenOptions={{
        headerShown: false,
    
      }}    

      
      >
        <Tab.Screen name="Home" component={Home} />



        
        <Tab.Screen name="Settings" component={Profille} />
      </Tab.Navigator>






<View >

<PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </PaperProvider>

</View>
    </NavigationContainer>

  );
}
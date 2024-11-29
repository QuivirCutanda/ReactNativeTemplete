import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import History from '../screens/History';
import Geography from '../screens/Geography';
import Tourism from '../screens/Tourism';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: { backgroundColor: '#00796B' },
        headerTintColor: '#fff',
        drawerStyle: { backgroundColor: '#E0F2F1' },
        drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
      }}
    >
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="History" component={History} />
      <Drawer.Screen name="Geography" component={Geography} />
      <Drawer.Screen name="Tourism" component={Tourism} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

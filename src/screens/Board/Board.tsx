import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyPrayers} from '../MyPrayers';
import {Subscribed} from '../Subscribed';

interface Props {}

const Tab = createMaterialTopTabNavigator();

export const Board: React.FC<Props> = () => (
  <>
    <Tab.Navigator>
      <Tab.Screen name="My Prayers" component={MyPrayers} />
      <Tab.Screen name="Subscribed" component={Subscribed} />
    </Tab.Navigator>
  </>
);

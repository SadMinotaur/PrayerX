import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from './Subscribed';
import {MyPrayers} from './MyPrayers';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface Props {}

const Tab = createMaterialTopTabNavigator();

export const Board: React.FC<Props> = () => (
  <>
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          flexDirection: 'row-reverse',
        },
        labelStyle: {
          fontSize: 13,
          lineHeight: 15.51,
        },
        activeTintColor: '#72A8BC',
        inactiveTintColor: '#C8C8C8',
        showIcon: true,
        indicatorStyle: {backgroundColor: '#72A8BC'},
      }}>
      <Tab.Screen name="My Prayers" component={MyPrayers} />
      <Tab.Screen
        name="Subscribed"
        options={{
          tabBarIcon: () => (
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>0</Text>
            </View>
          ),
        }}
        component={Subscribed}
      />
    </Tab.Navigator>
  </>
);

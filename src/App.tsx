import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Title} from './common-components/Title';
import {PlusButton} from './common-components/PlusButton';
import {Board} from './screens/Board';
import {Settings} from './common-components/Settings';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyDesc">
        <Stack.Screen
          name="MyDesc"
          options={{
            headerStyle: {
              borderBottomWidth: 1,
              elevation: 0,
              height: 64,
            },
            headerRight: () => <PlusButton />,
            headerTitle: () => <Title name="My Desc" />,
          }}
          component={AllBoards}
        />
        <Stack.Screen
          name="TODO"
          options={{
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerRight: () => <Settings />,
            headerTitle: () => <Title name="TODO" />,
          }}
          component={Board}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

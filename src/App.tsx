import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Title} from './common-components/Title';
import {PlusButton} from './common-components/AddButton';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyDesc">
        <Stack.Screen
          name="MyDesc"
          options={{
            headerStyle: {
              borderWidth: 1,
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS
              height: 64,
            },
            headerRight: () => <PlusButton />,
            headerTitle: () => <Title name="My Desc" />,
          }}
          component={AllBoards}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

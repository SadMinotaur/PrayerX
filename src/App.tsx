import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Board} from './screens/Board';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {PlusIcon} from './common-components/PlusIcon';
import {Title} from './common-components/Title';
import {SettingsIcon} from './common-components/SettingsIcon';
import {Login} from './screens/Login';

const Stack = createStackNavigator();

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={store.getState().user.id === -1 ? 'Login' : 'MyDesc'}>
        <Stack.Screen
          name="Login"
          options={{
            headerStyle: {
              elevation: 0,
            },
            headerTitle: () => <Title name="User" />,
          }}
          component={Login}
        />
        <Stack.Screen
          name="MyDesc"
          options={{
            headerShown: false,
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
            headerLeft: () => null,
            headerRight: () => <SettingsIcon />,
            headerTitle: () => <Title movedRight={true} name="TODO" />,
          }}
          component={Board}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Board} from './screens/Board';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {PlusIcon} from './components/PlusIcon';
import {Title} from './common-components/Title';
import {SettingsIcon} from './components/SettingsIcon';
import {Login} from './screens/Login';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            store.getState().user.email === '' ? 'Login' : 'MyDesc'
            // 'Login'
          }>
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
              headerStyle: {
                borderBottomWidth: 1,
                elevation: 0,
                height: 64,
              },
              headerLeft: () => null,
              headerRight: () => <PlusIcon />,
              headerTitle: () => <Title moved={true} name="My Desc" />,
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
              headerTitle: () => <Title moved={true} name="TODO" />,
            }}
            component={Board}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

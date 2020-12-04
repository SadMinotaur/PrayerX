import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Board} from './screens/Board';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {PlusButton} from './components/PlusButton';
import {Title} from './components/Title';
import {Settings} from './components/Settings';
import {Login} from './screens/Login';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            store.getState().user.token === '' ? 'Login' : 'MyDesc'
          }>
          <Stack.Screen
            name="Login"
            options={{
              headerStyle: {
                elevation: 0,
              },
              headerTitle: () => <Title name="Login" />,
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
              headerRight: () => <PlusButton />,
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
              headerRight: () => <Settings />,
              headerTitle: () => <Title moved={true} name="TODO" />,
            }}
            component={Board}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

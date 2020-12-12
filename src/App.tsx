import React from 'react';
import {AllBoards} from './screens/AllBoards/AllBoards';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Board} from './screens/Board';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Title} from './common-components/Title';
import {Login} from './screens/Login';
import {CardScreen} from './screens/Card';

const Stack = createStackNavigator();

export const App: React.FC = () => (
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
            headerShown: false,
          }}
          component={Board}
        />
        <Stack.Screen
          name="Card"
          options={{
            headerShown: false,
          }}
          component={CardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

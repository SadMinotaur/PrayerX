import React from 'react';
import {AllColumns} from './screens/AllColumns/AllColumns';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ColumnComponent} from './screens/Column';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {Title} from './common-components/Title';
import {Login} from './screens/Login';
import {CardScreen} from './screens/Card';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

export const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Login'}>
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
            component={AllColumns}
          />
          <Stack.Screen
            name="TODO"
            options={{
              headerShown: false,
            }}
            component={ColumnComponent}
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
    </PersistGate>
  </Provider>
);

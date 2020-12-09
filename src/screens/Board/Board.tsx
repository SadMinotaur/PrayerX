import React, {useCallback, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from './Subscribed';
import {MyPrayers} from './MyPrayers';
import {Alert, Text, View} from 'react-native';
import {styles} from './styles';
import {Title} from '../../common-components/Title';
import {SettingsIcon} from '../../common-components/SettingsIcon';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {promiseListener, RootState} from '../../store/store';
import {Column} from '../../store/columns/columnsTypes';
import {LoadingPopup} from '../../common-components/LoadingPopup';
import {ColumnModal} from '../../common-components/ColumnModal';
import {
  updateColumnFailure,
  updateColumnRequest,
  updateColumnSuccess,
} from '../../store/columns/columnsAction';

interface RouteProps {
  id: number;
}

export const Board: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  const route = useRoute();
  // Should be always a column there
  const column: Column = useSelector((state: RootState) =>
    state.columns.find(({id}) => id === (route.params as RouteProps).id),
  ) as Column;

  const [settingsModalState, setSettingsModalState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const changeColumn = useCallback(
    (nameInput: string, descInput: string) => {
      setSettingsModalState(false);
      setIsLoading(true);
      promiseListener
        .createAsyncFunction({
          start: updateColumnRequest.type,
          resolve: updateColumnSuccess.type,
          reject: updateColumnFailure.type,
        })
        .asyncFunction({
          id: column.id,
          title: nameInput,
          description: descInput,
        })
        .then(
          () => setIsLoading(false),
          () => showError(),
        );
    },
    [column.id],
  );

  function showError(): void {
    Alert.alert('Something went wrong!');
    setIsLoading(false);
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Title movedRight={true} name={column.title} />
        </View>
        <View style={styles.headerAddIcon}>
          <SettingsIcon onTap={() => setSettingsModalState(true)} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        style={styles.mainContainer}>
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
          <Tab.Screen
            name="My Prayers"
            children={() => MyPrayers({id: column.id})}
          />
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
      </ScrollView>
      <ColumnModal
        topName="Update column"
        state={settingsModalState}
        onClose={() => setSettingsModalState(false)}
        onSubmit={changeColumn}
      />
      <LoadingPopup state={isLoading} />
    </>
  );
};

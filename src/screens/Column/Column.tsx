import React, {useCallback, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Subscribed} from './Subscribed';
import {MyPrayers} from './MyPrayers';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Title} from '../../common-components/Title';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ColumnModal} from '../../common-components/ColumnModal';
import {updateColumnRequest} from '../../store/columns/columnsAction';
import {CurrentColumnSelector} from '../../store/columns/columnSelectors';
import {SettingsIcon} from '../../icons-components/SettingsIcon';

interface RouteProps {
  id: number;
}

export const ColumnComponent: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();
  const route = useRoute();
  const dispatch = useDispatch();

  const {column} = useSelector((state: RootState) =>
    CurrentColumnSelector(state, {id: (route.params as RouteProps).id}),
  );

  const [settingsModalState, setSettingsModalState] = useState(false);

  const changeColumn = useCallback(
    (nameInput: string, descInput: string) => {
      setSettingsModalState(false);
      dispatch(
        updateColumnRequest({
          id: column.id,
          title: nameInput,
          description: descInput,
        }),
      );
    },
    [column.id, dispatch],
  );

  // Works only this way
  const MyPrayersScreen = () => MyPrayers({idColumn: column.id});

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
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Tab.Navigator
          tabBarOptions={{
            tabStyle: {
              flexDirection: 'row-reverse',
            },
            labelStyle: {
              fontFamily: 'SFUIText-Semibold',
              fontSize: 13,
              lineHeight: 15.51,
            },
            activeTintColor: '#72A8BC',
            inactiveTintColor: '#C8C8C8',
            showIcon: true,
            indicatorStyle: {backgroundColor: '#72A8BC'},
          }}>
          <Tab.Screen name="My Prayers" component={MyPrayersScreen} />
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
    </>
  );
};

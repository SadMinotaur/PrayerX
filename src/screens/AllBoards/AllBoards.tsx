import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {BoardName} from '../../components/BoardName';
import {Column} from '../../store/columns/columnsTypes';
import {RootState} from '../../store/store';
import {styles} from './styles';

export const AllBoards: React.FC = () => {
  const navigation = useNavigation();
  const columns: Column[] = useSelector((state: RootState) => state.columns);

  return (
    <>
      <View style={styles.container}>
        {columns.map(({id, title}) => (
          <BoardName
            key={title}
            onTap={() => {
              navigation.navigate('TODO', {id: id});
            }}
            name={title}
          />
        ))}
      </View>
    </>
  );
};

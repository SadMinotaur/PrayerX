import React from 'react';
import {View} from 'react-native';
import {Boards} from '../../components/BoardName';
import {styles} from './styles';

export const AllBoards: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Boards name="Test" />
        <Boards name="Test" />
        <Boards name="Test" />
      </View>
    </>
  );
};

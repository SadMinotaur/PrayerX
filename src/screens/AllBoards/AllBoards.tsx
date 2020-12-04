import React from 'react';
import {View} from 'react-native';
import {BoardName} from '../../components/BoardName';
import {styles} from './styles';

export const AllBoards: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <BoardName name="Test" />
        <BoardName name="Test" />
        <BoardName name="Test" />
      </View>
    </>
  );
};

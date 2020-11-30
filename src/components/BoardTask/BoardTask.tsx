import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface BoardProps {
  name: string;
}

export const BoardTask: React.FC<BoardProps> = ({name}) => {
  return <View style={styles.boardBorder}></View>;
};

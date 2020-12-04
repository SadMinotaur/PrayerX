import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface BoardProps {
  name: string;
}

export const BoardName: React.FC<BoardProps> = ({name}) => {
  return (
    <View style={styles.boardBorder}>
      <Text style={styles.boardText}>{name}</Text>
    </View>
  );
};

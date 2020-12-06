import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface BoardProps {
  name: string;
  onTap: () => void;
}

export const BoardName: React.FC<BoardProps> = ({name, onTap}) => (
  <View onTouchStart={onTap} style={styles.boardBorder}>
    <Text style={styles.boardText}>{name}</Text>
  </View>
);

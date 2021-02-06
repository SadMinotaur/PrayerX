import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  name: string;
  onTap?: () => void;
}

export const ColumnName: React.FC<Props> = ({name, onTap}) => (
  <View onTouchEndCapture={onTap} style={styles.boardBorder}>
    <Text style={styles.boardText}>{name}</Text>
  </View>
);

import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface TitleProps {
  name: string;
}

export const Boards: React.FC<TitleProps> = (props) => {
  return <Text style={styles.text}>{props.name}</Text>;
};

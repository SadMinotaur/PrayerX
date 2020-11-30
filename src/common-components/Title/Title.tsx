import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = ({name}) => {
  return <Text style={styles.text}>{name}</Text>;
};

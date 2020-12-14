/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface TitleProps {
  name: string;
  movedRight?: boolean;
  movedLeft?: boolean;
}

export const Title: React.FC<TitleProps> = ({name, movedRight, movedLeft}) => (
  <>
    <Text
      style={[
        styles.text,
        !movedRight && {marginLeft: 0},
        movedLeft && {
          marginLeft: 30,
          textAlign: 'left',
        },
      ]}>
      {name}
    </Text>
  </>
);

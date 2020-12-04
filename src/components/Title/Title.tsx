import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

interface TitleProps {
  name: string;
  moved?: boolean;
}

export const Title: React.FC<TitleProps> = ({name, moved: movedRight}) => (
  <>
    <Text style={[styles.text, !movedRight ? {marginLeft: 0} : {}]}>
      {name}
    </Text>
  </>
);

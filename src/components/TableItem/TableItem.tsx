import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  topText: string;
  bodyText: string;
  bottom: boolean;
}

export const TableItem: React.FC<Props> = ({topText, bodyText, bottom}) => (
  <View style={bottom ? styles.statsTableItemBot : styles.statsTableItemTop}>
    <Text style={styles.statsTableTextNumbers}>{topText}</Text>
    <Text style={styles.statsTableTextNormal}>{bodyText}</Text>
  </View>
);

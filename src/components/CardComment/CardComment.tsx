import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  content: string;
  time: string;
}

export const CardComment: React.FC<Props> = ({title, content, time}) => {
  return (
    <View style={styles.comments}>
      <View style={styles.shouldBeImage} />
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textTime}>{time}</Text>
        </View>
        <View>
          <Text style={styles.textContent}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

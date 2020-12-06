import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Swipeable} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

interface Props {}

export const SwipeableCard: React.FC<Props> = () => (
  <Swipeable
    renderRightActions={() => (
      <View style={styles.swipeDelete}>
        <Text style={styles.swipeDeleteText}>Delete</Text>
      </View>
    )}>
    <View style={styles.swipeContainer}>
      <View style={styles.line} />
      <CheckBox
        style={styles.checkBox}
        disabled={false}
        value={true}
        onValueChange={() => false}
      />
      <Text>Prayer item two</Text>
    </View>
  </Swipeable>
);

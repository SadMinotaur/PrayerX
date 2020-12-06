import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PlusIcon} from '../../common-components/PlusIcon';
import {SwipeableCard} from '../../components/SwipeableCard';
import {styles} from './styles';

export const MyPrayers: React.FC = () => (
  <>
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <View style={styles.textInputBorder}>
        <PlusIcon size={19} />
        <TextInput
          style={styles.textInput}
          onChangeText={() => {}}
          placeholder={'Add a prayer'}
        />
      </View>
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <SwipeableCard />
      <TouchableOpacity style={styles.showAnsweredButton} onPress={() => {}}>
        <Text style={styles.showAnsweredText}>Show answered prayers</Text>
      </TouchableOpacity>
    </ScrollView>
  </>
);

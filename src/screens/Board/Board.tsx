import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PlusButton} from '../../common-components/PlusButton';
import {styles} from './styles';

export const Board: React.FC = () => {
  return (
    <>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>My prayers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Subscribed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.textInputBorder}>
          <PlusButton />
          <TextInput
            style={styles.textInput}
            onChangeText={() => {}}
            placeholder={'Add a prayer'}
          />
        </View>
        <TouchableOpacity style={styles.showAnsweredButton} onPress={() => {}}>
          <Text style={styles.showAnsweredText}>Show answered prayers</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

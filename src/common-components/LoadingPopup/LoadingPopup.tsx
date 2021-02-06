import React from 'react';
import {Modal, Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  state: boolean;
  text?: string;
}

export const LoadingPopup: React.FC<Props> = ({state, text}) => (
  <Modal animationType="fade" transparent={true} visible={state}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>{text ? text : 'Waiting response...'}</Text>
      </View>
    </View>
  </Modal>
);

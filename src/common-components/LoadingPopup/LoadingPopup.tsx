import React from 'react';
import {Modal, Text, View} from 'react-native';
import {styles} from './styles';

interface Props {
  state: boolean;
}

export const LoadingPopup: React.FC<Props> = ({state}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={state}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Waiting response...</Text>
        </View>
      </View>
    </Modal>
  );
};

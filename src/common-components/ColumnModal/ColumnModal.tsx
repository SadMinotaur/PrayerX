import React, {useState} from 'react';
import {Button, Modal, Text, TextInput, View} from 'react-native';
import {styles} from './styles';

interface Props {
  topName: string;
  state: boolean;
  onClose: () => void;
  onSubmit: (nameInput: string, descInput: string) => void;
}

export const ColumnModal: React.FC<Props> = ({
  topName,
  state,
  onClose,
  onSubmit,
}) => {
  const [columnNameInput, setColumnNameInput] = useState('');
  const [columnDescInput, setColumnDescInput] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={state}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{topName}</Text>
          <TextInput
            style={styles.modalInput}
            autoCompleteType="name"
            placeholder={'Column name'}
            value={columnNameInput}
            onChangeText={setColumnNameInput}
          />
          <TextInput
            style={styles.modalInput}
            autoCompleteType="name"
            placeholder={'Column description'}
            value={columnDescInput}
            onChangeText={setColumnDescInput}
          />
          <Button
            onPress={() => {
              onSubmit(columnNameInput, columnDescInput);
              setColumnNameInput('');
              setColumnDescInput('');
            }}
            title={'Submit'}
          />
        </View>
      </View>
    </Modal>
  );
};

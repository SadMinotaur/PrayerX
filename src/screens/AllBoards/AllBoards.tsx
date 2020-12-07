import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Button, Modal, ScrollView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PlusIcon} from '../../common-components/PlusIcon';
import {Title} from '../../common-components/Title';
import {BoardName} from '../../components/BoardName';
import {addColumnRequest} from '../../store/columns/columnsAction';
import {Column} from '../../store/columns/columnsTypes';
import {RootState} from '../../store/store';
import {styles} from './styles';

export const AllBoards: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const columns: Column[] = useSelector((state: RootState) => state.columns);

  const [modalState, setModalState] = useState(false);
  const [columnNameInput, setColumnNameInput] = useState('');
  const [columnDescInput, setColumnDescInput] = useState('');

  const addColumn = useCallback(() => {
    setModalState((ps) => !ps);
    dispatch(addColumnRequest({desc: columnNameInput, name: columnNameInput}));
    setColumnNameInput('');
    setColumnDescInput('');
  }, [columnNameInput, dispatch]);

  return (
    <>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Title movedRight={true} name="My Desc" />
          </View>
          <View style={styles.headerAddIcon}>
            <PlusIcon onClick={() => setModalState((ps) => !ps)} size={16} />
          </View>
        </View>
        {columns.map(({id, title}) => (
          <BoardName
            key={title}
            onTap={() => {
              navigation.navigate('TODO', {id: id});
            }}
            name={title}
          />
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalState}
        onRequestClose={() => setModalState(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Enter new Column</Text>
            <TextInput
              style={styles.modalInput}
              autoCompleteType="name"
              placeholder={'Column name'}
              value={columnNameInput}
              onChangeText={(v: string) => setColumnNameInput(v)}
            />
            <TextInput
              style={styles.modalInput}
              autoCompleteType="name"
              placeholder={'Column description'}
              value={columnDescInput}
              onChangeText={(v: string) => setColumnDescInput(v)}
            />
            <Button onPress={addColumn} title={'Submit'} />
          </View>
        </View>
      </Modal>
    </>
  );
};

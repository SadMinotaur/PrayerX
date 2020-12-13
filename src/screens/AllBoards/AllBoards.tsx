import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ColumnModal} from '../../common-components/ColumnModal';
import {LoadingPopup} from '../../common-components/LoadingPopup';
import {Title} from '../../common-components/Title';
import {BoardName} from '../../components/BoardName';
import {PlusIcon} from '../../icons-components/PlusIcon';
import {
  getCardsFailure,
  getCardsRequest,
  getCardsSuccess,
} from '../../store/cards/cardsAction';
import {
  addColumnFailure,
  addColumnRequest,
  addColumnSuccess,
} from '../../store/columns/columnsAction';
import {Column} from '../../store/columns/columnsTypes';
import {promiseListener, RootState} from '../../store/store';
import {styles} from './styles';

export const AllBoards: React.FC = () => {
  const navigation = useNavigation();
  const columns: Column[] = useSelector((state: RootState) => state.columns);

  const [modalAddColState, setAddColModalState] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const addColumn = useCallback((nameInput: string, descInput: string) => {
    setAddColModalState(false);
    setModalLoading(true);
    promiseListener
      .createAsyncFunction({
        start: addColumnRequest.type,
        resolve: addColumnSuccess.type,
        reject: addColumnFailure.type,
      })
      .asyncFunction({desc: descInput, name: nameInput})
      .then(
        () => setModalLoading(false),
        () => showError(),
      );
  }, []);

  const getColumnCards = useCallback(
    (id: number) => {
      setModalLoading(true);
      promiseListener
        .createAsyncFunction({
          start: getCardsRequest.type,
          resolve: getCardsSuccess.type,
          reject: getCardsFailure.type,
        })
        .asyncFunction()
        .then(
          () => {
            setModalLoading(false);
            navigation.navigate('TODO', {id: id});
          },
          () => showError(),
        );
    },
    [navigation],
  );

  function showError(): void {
    Alert.alert('Something went wrong!');
    setModalLoading(false);
  }

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Title movedRight={true} name="My Desc" />
        </View>
        <View style={styles.headerAddIcon}>
          <PlusIcon
            backGround={false}
            onTapEnd={() => setAddColModalState(true)}
            size={16}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        style={styles.container}>
        {columns.map(({id, title}) => (
          <BoardName key={id} onTap={() => getColumnCards(id)} name={title} />
        ))}
      </ScrollView>
      <ColumnModal
        topName="Enter new column"
        state={modalAddColState}
        onClose={() => setAddColModalState(false)}
        onSubmit={addColumn}
      />
      <LoadingPopup state={modalLoading} />
    </>
  );
};

import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {PlusIcon} from '../../../common-components/PlusIcon';
import {SwipeableCard} from '../../../components/SwipeableCard';
import {
  createCardsFailure,
  createCardsRequest,
  createCardsSuccess,
} from '../../../store/cards/cardsAction';
import {promiseListener, RootState} from '../../../store/store';
import {styles} from './styles';

interface Props {
  idColumn: number;
}

export const MyPrayers: React.FC<Props> = ({idColumn}) => {
  const colCards = useSelector((state: RootState) =>
    state.cards.filter((v) => idColumn === v.columnId),
  );

  const [cardsState, setCardsState] = useState(true);
  const [newCardName, setNewCardName] = useState('');

  const createCard = useCallback(() => {
    if (newCardName.trim() === '') return;
    promiseListener
      .createAsyncFunction({
        start: createCardsRequest.type,
        resolve: createCardsSuccess.type,
        reject: createCardsFailure.type,
      })
      .asyncFunction({
        title: newCardName,
        description: '',
        checked: false,
        column: idColumn,
      })
      .then(
        () => {},
        () => Alert.alert('Something went wrong!'),
      );
  }, [idColumn, newCardName]);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.containerAlign}
        style={styles.container}>
        <View style={styles.textInputBorder}>
          <PlusIcon onTapEnd={createCard} marginTop={14} size={19} />
          <TextInput
            style={styles.textInput}
            autoCompleteType="name"
            onChangeText={(v) => setNewCardName(v)}
            value={newCardName}
            placeholder={'Add a prayer'}
          />
        </View>
        {colCards.map(({id}) => (
          <SwipeableCard key={id} />
        ))}
        <TouchableOpacity
          style={styles.showAnsweredButton}
          onPress={() => setCardsState((ps) => !ps)}>
          <Text style={styles.showAnsweredText}>
            {cardsState ? 'Show answered prayers' : 'Hide ansewred prayers'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {LoadingPopup} from '../../../common-components/LoadingPopup';
import {PlusIcon} from '../../../icons-components/PlusIcon';
import {SwipeableCard} from '../../../components/SwipeableCard';
import {
  createCardsFailure,
  createCardsRequest,
  createCardsSuccess,
} from '../../../store/cards/cardsAction';
import {promiseListener, RootState} from '../../../store/store';
import {styles} from './styles';
import {
  ColumnCheckedCardsSelector,
  ColumnUncheckedCardsSelector,
} from '../../../store/columns/columnSelectors';
import {useRoute} from '@react-navigation/native';

interface Props {
  idColumn: number;
}

interface RouteProps {
  id: number;
}

export const MyPrayers: React.FC<Props> = ({idColumn}) => {
  const route = useRoute();
  const {cardsChecked} = useSelector((state: RootState) =>
    ColumnCheckedCardsSelector(state, {
      idColumn: (route.params as RouteProps).id,
    }),
  );
  const {cardsUnchecked} = useSelector((state: RootState) =>
    ColumnUncheckedCardsSelector(state, {
      idColumn: (route.params as RouteProps).id,
    }),
  );

  const [cardsState, setCardsState] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
  const [cardName, setCardName] = useState('');

  const createCard = useCallback(() => {
    if (cardName.trim() === '') {
      return;
    }
    setLoadingState(true);
    promiseListener
      .createAsyncFunction({
        start: createCardsRequest.type,
        resolve: createCardsSuccess.type,
        reject: createCardsFailure.type,
      })
      .asyncFunction({
        title: cardName,
        description: '',
        checked: false,
        column: idColumn,
      })
      .then(
        () => setLoadingState(false),
        () => showError(),
      );
  }, [idColumn, cardName]);

  function showError(): void {
    Alert.alert('Something went wrong!');
    setLoadingState(false);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.containerAlign}
        style={styles.container}>
        <View style={styles.textInputBorder}>
          <PlusIcon onTapEnd={createCard} marginTop={14} size={19} />
          <TextInput
            style={styles.textInput}
            placeholder={'Add a prayer...'}
            value={cardName}
            onChangeText={setCardName}
          />
        </View>
        {cardsChecked.map((card) => (
          <SwipeableCard
            card={card}
            setLoadingState={setLoadingState}
            showError={showError}
            key={card.id}
          />
        ))}
        <TouchableOpacity
          style={styles.showAnsweredButton}
          onPress={() => setCardsState((ps) => !ps)}>
          <Text style={styles.showAnsweredText}>
            {cardsState ? 'Hide ansewred prayers' : 'Show answered prayers'}
          </Text>
        </TouchableOpacity>
        {cardsState &&
          cardsUnchecked.map((card) => (
            <SwipeableCard
              card={card}
              setLoadingState={setLoadingState}
              showError={showError}
              key={card.id}
            />
          ))}
      </ScrollView>
      <LoadingPopup state={loadingState} />
    </>
  );
};

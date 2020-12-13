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
import {ColumnCheckedCardsSelector} from '../../../store/columns/columnSelectors';

interface Props {
  idColumn: number;
}

export const MyPrayers: React.FC<Props> = ({idColumn}) => {
  const {cardsChecked, cardsUnchecked} = useSelector((state: RootState) =>
    ColumnCheckedCardsSelector(state, {
      idColumn: idColumn,
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
          <PlusIcon
            backGround={false}
            onTapEnd={createCard}
            marginTop={14}
            size={19}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Add a prayer...'}
            value={cardName}
            onChangeText={setCardName}
          />
        </View>
        {cardsUnchecked.map((card) => (
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
          cardsChecked.map((card) => (
            <SwipeableCard
              card={card}
              setLoadingState={setLoadingState}
              showError={showError}
              key={card.id}
            />
          ))}
        {/* {cardsState && (
          <FlatList
            data={cardsChecked}
            renderItem={({item}) => (
              <SwipeableCard
                card={item}
                setLoadingState={setLoadingState}
                showError={showError}
                key={item.id}
              />
            )}
          />
        )} */}
      </ScrollView>
      <LoadingPopup state={loadingState} />
    </>
  );
};

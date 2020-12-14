/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CheckBox from '@react-native-community/checkbox';
import {Card} from '../../store/cards/cardsTypes';
import {promiseListener} from '../../store/store';
import {
  deleteCardsFailure,
  deleteCardsRequest,
  deleteCardsSuccess,
  updateCardsFailure,
  updateCardsRequest,
  updateCardsSuccess,
} from '../../store/cards/cardsAction';
import {useNavigation} from '@react-navigation/native';
import {HumanIcon} from '../../icons-components/HumanIcon';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {LeftLine} from '../../icons-components/LeftLine';
import {
  getCommentsFailure,
  getCommentsRequest,
  getCommentsSuccess,
} from '../../store/comments/commentsAction';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  card: Card;
  setLoadingState: (bool: boolean) => void;
  showError: () => void;
}

export const SwipeableCard: React.FC<Props> = ({
  card,
  setLoadingState,
  showError,
}) => {
  const {id, title, checked} = card;
  const navigation = useNavigation();

  const [inputState, setInputState] = useState(false);
  const [updateInput, setUpdateInput] = useState(title);

  const deleteCard = useCallback(() => {
    setLoadingState(true);
    promiseListener
      .createAsyncFunction({
        start: deleteCardsRequest.type,
        resolve: deleteCardsSuccess.type,
        reject: deleteCardsFailure.type,
      })
      .asyncFunction(id)
      .then(
        () => setLoadingState(false),
        () => showError(),
      );
  }, [id, setLoadingState, showError]);

  const updateCard = useCallback(
    (bool: boolean) => {
      setLoadingState(true);
      promiseListener
        .createAsyncFunction({
          start: updateCardsRequest.type,
          resolve: updateCardsSuccess.type,
          reject: updateCardsFailure.type,
        })
        .asyncFunction({
          ...card,
          title: updateInput,
          checked: bool,
        } as Card)
        .then(
          () => setLoadingState(false),
          () => showError(),
        );
    },
    [card, setLoadingState, showError, updateInput],
  );

  const onCardTap = useCallback(() => {
    setLoadingState(true);
    promiseListener
      .createAsyncFunction({
        start: getCommentsRequest.type,
        resolve: getCommentsSuccess.type,
        reject: getCommentsFailure.type,
      })
      .asyncFunction()
      .then(
        () => {
          setLoadingState(false);
          navigation.navigate('Card', {id: id});
        },
        () => showError(),
      );
  }, [id, navigation, setLoadingState, showError]);

  return (
    <Swipeable
      renderLeftActions={() => (
        <View
          onTouchEnd={() => setInputState((ps) => !ps)}
          style={styles.swipeUpdate}>
          <Text style={styles.swipeText}>Update</Text>
        </View>
      )}
      renderRightActions={() => (
        <View onTouchEnd={deleteCard} style={styles.swipeDelete}>
          <Text style={styles.swipeText}>Delete</Text>
        </View>
      )}>
      <View style={styles.swipeContainer}>
        <LeftLine />
        <CheckBox
          style={styles.checkBox}
          disabled={false}
          value={checked}
          onValueChange={() => updateCard(true)}
        />
        {inputState ? (
          <TextInput
            style={styles.input}
            autoCompleteType="name"
            placeholder={'Card name'}
            value={updateInput}
            onChangeText={setUpdateInput}
            onBlur={() => {
              updateCard(false);
              setInputState(false);
            }}
          />
        ) : (
          <View onTouchEnd={onCardTap}>
            <Text
              style={{
                ...styles.cardText,
                textDecorationLine: checked ? 'line-through' : 'none',
              }}>
              {updateInput}
            </Text>
          </View>
        )}
        <HumanIcon />
        <Text style={styles.prayText}>3</Text>
        <HandsIcon backGround={false} />
        <Text style={styles.prayText}>123</Text>
      </View>
    </Swipeable>
  );
};

import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Swipeable} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {PeopleIcon} from '../../icons-components/PeopleIcon';
import {HandsIcon} from '../../icons-components/HandsIcon/HandsIcon';
import {LeftLine} from '../../icons-components/LeftLine';
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

  const checkCard = useCallback(
    (b: boolean) => {
      setLoadingState(true);
      promiseListener
        .createAsyncFunction({
          start: updateCardsRequest.type,
          resolve: updateCardsSuccess.type,
          reject: updateCardsFailure.type,
        })
        .asyncFunction({...card, checked: b} as Card)
        .then(
          () => setLoadingState(false),
          () => showError(),
        );
    },
    [card, setLoadingState, showError],
  );

  return (
    <Swipeable
      renderRightActions={() => (
        <View onTouchEnd={deleteCard} style={styles.swipeDelete}>
          <Text style={styles.swipeDeleteText}>Delete</Text>
        </View>
      )}>
      <View style={styles.swipeContainer}>
        <LeftLine />
        <CheckBox
          style={styles.checkBox}
          disabled={false}
          value={checked}
          onValueChange={() => checkCard(!checked)}
        />
        <Text
          style={{
            ...styles.cardText,
            textDecorationLine: checked ? 'line-through' : 'none',
          }}>
          {title}
        </Text>
        <PeopleIcon />
        <Text style={styles.prayText}>3</Text>
        <HandsIcon />
        <Text style={styles.prayText}>123</Text>
      </View>
    </Swipeable>
  );
};

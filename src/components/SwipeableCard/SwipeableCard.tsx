import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Swipeable} from 'react-native-gesture-handler';
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

  const checkCard = useCallback(() => {
    setLoadingState(true);
    promiseListener
      .createAsyncFunction({
        start: updateCardsRequest.type,
        resolve: updateCardsSuccess.type,
        reject: updateCardsFailure.type,
      })
      .asyncFunction({...card, checked: !checked} as Card)
      .then(
        () => setLoadingState(false),
        () => showError(),
      );
  }, [card, checked, setLoadingState, showError]);

  const onCardTap = useCallback(() => {
    promiseListener
      .createAsyncFunction({
        start: getCommentsRequest.type,
        resolve: getCommentsSuccess.type,
        reject: getCommentsFailure.type,
      })
      .asyncFunction()
      .then(
        () => {
          navigation.navigate('Card', {id: id});
        },
        () => showError(),
      );
  }, [id, navigation, showError]);

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
          onValueChange={checkCard}
        />
        <View onTouchEnd={onCardTap}>
          <Text
            style={{
              ...styles.cardText,
              textDecorationLine: checked ? 'line-through' : 'none',
            }}>
            {title}
          </Text>
        </View>
        <HumanIcon />
        <Text style={styles.prayText}>3</Text>
        <HandsIcon backGround={false} />
        <Text style={styles.prayText}>123</Text>
      </View>
    </Swipeable>
  );
};

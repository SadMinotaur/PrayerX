/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CheckBox from '@react-native-community/checkbox';
import {Card} from '../../store/cards/cardsTypes';
import {
  deleteCardsRequest,
  updateCardsRequest,
} from '../../store/cards/cardsAction';
import {useNavigation} from '@react-navigation/native';
import {HumanIcon} from '../../icons-components/HumanIcon';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {LeftLine} from '../../icons-components/LeftLine';
import {getCommentsRequest} from '../../store/comments/commentsAction';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

interface Props {
  card: Card;
}

export const SwipeableCard: React.FC<Props> = ({card}) => {
  const {id, title, checked} = card;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState(false);
  const [updateInput, setUpdateInput] = useState(title);

  const deleteCard = useCallback(() => {
    dispatch(deleteCardsRequest(id));
  }, [dispatch, id]);

  const updateCard = useCallback(
    (bool: boolean) => {
      dispatch(
        updateCardsRequest({
          ...card,
          title: updateInput,
          checked: bool,
        } as Card),
      );
    },
    [card, dispatch, updateInput],
  );

  const onCardTap = useCallback(() => {
    dispatch(getCommentsRequest());
    navigation.navigate('Card', {id: id});
  }, [dispatch, id, navigation]);

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
        <View style={styles.viewRow}>
          <LeftLine />
          <CheckBox
            style={styles.checkBox}
            disabled={false}
            value={checked}
            onValueChange={() => updateCard(true)}
          />
          {inputState ? (
            <TextInput
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
                  textDecorationLine: checked ? 'line-through' : 'none',
                }}>
                {updateInput}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.viewRow}>
          <HumanIcon />
          <Text style={styles.prayText}>3</Text>
          <HandsIcon backGround={false} />
          <Text style={styles.prayText}>123</Text>
        </View>
      </View>
    </Swipeable>
  );
};

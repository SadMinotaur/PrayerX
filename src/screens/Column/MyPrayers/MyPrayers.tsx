import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeableCard} from '../../../components/SwipeableCard';
import {createCardsRequest} from '../../../store/cards/cardsAction';
import {RootState} from '../../../store/store';
import {styles} from './styles';
import {ColumnCheckedCardsSelector} from '../../../store/columns/columnSelectors';
import {PlusIcon} from '../../../icons-components/PlusIcon';

interface Props {
  idColumn: number;
}

export const MyPrayers: React.FC<Props> = ({idColumn}) => {
  const dispatch = useDispatch();

  const {cardsChecked, cardsUnchecked} = useSelector((state: RootState) =>
    ColumnCheckedCardsSelector(state, {
      idColumn,
    }),
  );

  const [cardsState, setCardsState] = useState(true);
  const [cardName, setCardName] = useState('');

  const createCard = useCallback(() => {
    if (cardName.trim() === '') {
      return;
    }
    dispatch(
      createCardsRequest({
        title: cardName,
        description: '',
        checked: false,
        column: idColumn,
      }),
    );
  }, [cardName, dispatch, idColumn]);

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
          <SwipeableCard card={card} key={card.id} />
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
            <SwipeableCard card={card} key={card.id} />
          ))}
      </ScrollView>
    </>
  );
};

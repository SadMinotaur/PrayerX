import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {PlusIcon} from '../../../common-components/PlusIcon';
import {SwipeableCard} from '../../../components/SwipeableCard';
import {styles} from './styles';

export const MyPrayers: React.FC = () => {
  const [cardsState, setCardsState] = useState(true);
  const [newCardName, setNewCardName] = useState('');

  function addNewCard(v: string): void {
    if (v.trim() === '') {
      return;
    }
    setNewCardName(v);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.containerAlign}
        style={styles.container}>
        <View style={styles.textInputBorder}>
          <PlusIcon marginTop={14} size={19} />
          <TextInput
            style={styles.textInput}
            value={newCardName}
            onChangeText={addNewCard}
            placeholder={'Add a prayer'}
          />
        </View>
        <SwipeableCard />
        <TouchableOpacity
          style={styles.showAnsweredButton}
          onPress={() => setCardsState((ps) => !ps)}>
          <Text style={styles.showAnsweredText}>
            {cardsState ? 'Show answered prayers' : 'Hide ansewed prayers'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

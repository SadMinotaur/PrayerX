import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {Card} from '../../store/cards/cardsTypes';
import {RootState} from '../../store/store';
import {styles} from './styles';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {ArrowIcon} from '../../icons-components/ArrowIcon';
import {LeftLine} from '../../icons-components/LeftLine';

interface RouteProps {
  id: number;
}

export const CardScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Should be always a card there
  const card: Card = useSelector((state: RootState) =>
    state.cards.find(({id}) => id === (route.params as RouteProps).id),
  ) as Card;

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <ArrowIcon onTouchEnd={navigation.goBack} />
            <HandsIcon backGround={true} />
          </View>
          <Text style={styles.headerText}>
            Prayer item two which is for my family to love God whole heartedly.
          </Text>
        </View>
        <View style={styles.lastPrayed}>
          <LeftLine />
          <Text style={styles.lastPrayedText}>Last prayed 8 min ago</Text>
        </View>
        <View style={styles.statsTable}>
          <View style={styles.statsTableItem}></View>
          <View style={styles.statsTableItem}></View>
          <View style={styles.statsTableItem}></View>
          <View style={styles.statsTableItem}></View>
        </View>
      </ScrollView>
    </>
  );
};

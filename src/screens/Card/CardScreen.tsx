import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {styles} from './styles';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {ArrowIcon} from '../../icons-components/ArrowIcon';
import {LeftLine} from '../../icons-components/LeftLine';
import {CardSelector} from '../../store/cards/cardsSelectors';

interface RouteProps {
  id: number;
}

export const CardScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {card} = useSelector((state: RootState) =>
    CardSelector(state, {id: (route.params as RouteProps).id}),
  );

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
          <View style={styles.statsTableItemTop}></View>
          <View style={styles.statsTableItemTop}></View>
          <View style={styles.statsTableItemBot}></View>
          <View style={styles.statsTableItemBot}></View>
        </View>
      </ScrollView>
    </>
  );
};

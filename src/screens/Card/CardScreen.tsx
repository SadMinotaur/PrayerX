import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {styles} from './styles';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {ArrowIcon} from '../../icons-components/ArrowIcon';
import {LeftLine} from '../../icons-components/LeftLine';
import {CardSelector} from '../../store/cards/cardsSelectors';
import {PlusIcon} from '../../icons-components/PlusIcon';
import {CardComment} from '../../components/CardComment';
import {CommentsIcon} from '../../icons-components/CommentsIcon';
import {TableItem} from '../../components/TableItem';

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
          <View style={styles.statsTableItemTop}>
            <Text style={styles.statsTableTextDate}>July 25 2017</Text>
            <Text style={styles.statsTableTextNormal}>Date Added</Text>
            <Text style={styles.statsTableTextBlue}>Opened for 4 days</Text>
          </View>
          <TableItem
            bottom={false}
            topText={'123'}
            bodyText={'Times Prayed Total'}
          />
          <TableItem
            bottom={true}
            topText={'63'}
            bodyText={'Times Prayed by Me'}
          />
          <TableItem
            bottom={true}
            topText={'60'}
            bodyText={'Times Prayed by Others'}
          />
        </View>
        <View style={styles.membersContainer}>
          <Text style={styles.membersText}>members</Text>
          <View style={styles.imagesContainer}>
            <Image
              style={styles.image}
              source={require('./../../../assets/people/eeww.png')}
            />
            <Image
              style={styles.image}
              source={require('./../../../assets/people/erfer.png')}
            />
            <PlusIcon backGround={true} size={37} />
          </View>
          <Text style={styles.membersText}>comments</Text>
        </View>
        <CardComment
          title={'Anna Barber'}
          content={'Hey, Hey!'}
          time={'2 days ago'}
        />
        <CardComment
          title={'Anna Barber'}
          content={'Hey, Hey!'}
          time={'2 days ago'}
        />
        <CardComment
          title={'Anna Barber'}
          content={'Hey, Hey!'}
          time={'2 days ago'}
        />
        <View style={styles.addCommentsView}>
          <CommentsIcon onTouchEnd={() => {}} />
          <TextInput
            autoCompleteType={'name'}
            placeholder={'Add a comment...'}
            style={styles.textInput}
          />
        </View>
      </ScrollView>
    </>
  );
};

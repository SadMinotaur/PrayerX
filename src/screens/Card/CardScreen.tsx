import React, {useCallback, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert, Image, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {promiseListener, RootState} from '../../store/store';
import {styles} from './styles';
import {CardSelector} from '../../store/cards/cardsSelectors';
import {CardComment} from '../../components/CardComment';
import {TableItem} from '../../components/TableItem';
import {ArrowIcon} from '../../icons-components/ArrowIcon';
import {HandsIcon} from '../../icons-components/HandsIcon';
import {LeftLine} from '../../icons-components/LeftLine';
import {PlusIcon} from '../../icons-components/PlusIcon';
import {CommentsIcon} from '../../icons-components/CommentsIcon';
import {Comment} from '../../store/comments/commentsTypes';
import {
  AddCommentActionRequestPd,
  addCommentFailure,
  addCommentRequest,
  addCommentSuccess,
} from '../../store/comments/commentsAction';

interface RouteProps {
  id: number;
}

export const CardScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = (route.params as RouteProps).id;
  const {comments, user} = useSelector((state: RootState) =>
    CardSelector(state, {id: id}),
  );

  const [inputState, setInputState] = useState('');

  const createComment = useCallback(() => {
    promiseListener
      .createAsyncFunction({
        start: addCommentRequest.type,
        resolve: addCommentSuccess.type,
        reject: addCommentFailure.type,
      })
      .asyncFunction({
        idCard: id,
        name: inputState,
      } as AddCommentActionRequestPd)
      .then(
        () => {},
        () => showError(),
      );
  }, [id, inputState]);

  function showError(): void {
    Alert.alert('Something went wrong!');
  }

  function diffInTime(comment: Comment): string {
    const diffTime = Math.abs(Date.now() - Date.parse(comment.created));
    const val: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return val.toString() + (val === 1 ? ' day' : ' days') + ' ago';
  }

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
        {comments.map((v: Comment) => (
          <CardComment
            key={v.id}
            // We cant get access to users cards anyway
            title={user}
            content={v.body}
            time={diffInTime(v)}
          />
        ))}
        <View style={styles.addCommentsView}>
          <CommentsIcon onTouchEnd={createComment} />
          <TextInput
            value={inputState}
            onChangeText={setInputState}
            autoCompleteType={'name'}
            placeholder={'Add a comment...'}
            style={styles.textInput}
          />
        </View>
      </ScrollView>
    </>
  );
};

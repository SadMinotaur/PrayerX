import React, {useCallback, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  deleteCommentFailure,
  deleteCommentRequest,
  deleteCommentSuccess,
  updateCommentFailure,
  updateCommentRequest,
  updateCommentSuccess,
} from '../../store/comments/commentsAction';
import {promiseListener} from '../../store/store';
import {styles} from './styles';

interface Props {
  id: number;
  title: string;
  content: string;
  created: string;
}

export const CardComment: React.FC<Props> = ({id, title, content, created}) => {
  const [cardInput, setCardInput] = useState(content);
  const [inputState, setInputState] = useState(false);

  const updateComment = useCallback(() => {
    promiseListener
      .createAsyncFunction({
        start: updateCommentRequest.type,
        resolve: updateCommentSuccess.type,
        reject: updateCommentFailure.type,
      })
      .asyncFunction({
        id: id,
        body: cardInput,
        created: created,
      })
      .then(
        () => {},
        () => showError(),
      );
  }, [cardInput, created, id]);

  const deleteComment = useCallback(() => {
    promiseListener
      .createAsyncFunction({
        start: deleteCommentRequest.type,
        resolve: deleteCommentSuccess.type,
        reject: deleteCommentFailure.type,
      })
      .asyncFunction(id)
      .then(
        () => {
          console.log('deleted');
        },
        () => showError(),
      );
  }, [id]);

  function showError(): void {
    Alert.alert('Something went wrong!');
  }

  function diffInTime(): string {
    const diffTime = Math.abs(Date.now() - Date.parse(created));
    const val: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return val.toString() + (val === 1 ? ' day' : ' days') + ' ago';
  }

  return (
    <>
      <Swipeable
        renderLeftActions={() => (
          <View
            onTouchEnd={() => setInputState((ps) => !ps)}
            style={styles.swipeUpdate}>
            <Text style={styles.swipeText}>Update</Text>
          </View>
        )}
        renderRightActions={() => (
          <View onTouchEnd={deleteComment} style={styles.swipeDelete}>
            <Text style={styles.swipeText}>Delete</Text>
          </View>
        )}>
        <View style={styles.comments}>
          <View style={styles.shouldBeImage} />
          <View>
            <View style={styles.topContainer}>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.textTime}>{diffInTime()}</Text>
            </View>
            <View>
              {inputState ? (
                <TextInput
                  autoCompleteType="name"
                  value={cardInput}
                  onChangeText={setCardInput}
                  onBlur={() => {
                    setInputState(false);
                    updateComment();
                  }}
                />
              ) : (
                <Text style={styles.textContent}>{cardInput}</Text>
              )}
            </View>
          </View>
        </View>
      </Swipeable>
    </>
  );
};

import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {useDispatch} from 'react-redux';
import {
  deleteCommentRequest,
  updateCommentRequest,
} from '../../store/comments/commentsAction';
import {styles} from './styles';

interface Props {
  id: number;
  title: string;
  content: string;
  created: string;
}

export const CardComment: React.FC<Props> = ({id, title, content, created}) => {
  const dispatch = useDispatch();

  const [cardInput, setCardInput] = useState(content);
  const [inputState, setInputState] = useState(false);

  const updateComment = useCallback(() => {
    dispatch(
      updateCommentRequest({
        id: id,
        body: cardInput,
        created: created,
      }),
    );
  }, [cardInput, created, dispatch, id]);

  const deleteComment = useCallback(() => {
    dispatch(deleteCommentRequest(id));
  }, [dispatch, id]);

  function diffInTime(): string {
    const diffTime = Math.abs(Date.now() - Date.parse(created));
    const val: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
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

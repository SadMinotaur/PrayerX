import React from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginActionRequest} from '../../store/user/userActions';
import {styles} from './styles';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = ({name}) => {
  const dispatch = useDispatch();
  dispatch(loginActionRequest({email: '', password: ''}));
  return <Text style={styles.text}>{name}</Text>;
};

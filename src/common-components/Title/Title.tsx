import React from 'react';
import {Alert, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {regAction} from '../../store/user/userActions';
import {styles} from './styles';

interface TitleProps {
  name: string;
}

export const Title: React.FC<TitleProps> = ({name}) => {
  const dispatch = useDispatch();
  dispatch({type: 'REG_USER', payload: 'test'});
  return <Text style={styles.text}>{name}</Text>;
};

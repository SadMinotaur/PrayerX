import React from 'react';
import {Image} from 'react-native';

interface Props {}

export const PeopleIcon: React.FC<Props> = () => (
  <Image source={require('./../../../assets/icons/human.png')} />
);

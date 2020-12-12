import React from 'react';
import {Image} from 'react-native';

interface Props {}

export const PeopleIcon: React.FC<Props> = () => (
  <Image
    style={{width: 24, height: 24, resizeMode: 'contain'}}
    source={require('./../../../assets/icons/human.png')}
  />
);

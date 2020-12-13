/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

interface Props {}

export const HumanIcon: React.FC<Props> = () => (
  <Image
    style={{width: 24, height: 24, resizeMode: 'contain'}}
    source={require('./../../../assets/icons/human.png')}
  />
);

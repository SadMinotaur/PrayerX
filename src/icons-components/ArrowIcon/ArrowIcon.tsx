/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';

interface Props {
  onTouchEnd?: () => void;
}

export const ArrowIcon: React.FC<Props> = ({onTouchEnd}) => (
  <View onTouchEnd={onTouchEnd}>
    <Image
      style={{width: 16, height: 16, margin: 4}}
      source={require('./../../../assets/icons/arrow.png')}
    />
  </View>
);

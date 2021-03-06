/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

interface Props {}

const colors = ['#AC5253', '#72A8BC', '#BFB393'];

export const LeftLine: React.FC<Props> = () => (
  <View
    style={{
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      width: 3,
      height: 24,
      borderRadius: 3,
    }}
  />
);

import React from 'react';
import {Image, View} from 'react-native';
import Plus from './../../../assets/icons/plus.svg';

interface Props {
  size: number;
  marginTop?: number;
  onTapEnd?: () => void;
  backGround: boolean;
}

export const PlusIcon: React.FC<Props> = ({
  onTapEnd: onTapEnd,
  size,
  marginTop,
  backGround,
}) =>
  backGround ? (
    <View
      style={{
        height: size,
        padding: 7.5,
        backgroundColor: '#BFB393',
        borderRadius: 50,
      }}>
      <Image
        style={{
          width: size - 15,
          height: size - 15,
          resizeMode: 'contain',
        }}
        source={require('./../../../assets/icons/plusBackground.png')}
      />
    </View>
  ) : (
    <Plus
      onTouchStart={onTapEnd}
      width={size}
      height={size}
      style={{
        marginTop: marginTop,
        marginLeft: 15,
        marginRight: 15,
      }}
    />
  );

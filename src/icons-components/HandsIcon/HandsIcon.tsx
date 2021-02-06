import React from 'react';
import Hands from './../../../assets/icons/hands.svg';
import HandsBack from './../../../assets/icons/handsWithBack.svg';

interface Props {
  backGround: boolean;
  onTap?: () => void;
}

export const HandsIcon: React.FC<Props> = ({backGround}) =>
  backGround ? <HandsBack /> : <Hands />;

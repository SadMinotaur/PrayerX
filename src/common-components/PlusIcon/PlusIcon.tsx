import React from 'react';
import Plus from './../../../assets/icons/plus.svg';

interface Props {
  size: number;
  marginTop?: number;
  onClick?: () => void;
}

export const PlusIcon: React.FC<Props> = ({onClick, size, marginTop}) => (
  <Plus
    onTouchStart={onClick}
    width={size}
    height={size}
    style={{
      marginTop: marginTop,
      marginLeft: 15,
      marginRight: 15,
    }}
  />
);

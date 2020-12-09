import React from 'react';
import Plus from './../../../assets/icons/plus.svg';

interface Props {
  size: number;
  marginTop?: number;
  onTapEnd?: () => void;
}

export const PlusIcon: React.FC<Props> = ({
  onTapEnd: onClick,
  size,
  marginTop,
}) => (
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

import React from 'react';
import Plus from './../../../assets/icons/plus.svg';

interface Props {
  size: number;
  onClick?: () => void;
}

export const PlusIcon: React.FC<Props> = ({onClick, size}) => {
  return (
    <Plus
      onTouchStart={onClick}
      width={size}
      height={size}
      style={{
        margin: 15,
      }}
    />
  );
};

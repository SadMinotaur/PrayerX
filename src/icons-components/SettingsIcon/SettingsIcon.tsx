import React from 'react';
import SettingsI from './../../../assets/icons/settings.svg';
import {styles} from './styles';

interface Props {
  onTap: () => void;
}

export const SettingsIcon: React.FC<Props> = ({onTap}) => (
  <SettingsI onTouchEnd={onTap} style={styles.icon} />
);

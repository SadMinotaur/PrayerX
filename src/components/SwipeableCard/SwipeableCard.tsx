import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Swipeable} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import {PeopleIcon} from '../../common-components/PeopleIcon';
import {HandsIcon} from '../../common-components/HandsIcon/HandsIcon';

interface Props {
  title: string;
  onDeleteTap: () => void;
  onValueChange: (val: boolean) => void;
}

export const SwipeableCard: React.FC<Props> = ({
  title,
  onDeleteTap,
  onValueChange,
}) => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <Swipeable
      renderRightActions={() => (
        <View onTouchEnd={onDeleteTap} style={styles.swipeDelete}>
          <Text style={styles.swipeDeleteText}>Delete</Text>
        </View>
      )}>
      <View style={styles.swipeContainer}>
        <View style={styles.line} />
        <CheckBox
          style={styles.checkBox}
          disabled={false}
          value={checkBox}
          onValueChange={() => {
            onValueChange(!checkBox);
            setCheckBox((ps) => !ps);
          }}
        />
        <Text style={styles.cardText}>{title}</Text>
        <PeopleIcon />
        <Text style={styles.prayText}>3</Text>
        <HandsIcon />
        <Text style={styles.prayText}>123</Text>
      </View>
    </Swipeable>
  );
};

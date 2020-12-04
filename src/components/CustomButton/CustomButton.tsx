import React from 'react';
import {ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';

interface CustomButtonProps {
  borderStyle: ViewStyle;
  text: string;
  textStyle: ViewStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  borderStyle,
  text,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={borderStyle} onPress={() => {}}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

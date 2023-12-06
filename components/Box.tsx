import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from '../utils/scale';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

interface BoxProps {
  state?: unknown;
  onPress?: () => void;
};

const Box = (props ?: BoxProps) => {

  return (
    <TouchableOpacity onPress={props?.onPress}>
        <View style={style.container}>
          {
            props?.state === 'O' ?
            <FontAwesome5 name="circle" size={scale(55)} color="blue" /> :
            props?.state === 'X' ?
            <AntDesign name="close" size={scale(65)} color="red" /> :
            <></>
          }
        </View>
    </TouchableOpacity>
  )
}

export default Box;

const style = StyleSheet.create({
    container: {
      backgroundColor: '#bdbdbdbd',
      alignItems: 'center',
      justifyContent: 'center',
      // padding: scale(40),
      height: scale(80),
      width: scale(80),
      borderRadius: scale(5),
      margin: scale(3) 
    }
});
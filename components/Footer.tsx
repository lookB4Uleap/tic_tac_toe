import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { scale } from '../utils/scale';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';


const Footer = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="circle" size={scale(14)} color="blue" />
      <Text style={[styles.text, {color: 'blue'}]}>PLAYER</Text>
      <AntDesign name="close" size={scale(20)} color="red" />
      <Text style={[styles.text, {color: 'red'}]}>AI</Text>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(4),
        // backgroundColor: '#feeded',
        width: '100%'
    },
    text: {
        fontSize: scale(14),
        paddingStart: scale(10),
        paddingEnd: scale(20)
    }
});